---
title: React NativeでiOSとAndroidのアプリのアイコンを変更する
date: 2018-11-23
---

ReactNativeというわけではないけど、iOSとAndroidのアプリのアイコンをデフォルト画像から自前で準備したアイコンに設定する時のメモ。と言っても驚くほど簡単だった。

# アプリのアイコン画像を準備する

まずは画像の準備から。
アイコンサイズは `1024 x 1024` で準備しとく。

<img src="./images/2018-11-23/icon.png" width="20%">

たぶんPhotoshopやXDを使って作成すると、サイズ別で書き出しが出来ると思うけど、それらが無い場合はそれぞれのサイズに書き出してくれるWebサービスを使っても出来そう。パッと試したい時とか。

使ったのは下記のサービス
[App Icon Resizer](https://resizeappicon.com/)

ここに画像をアップロードすると、iOS,Androidに必要なアイコンをサイズ別でダウンロードすることが出来る。これらをダウンロードして手元に持っておく。

# iOSでアプリのアイコンを設定する

iOSの場合はXCodeからアイコン設定出来る
Xcodeでプロジェクトを開く(`/ios/hoge.xcodeproj`をXcodeで開く)

下記のキャプチャのように `images.xcassets` → `AppIcon` をクリックすると、サイズ別にアプリアイコンが設定出来るので、そこに画像をドラッグ&ドロップで格納していく。

<img src="./images/2018-11-23/xcode.png" width="50%">

これで`react-native run-ios`して、シミュレーター上でもアイコンが変更されてたらOK!

<img src="./images/2018-11-23/iphone.png" width="50%">

# Andoirdでアプリのアイコンを設定する

Android側はAndroid Studioは使わない。ディレクトリに画像を入れるのみ。入れる場所は、`/android/app/src/main/res/`の直下に、
`mipmap-mdpi`
`mipmap-hdpi`
`mipmap-xhdpi`
`mipmap-xxhdpi`
`mipmap-xxxhdpi`
のサイズ別のディレクトリがあって、すでにデフォルトのアプリアイコンの画像が格納されているので、そこの画像を差し替えする。

画像サイズは下記のように格納する
`mdpi → 48 x 48`
`hdpi → 72 x 72`
`xhdpi → 96 x 96`
`xxhdpi → 144 x 144`
`xxxhdpi → 192 x 192`

この`mipmap-mdpi`などのディレクトリ名と`ic_launcher.png`のファイル名は変更出来て、`android/app/src/main/AndroidManifest.xml`の`android:icon="@mipmap/ic_launcher"`で管理されている。

またAndroid7.1からはアプリアイコンに丸いアイコンが追加されて`AndroidManifest.xml`で従来のアイコンの他に`android:roundIcon="@mipmap/ic_launcher_round"`を指定しておくと、対応デバイスで丸いアイコンが表示されるようになったもよう。

差し替えた状態で`react-native run-android`してシミュレーター上でもアプリアイコンが変わっていたらOK!

<img src="./images/2018-11-23/android.png" width="50%">

シミュレーターでうまくいってたら実機側も問題なくアイコン画像変わってた! おしまい。
