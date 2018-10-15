---
title: highlight.jsのソースコードを改行させないCSS
date: 2018-10-16
---

このブログは、<a href="https://highlightjs.org/" target="_blank">hightlight.js</a>を使ってソースコードのハイライトを表示しているけど、デフォルトだと改行するようになっていて、改行させたくないなぁと思ってた。そんな時のCSS。

``` css
pre,
code {
  overflow: auto;
  word-wrap: normal;
  white-space: pre;
}
```

これでスクロールしてソースコード表示出来るように。
ただiOSだとスクロールに引っ掛かりがあるので、さらに `-webkit-overflow-scrolling: touch;` を入れてスムーズにスクロールするようにした。


