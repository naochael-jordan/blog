---
title: 1年分のDateオブジェクトを月単位の配列で取得する JS 
date: 2018-10-20
---

文章で説明するのが難しいけど、  
家計簿っぽいものを作ってると今日の日付から1年前までの月単位のDateオブジェクトの配列データが欲しかったりする。

今日が、2018年10月20日だとすると
```js
[
  Sat Oct 20 2018 00:00:00 GMT+0900 (日本標準時) {},
  Thu Sep 20 2018 00:00:00 GMT+0900 (日本標準時) {},
  Mon Aug 20 2018 00:00:00 GMT+0900 (日本標準時) {},
  Fri Jul 20 2018 00:00:00 GMT+0900 (日本標準時) {},
  Wed Jun 20 2018 00:00:00 GMT+0900 (日本標準時) {},
  Sun May 20 2018 00:00:00 GMT+0900 (日本標準時) {},
  Fri Apr 20 2018 00:00:00 GMT+0900 (日本標準時) {},
  Tue Mar 20 2018 00:00:00 GMT+0900 (日本標準時) {},
  Tue Feb 20 2018 00:00:00 GMT+0900 (日本標準時) {},
  Sat Jan 20 2018 00:00:00 GMT+0900 (日本標準時) {},
  Wed Dec 20 2017 00:00:00 GMT+0900 (日本標準時) {},
  Mon Nov 20 2017 00:00:00 GMT+0900 (日本標準時) {}
]
```
こんなDateオブジェクトが入った配列が欲しい時

これは下記で取得できる
```js
[...Array(12)].map((_, index) => {
  const today = new Date();
  return new Date(
    today.getFullYear(),
    today.getMonth() - index,
    today.getDate()
  );
});
```

手順的には、
- `[...Array(12)]`で `[undefined, undefined, ...]`が取れて、それをmapする(今回は12ヶ月分の配列が欲しいので)
- `new Date(年, 月, 日)`で指定した日付のDateオブジェクトが取れるので、`today.getMonth() - index`で月をデクリメントしつつ返してあげる

単純だけど、一瞬あれどうだっけ？となるのでメモ。
