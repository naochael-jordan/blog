---
title: React Native v0.57以降のTypeScript環境構築
date: 2018-11-12
---

ReactNative v0.57以降はTypeScriptがデフォルトから書けるということでやってみたら確かに出来たので、構築方法の備忘録。
https://qiita.com/Nkzn/items/cf1516136d2db981fbb9

まずはReactNativeプロジェクトをinitで作成。
```bash
react-native init react-native-typescript
```

必要なnode_modulesをインストール
```bash
yarn add --dev typescript @types/react @types/react-native
```

tsconfig.jsonの雛形を作成
```bash
yarn tsc --init --pretty --jsx react
```

tsconfig.jsonの`"allowSyntheticDefaultImports": true,`のコメントアウトを外す

以上で完了なので、iosを立ち上げてみる。

```bash
react-native run-ios
```

<img src="./images/2018-11-12/iphone3.png" width="50%">

完了!
