---
title: highlight.jsのソースコードを改行させないCSS
date: 2018-10-16
---

このブログは、<a href="https://highlightjs.org/" target="_blank">hightlight.js</a>を使ってソースコードのハイライト表示をしているけど、デフォルトだと横幅を超えると改行されるようになっていて、これを改行させずにスクロールして表示するようにしたいなぁと思ってた。そんな時のCSS。

``` css
pre {
  overflow: auto;
  word-wrap: normal;
  white-space: pre;
}
```

これでスクロールしてソースコード表示出来るように。
ただiOSだとスクロールに引っ掛かりがあるので、さらに `-webkit-overflow-scrolling: touch;` を入れてスムーズにスクロールするようにした。


