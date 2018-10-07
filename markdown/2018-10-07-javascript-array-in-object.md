---
title: JS 配列の中から対象オブジェクトを取り出す
date: 2018-10-07
---

JavaScriptで実装してると、配列の中がオブジェクトから成り立ってるという事がよくある

```js
const list = [
  { id: 1, name: 'ナオケル', sex: '男性' },
  { id: 2, name: 'ジョーダン', sex: '男性' },
  { id: 3, name: '花子', sex: '女性' }
];
```

そしてこれを操作したい時に、
`ある条件のオブジェクトだけを1つ取り出す`
もしくは、
`ある条件のオブジェクトだけにフィルタリングされた配列を取得する`
ということがままある

実装自体はすごく簡単だけど、そんな時の備忘録として

# 配列から指定のオブジェクトを1つだけ取り出す

`find()`を使うと、配列の中から条件にあった最初の要素を1つ返してくれる
見つからないときは`undifined`を返す

<a href="https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/find">Array.prototype.find()</a>

``` js
const list = [
  { id: 1, name: 'ナオケル', sex: '男性' },
  { id: 2, name: 'ジョーダン', sex: '男性' },
  { id: 3, name: '花子', sex: '女性' }
];

const result = list.find(item => item.id === 2); // idが2の要素を返す

console.log(result); // { id: 2, name: 'ジョーダン', sex: '男性' }
```

# 配列から指定のオブジェクトからなる配列を取得する

`filter()`を使うと、関数の条件が`true`の要素からなる配列を返してくれる
見つからないときは空の配列を返す

<a href="https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/filter">Array.prototype.filter()</a>

``` js
const list = [
  { id: 1, name: 'ナオケル', sex: '男性' },
  { id: 2, name: 'ジョーダン', sex: '男性' },
  { id: 3, name: '花子', sex: '女性' }
];

const result = list.filter(item => item.sex === '男性'); // sexが男性の要素の配列を返す

/*
  [
    { id: 1, name: 'ナオケル', sex: '男性' },
    { id: 2, name: 'ジョーダン', sex: '男性' }
  ]
*/
console.log(result);
```

かなり基礎的だけど、
配列操作はかなり頻繁に起きうるのでしっかり固めたい。
