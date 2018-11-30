---
title: AWS Lambda + Puppeteerでダイナミックレンダリングする
date: 2018-11-30
---

基本的には下記のサイトが非常に参考になった。
[SSRをやめる。OGP対応はLambda@Edgeでダイナミックレンダリングする。](https://qiita.com/geerpm/items/78e2b85dca3cb698e98d)

この記事ではPuppeteerは使っていないが、Puppeteerで目的のダイナミックレンダリングが出来そうだったのでやってみた。

基本的に上記のやり方を参考に進めて、最後の実際にダイナミックレンダリングするところだけ、Puppeteerを使うように変更した。今回はその部分の備忘録。ServerlessもWebpackも使っていない。

まずはLambdaでPuppeteerを動かす、事をやらないといけないけど、手順としては
`zipでnode_modulesとかも含めて固めてLambda上でそのzipをアップロード`
という感じ。
Serverlessを使うとその辺りのデプロイ作業が効率化出来るので実案件とかだと使った方が良さそう。

ローカルの作業場所はどこでも良いので、おもむろに `yarn init -y` とかでpackage.jsonを生成する。

そのあと必要なモジュールをインストールしていくが、puppeteerを普通に`npm install`すると、Chromiumも一緒にダウンロードしてしまって、そうなるとLambdaの50MBの制限に容易に引っかかってしまう。

なので、`.npmrc`をpackage.jsonと同じ階層に作って、
`puppeteer_skip_chromium_download=true`
を書いておくことで、そのChromiumのダウンロードをスキップすることができるのでやっておく。

※Puppeteer1.7以降は`puppeteer-core`がインストールできるようになったので、下記のpuppeteerの代わりに`puppeteer-core`をインストールして使う場合は、この手順は不要になりそう。

それが終わったら、PuppeteerをLambda上で動かすのに必要なものを `npm install` する。
```json
"dependencies": {
  "@serverless-chrome/lambda": "1.0.0-38",
  "chrome-remote-interface": "^0.27.0",
  "puppeteer": "1.2.0"
}
```

インストール出来たら実際にPuppeteerを使ってダイナミックレンダリングする実装を`index.js`に書いていく。

```js
"use strict";

const launchChrome = require("@serverless-chrome/lambda");
const CDP = require("chrome-remote-interface");
const puppeteer = require("puppeteer");

exports.handler = async (event, context, callback) => {
  const request = event.Records[0].cf.request;

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
    page.setUserAgent("Android"); // UA変えたい時に
    
    // Googleのページで、ネットワークのアイドルが0になるまで(読み込み完了まで)待機
    await page.goto("https://google.com", {
      waitUntil: "networkidle0"
    });
    const html = await page.content(); // ダイナミックレンダリングした結果のDOM要素を取得

    // レスポンス用のObjectを作る
    const response = {
      body: html,
      bodyEncoding: "text",
      headers: {
        // Response header
      },
      status: 200
    };

    // ダイナミックレンダリングした結果のDOMを返す
    return callback(null, response);
  } catch (err) {
    console.error(err);
    return callback(null, request);
  } finally {
    if (page) {
      await page.close();
    }
    if (browser) {
      await browser.disconnect();
    }
    if (slsChrome) {
      await slsChrome.kill();
    }
  }
};

```

こんな感じにした。

これが出来たら`node_modules`や`package.json`、`index.js`など含めてzip化する。

ここの注意点はFinderの右クリックでzip化してしまうとLambdaで動かした時にエラーが出てしまう。
zip化はコマンドで行うと問題なかった。

zipをLambdaにアップロードしてデプロイし、ChromeのDevToolsの`Network conditions`から`Googlebot`をチェックしてサイトにアクセスすると、目的のサイト、この場合は `https://google.com` のレンダリング結果が描画されて、`Googlebot`以外の場合は元のサイトが描画されることが確認できた。

<!-- [モバイルフレンドリーテスト](https://search.google.com/test/mobile-friendly?hl=ja)をやってもちゃんとGoogleのサイトの方がレンダリングされていた。 -->

# ハマったところ

この実装をしていてハマったところがあり、WebSocketでPuppeteerとconnectするところ。
何度やってもタイムアウトエラーになってしまって、ぱっと見何が原因か全然わからなかった。

色々試したところ、どうもLambdaの管理画面上で設定できる、メモリとタイムアウトまでの時間を変更する必要があった。
デフォルトのマシンの性能だと非力すぎて、タイムアウトまでに処理が出来ない、ということのようだ。

デフォルトの設定から
メモリ 128MB → 2GB
タイムアウト 3秒 → 30秒
に変えたところエラーが消えて、無事にPuppeteerがLambda上で動いた。

# まとめ
Lambdaの仕組みからよく分かってなかったのでキャッチアップしながら進めて、ちゃんとPuppeteerで動かすところまでいけたのはよかった。
実際にはLambda上でPuppeteerを動かすところまでが割りかし大変で、動いてしまえば後は下り坂を降りてる気分だった。

おしまい。
