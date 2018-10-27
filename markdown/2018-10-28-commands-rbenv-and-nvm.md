---
title: rbenvとnvmのコマンド早見表
date: 2018-10-28
---

いつも`rbenv`と`nvm`のコマンド何だっけ？ってググる事になるので、さっと打てるようにメモしておく。

# rbenv

```bash
$ rbenv install -l    # インストール可能なバージョンを一覧表示
$ rbenv versions      # 現在インストールされているバージョン表示
$ rbenv install 2.2.0 # 指定バージョンをインストール
$ rbenv global 2.2.0  # 指定バージョンをglobalにインストール
$ rbenv local 2.2.0   # 指定バージョンをlocalにインストール
$ rbenv rehash        # ruby -vでバージョン変わらない時とかに

$ cd ~/.rbenv/plugins/ruby-build && git pull # ruby-buildを最新に(rbenv install -l 結果をupdateしたい時)
```

# nvm

```bash
$ nvm ls-remote            # インストール可能なバージョンを一覧表示
$ nvm install v9.4.0       # 指定バージョンをインストール 切り替えまでするもよう
$ nvm ls                   # 現在インストールされている全バージョンを確認
$ nvm use v9.4.0           # 指定バージョンに変更
$ nvm alias default v9.4.0 # PCのSystemのdefaultバージョンを指定
```
