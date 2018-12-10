---
title: ReactNative + FirestoreでiOSの環境構築
date: 2018-12-09
---

ReactNative + Firestoreの環境構築を進めていたけど、結構ハマりポイントがあったので忘れないうちに備忘録。

基本的には下記の公式ドキュメントを元に進めていく。
[https://rnfirebase.io/docs/v5.x.x/installation/initial-setup](https://rnfirebase.io/docs/v5.x.x/installation/initial-setup)

まずはプロジェクトの作成から
```bash
react-native init hogehoge
react-native run-ios # ちゃんと立ち上がるか見ておく(これしないと後々のこれで CFBundleIdentifierのエラーが出る事があった..)
```

問題なく立ち上がったら、必要なモジュールをインストールする。
```bash
yarn add react-native-firebase
```

`GoogleService-Info.plist`を入れたり、ソースの修正が必要なので、Xcodeを立ち上げる。
```bash
open ios/{PROJECT_NAME}.xcodeproj
```

Firebaseでプロジェクトを作って、 `GoogleService-Info.plist` をダウンロード。
この辺りは、[ドキュメントを参照](https://rnfirebase.io/docs/v5.x.x/installation/initial-setup)するしてダウンロードまで進める。

それと、Firestoreを使うので、Firestore上で最初の使いますボタンをポチだけ終わらせとく。

`GoogleService-Info.plist`がダウンロード出来たら、それをXcodeのプロジェクト内にドラッグして入れる。
その際にリファレンス付けるかのポップアップが出るので、リファレンス付きで入れるようにする。
(直接Finderなどから`ios`直下に入れてもダメで、ちゃんとドラッグしてリファレンス付きで入れたらよかった。ちゃんと入ってないとrun-iosした時にアプリが立ち上がってすぐにエラー画面なくクラッシュした感じになる)
	
またXcodeのBundleIDをGoogleService-info.plistのBundleIDと合わせる。
合わせなくてもrun-iosは走るが、たぶん最終的にXcodeでビルドする時にエラーになるっぽい。

次にXcode上の`AppDelegate.m`を開いて、先頭に下記を追加。先頭と言ってもファイルの先頭である必要はなく、他の`#import`の下とかで良い。
```
#import <Firebase.h>
```

それと、`didFinishLaunchingWithOptions:(NSDictionary *)launchOptions`メソッドの下に以下を追加する
```
[FIRApp configure];
```

これでXcodeは閉じて良い。

次に、ターミナル上で、`Podfile`を生成する
```
cd ios
pod init
```

`Podfile`が出来たら下記をする
- `platform :ios, '9.0'`のコメントアウトを外す
- `pod 'Firebase/Core'` を足す
- 下記の部分をコメントにする(pod install時にエラー出るので)
```
# target 'rnf9-tvOSTests' do
#   inherit! :search_paths
#   # Pods for testing
# end
```

※`pod 'Firebase/Firestore'`を`pod 'Firebase/Core'`と一緒に書いて入れたいところだけど、なぜかCoreと一緒にインストールすると、エラーが出て動かない。まずCoreを入れて、そのあとにFirestoreを入れるとうまく動いた。

上記の`Podfile`の修正が終わったら
```
pod install
```

`pod 'Firebase/Core'`のインストールが終わったら、`Podfile`にFirestoreを書き足す。
```
pod 'Firebase/Firestore'
```

もう一度、インストール。(なんだこのステップ..)
```
pod install
```

最後にそれらのモジュールをlinkする
```bash
cd ../
react-native link react-native-firebase
```

ちゃんと使えるかチェックする。App.jsに下記を追加。
```js
import firebase from "react-native-firebase";
const main = async () => {
  await firebase
    .firestore()
    .collection("hoge")
    .add({
      value: '入ってーーー',
    });
};
main();
```

```bash
react-native run-ios
```

更新のたびに、Firestoreにデータが格納されていけば成功。
