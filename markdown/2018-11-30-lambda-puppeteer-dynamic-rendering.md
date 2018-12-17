---
title: AWS Lambda + Puppeteerでダイナミックレンダリングする
date: 2018-11-30
---

基本的には下記のサイトが非常に参考になった。
[SSRをやめる。OGP対応はLambda@Edgeでダイナミックレンダリングする。](https://qiita.com/geerpm/items/78e2b85dca3cb698e98d)

この記事ではPuppeteerは使っていないが、Puppeteerで目的のダイナミックレンダリングが出来そうだったのでやってみた。

基本的に上記のやり方を参考に進めて、キモであるダイナミックレンダリングするところだけ、Puppeteerを使うように変更した。今回は主にその部分の備忘録。ServerlessもWebpackも使っていない。

# 全体の流れ

まずはざっくりとした全体の流れから。
1. **index.html, css, jsとかのアセットをS3に配置して静的ホスティングする**
1. **そのS3をCloudFront経由で配信する**
1. **LambdaのViewer RequestでUserAgentからボットの判別をして、ボットだったらカスタムヘッダーを付与する**
1. **LambdaのOrigin Requestでボット用のカスタムヘッダーが付いてたらPuppeteerでダイナミックレンダリングする**

Viewer RequestやOrigin RequestなどのLambda@Edgeのライフサイクルイベントについては、[公式](https://docs.aws.amazon.com/ja_jp/lambda/latest/dg/lambda-edge.html)がわかりやすい。

以下、CloudFrontで配信するのが終わったあとのところから。

# LambdaのViewer RequestでUserAgentからボットの判別をして、ボットだったらカスタムヘッダーを付与する

ほとんど参考記事のままだが、下記のようなViewer Request Functionを準備して、Lambda上のエディタにペーストしてデプロイ。
```js
"use strict";

const crawlers = [
  "Googlebot",
  "facebookexternalhit",
  "Twitterbot",
  "bingbot",
  "msnbot"
];

const excludeSuffixes = [
  "jpg",
  "png",
  "gif",
  "jpeg",
  "svg",
  "css",
  "js",
  "json",
  "txt",
  "ico",
  "map"
];

const HTTP_HEAD_NEED_DR = "x-need-dynamic-render";

exports.handler = (event, context, callback) => {
  const request = event.Records[0].cf.request;
  const headers = request.headers;

  const suffix =
    request.uri == null || request.uri == "/"
      ? ""
      : request.uri
          .split("?")
          .shift()
          .split(".")
          .pop()
          .toLowerCase();
  const maybeHtml = !excludeSuffixes.some(es => es === suffix);

  const isCrawler = crawlers.some(c => {
    return headers["user-agent"][0].value.includes(c);
  });

  // UserAgentがクローラーで、かつhtmlのアクセスだったらカスタムヘッダーをつける
  if (isCrawler && maybeHtml) {
    request.headers[HTTP_HEAD_NEED_DR] = [
      {
        key: "X-Need-Dynamic-Render",
        value: "true"
      }
    ];
  }

  callback(null, request);
};
```

# LambdaのOrigin Requestでボット用のカスタムヘッダーが付いてたらPuppeteerでダイナミックレンダリングする

ここの流れとしては、
1. **npm initしてpackage.jsonを生成**
1. **Puppeteerとか必要なモジュールをnpm install**
1. **Puppeteerを使ってダイナミックレンダリングの処理を書く**
1. **実装が終わったら、node_modulesとかも含めてzip圧縮してLambda上からzipでアップロードして、デプロイする**

という感じ。

Serverlessを使うとzip化してデプロイの作業が効率化出来るので実案件とかだと使った方が良さそう。

ローカルの作業場所はどこでも良いので、おもむろに `npm init -y` とかでpackage.jsonを生成する。
そして必要なモジュールを`npm install`していく
```json
"dependencies": {
  "@serverless-chrome/lambda": "^1.0.0-55",
  "chrome-remote-interface": "^0.27.0",
  "puppeteer-core": "^1.11.0"
}
```

`puppeteer-core`じゃなくて`puppeteer`を普通に`npm install`すると、Chromiumも一緒にダウンロードしてしまって、そうなるとLambdaの50MBの制限に容易に引っかかってしまう。
なのでPuppeteer1.7以降から追加された、`puppeteer-core`をインストールするようにする。

インストール出来たら実際にPuppeteerを使ってダイナミックレンダリングする実装を`index.js`に書いていく。
```js
"use strict";

const launchChrome = require("@serverless-chrome/lambda");
const CDP = require("chrome-remote-interface");
const puppeteer = require("puppeteer-core");

exports.handler = async (event, context, callback) => {
  const HTTP_HEAD_NEED_DR = "x-need-dynamic-render";
  const request = event.Records[0].cf.request;
  const headers = request.headers;

  // クローラーじゃなかったら何もしない
  if (!headers[HTTP_HEAD_NEED_DR]) return callback(null, request);

  // クローラーだったら、ダイナミックレンダリングする
  let slsChrome = null;
  let browser = null;
  let page = null;

  try {
    // Chromeの立ち上げ
    slsChrome = await launchChrome();

    // WebSocketを使ってPuppeteerと繋げる
    browser = await puppeteer.connect({
      browserWSEndpoint: (await CDP.Version()).webSocketDebuggerUrl
    });

    page = await browser.newPage();
    await page.goto("https://ダイナミックレンダリングしたいURL/", {
      waitUntil: "networkidle0"
    });
    const html = await page.content();

    await browser.close();
    await slsChrome.kill();

    const response = {
      status: "200",
      statusDescription: "OK",
      headers: {
        "cache-control": [
          {
            key: "Cache-Control",
            value: "max-age=100"
          }
        ],
        "content-type": [
          {
            key: "Content-Type",
            value: "text/html"
          }
        ],
        "content-encoding": [
          {
            key: "Content-Encoding",
            value: "UTF-8"
          }
        ]
      },
      body: html.replace("<html", '<html style="background: #ff0;"') // 試しにボットの時だけ背景色を黄色に変えてみる
    };

    return callback(null, response);
  } catch (err) {
    return callback(err);
  }
};
```

こんな感じに。
ボットの時に元のコンテンツに変化がないと、ちゃんとダイナミックレンダリングされてるか分からないので、`<html style="background: #ff0;">`を入れて全体が黄色になればOKという感じにした。

これが出来たら`node_modules`や`package.json`、`index.js`など含めてzip化する。
そのzipをLambdaにアップロードしてデプロイする。

# 注意点

## Finderの右クリックでzip化してしまうとLambdaで動かした時にエラーが出てしまう

zip化はコマンドで行うと問題なかった。
package.jsonのある場所で、`zip -r app.zip * `とかでzipにする。


## Origin Requestの設定

Origin Requestのデフォルトの設定だと、WebSocketでPuppeteerとconnectするところでタイムアウトエラーになってしまった。

色々試したところ、どうもLambdaの管理画面上で設定できる、メモリとタイムアウトまでの時間を変更する必要があった。
デフォルトのマシンの性能だと非力すぎて、タイムアウトまでに処理が出来ない、ということのようだ。

デフォルトの設定から
メモリ 128MB → 512MB
タイムアウト 3秒 → 30秒
に変えたところエラーが消えて、無事にPuppeteerがLambda上で動いた。

<img src="./images/2018-11-30/lambda.png" width="100%">

# 動作確認

動作確認は、ChromeのDevToolsの`Network conditions`から`Googlebot`をチェックしてサイトにアクセスすることで確認出来る。
ボットの時に黄色のページが表示されて、ボットじゃない時は元のページが表示されればOK。

<img src="./images/2018-11-30/pc.png" width="100%">

[モバイルフレンドリーテスト](https://search.google.com/test/mobile-friendly?hl=ja)もOK

<img src="./images/2018-11-30/friendly.png" width="100%">

[Fetch as Google](https://support.google.com/webmasters/answer/6066468?hl=ja)も問題なさそう。
<img src="./images/2018-11-30/fetch.png" width="100%">

# まとめ
Lambdaの仕組みからよく分かってなかったのでキャッチアップしながら進めて、ちゃんとPuppeteerで動かすところまでいけたのはよかった。
実際にはLambda上でPuppeteerを動かすところまでが割りかし大変で、動いてしまえば後は下り坂を降りてる気分だった。

おしまい。
