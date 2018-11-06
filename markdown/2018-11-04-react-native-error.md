---
title: React Nativeで起きたエラーと解決策
date: 2018-11-04
---

React Nativeの開発で起きたエラーと解決策のまとめ

# Print: Entry, “:CFBundleIdentifier”, Does Not Exist

`react-native init hogehoge` して
`react-native run-ios`した時に出たエラー
”:CFBundleIdentifier”が見つからないもよう

→ 解決策
`react-native upgrade`すると直った

参考
https://www.haneca.net/react-native-cfbundleidentifier-error/
https://stackoverflow.com/questions/37461703/print-entry-cfbundleidentifier-does-not-exist

# yarn testでCouldn't find preset "module:metro-react-native-babel-preset"

`yarn test` した時に下記のようなエラーが出た
```
Couldn't find preset "module:metro-react-native-babel-preset" relative to directory "/Users/naochael/Desktop/git/naochael-jordan/sandpit/ReactNative/rnt4"
```

→ 解決策
.babelrcの中身を空っぽにしたら解決
```
{}
```
https://github.com/facebook/react-native/issues/21241#issuecomment-423610383



