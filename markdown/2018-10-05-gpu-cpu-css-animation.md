---
title: CSSアニメーションにおけるGPUをまとめてみた
date: 2018-10-05
---

最近、CSSアニメーションにおけるGPUについて調べる事があったので、まとめてみた。

# GPUとCPU
CSSアニメーションのパフォーマンスを改善する際に、GPU,CPUで処理する考え方が必要になってくる。  

## GPUとは
`GPU(Graphics Processing Unit)` ・・・ 画像処理を担当する部品の１つ  

## CPUとは
`CPU(Central Processing Unit)` ・・・ コンピュータの制御や演算や情報転送をつかさどる中枢部分

# なぜGPUがパフォーマンス改善に役立つのか
通常はCPUのみでアニメーションの演算や描画までを行っている。
ただ描画性能が高いGPUに描画処理を任せる事で、描画パフォーマンスが改善が期待出来る。  
このGPUに描画処理を任せる行為を、 `ハードウェアアクセラレーション` と呼んでいる。  

## ブラウザにおけるハードウェアアクセラレーション

通常ブラウザは、表示するページを1枚の絵として描画する。
ハードウェアアクセラレーションが適用された要素は、一枚の絵の上に別レイヤーを作る。
処理を切り離してGPUで処理させることで、処理を最適化させる事ができるという仕組み。  

<a href="http://jsfiddle.net/zFUVd/9/" target="_blank" rel="noopener">ハードウェアアクセラレーションが適用されているイメージ</a>を作っている方がいらっしゃった。

## ハードウェアアクセラレーションを適用させるには

下記のプロパティを使ったCSSアニメーションはGPU処理となる。  
- opacity
- translate
- rotate
- scale
- 3D系プロパティ(translate3D, scale3d, rotate3dなど)

# GPU処理されているか確認する

Chrome DevToolsの `Rendering` を見る事で実際にGPU処理されているか確認出来る。

具体的に下記の確認できる。
- 再描画されている要素
- GPUレイヤーで生成されている要素
- FPSなどの計測

# topやleftなどのプロパティをGPU処理させるには

topやleftなどもGPUレイヤーで処理させる事が出来る。
下記のプロパティの`いずれかを`一緒に当てると、`GPUレイヤーが生成されGPU処理`となる。  

- backface-visibility: hidden;
- transform: translateZ(0);
- transform: translate3d(0, 0, 0);

ただやはり移動させる系のプロパティは、translateやtranslate3dを使った方がパフォーマンスには良いとのこと。  

<a href="http://jsfiddle.net/eVtbM/30/" target="_blank" rel="noopener">GPU適用のExample</a>

# 注意点: GPU処理もやりすぎると逆にパフォーマンスは落ちてしまう..

とても良さそうに見えるGPU処理。
だけどGPU処理もレイヤーを生成させて管理するコストがかかっている。
やりすぎると逆にCPUへの負荷が高まりパフォーマンス低下を招いてしまうもよう。  

`GPU処理によるデメリット`
- アニメーションのチラツキ  
- 動作が重くなる  
- 描画崩壊  
- ゴミがつく  

※ハック的にGPUレイヤーを生成する `transform: translate3d(0, 0, 0);` などの指定も、多用しすぎると上記の現象が起きてしまうので、注意が必要そう。  

具体的には、下記の点に気をつけると良さそうだった。  
- GPU処理させている要素がたくさんありそうな時に注意する
- GPU処理させる要素に子要素が必要な場合は出来る限り少なくする
- 使用してない要素は、display:none;かGPU処理を切るようにする
- bodyタグなど包括しているタグに、transform: translateZ(0);は指定しない
- GPU処理もCPUへのコストがかかっている事を意識しておく
- モバイルは特にブラウザの性能が低い事を知っておく

GPUを考慮して、快適なCSSアニメーションライフを送っていきたいですね..!