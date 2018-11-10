---
title: React Nativeで起きたエラーと解決策
date: 2018-11-04
---

React Nativeの開発で起きたエラーと解決策のまとめ

# Print: Entry, “:CFBundleIdentifier”, Does Not Existのエラー

`react-native init hogehoge` して
`react-native run-ios`した時に出たエラー
”:CFBundleIdentifier”が見つからないもよう

## 解決策
```bash
npm i -g react-native-git-upgrade
react-native-git-upgrade
```
で直った。
※`react-native upgrade`でも直るっぽいけど、`react-native-git-upgrade`が公式にも載ってるupgradeの方法のようだった。

### 参考
https://www.haneca.net/react-native-cfbundleidentifier-error/
https://stackoverflow.com/questions/37461703/print-entry-cfbundleidentifier-does-not-exist

# Couldn't find preset "module:metro-react-native-babel-preset"のエラー

TypeScriptな環境を作ってる時に出たエラーで
`yarn test` した時に下記のようなエラーが出た
```
Couldn't find preset "module:metro-react-native-babel-preset" relative to directory "/Users/naochael/Desktop/git/naochael-jordan/sandpit/ReactNative/rnt4"
```

## 解決策
`yarn add --dev babel-core@^7.0.0-bridge.0 @babel/core` して
`.babelrc` → `babel.config.js` にリネームして、
```
module.exports = function(api) {
  api.cache(true);

  return {
    presets: ["module:metro-react-native-babel-preset"]
  };
};
```
を記述すると無事テストも通るようになった

`babel.config.js`は[babel自身](https://github.com/babel/babel/blob/master/babel.config.js)も使っていて、`.babelrc`より推奨されてるみたい。知らなかった。

### 参考
https://github.com/facebook/react-native/issues/21241#issuecomment-431464191
