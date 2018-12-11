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
cd hogehoge
```

必要なモジュールをインストール
```bash
yarn add react-native-firebase
```

ここから`GoogleService-Info.plist`を入れたり、ソースの修正が必要なので、Xcodeを立ち上げる。
```bash
open ios/{PROJECT_NAME}.xcodeproj
```

Firebaseでプロジェクトを作って、 `GoogleService-Info.plist` をダウンロード。
この辺りは、[ドキュメントを参照](https://rnfirebase.io/docs/v5.x.x/installation/initial-setup)してダウンロードまで進める。

それと、Firestoreを使うので、ブラウザのFirestore上で最初の使いますボタンのポチ、だけは終わらせとく。

`GoogleService-Info.plist`がダウンロード出来たら、それをXcodeのプロジェクト内にドラッグして入れる。
その際にリファレンス付けるポップアップが出るので、リファレンス付きで入れるようにする。

直接Finderなどから`ios`直下に入れてもダメで、ちゃんとドラッグしてリファレンス付きで入れる必要がある。
ちゃんと入ってないとrun-iosした時にアプリが立ち上がってすぐにエラー画面もなくクラッシュする。
	
またXcodeのBundleIDをGoogleService-info.plistのBundleIDと合わせる。
合わせなくてもrun-iosは走るが、たぶん最終的にXcodeでビルドする時はエラーになる。

次にXcode上の`AppDelegate.m`を開いて、先頭に下記を追加。先頭と言ってもファイルの先頭である必要はない。他の`#import`の下とかで良い。
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

`Podfile`されるので下記のように編集する。
```bash
platform :ios, '9.0' # ここのコメントを外す

pod 'Firebase/Core'

# これはコメントアウトしないとpod install出来ない
# target 'rnf9-tvOSTests' do
#   inherit! :search_paths
#   # Pods for testing
# end
```

※注意点
通常なら、`pod 'Firebase/Firestore'`を`pod 'Firebase/Core'`の下とかに書いて一緒に入れたいけど、なぜかCoreと一緒にインストールすると、run-ios時にエラーが出て動かない。まずCoreを入れてlinkしてFirebaseの構築が出来た後にFirestoreを入れる手順だと無事動いた。

その時のエラー文(は？って感じだ。)↓
**RNFirebase core module was not found natively on iOS, ensure you have correctly included the RNFirebase pod in your projects `Podfile` and have run `pod install`.**

上の`Podfile`の修正が終わったら
```
pod install
```

react-native-firebaseをlinkする
```bash
cd ../
react-native link react-native-firebase
```

linkが終わったタイミングで、`Podfile`にFirestoreを書き足す。
```bash
pod 'Firebase/Firestore'
```

もうFirestoreをインストール
```
pod install
```

これで動くはずなので、App.jsに以下を追加。
```js
import firebase from "react-native-firebase";

firebase
  .firestore()
  .collection("hoge")
  .add({
    value: '入ってーーー',
  });
```

ちゃんと使えるかチェックする。
```bash
react-native run-ios
```

エラーなく初期画面が立ち上がって、更新するたびにFirestoreにデータが格納されていけば成功。

# まとめ
Firestoreをpod installするタイミングとかが結構、謎でCoreと一緒のタイミングで入れたいけどダメだった。
GoogleService-info.plistもディレクトリに単に放り込めば良い的なものを見たが、Xcodeから入れないとダメだった。
結構、はてなが付く事が多いが、これで開発進められるはず..!
