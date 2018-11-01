---
title: GraphQL + RailsでDBからデータ取得までのメモ
date: 2018-11-02
---

GraphQL + Railsな環境で、
DBの`users`テーブルの中の`id`と`email`を`GraphiQL`上で取得するところまでのメモ

最終的に
[http://localhost:3000/graphiql](http://localhost:3000/graphiql)
にアクセスして、下記のクエリを実行して、
```
query {
  user {
    id
    email
  }
}
```

下記になったらゴールのところまで 
```
{
  "data": {
    "user": {
      "id": 1,
      "email": "hoge@example.com"
    }
  }
}
```

まずはrailsプロジェクトを作成
```bash
rails new graphql-rails-example
```

DB作成
```bash
rails db:create
```

`Gemfile`に`'graphql'`を追加(これを書いてる時の最新バージョンは1.8.10)
※2018年5月ぐらいのバージョン1.8+から[Class-Based API](http://graphql-ruby.org/schema/class_based_api)に変わり実装が変わって、
昔の`.define-style`な書き方だとエラー出ちゃうので、`Class-Based API`で実装していく
```ruby
gem 'graphql', '~> 1.8.10'
```

インストール
```bash
bundle
```

`graphql`は最初の雛形を作る便利なgenerateがあるので、
それを使ってもろもろ必要なファイルを生成(`Class-Based API`ベースなファイルが生成される)
```bash
rails g graphql:install
```

これで必要なファイルが生成されるのと同時に、`Gemfile`に`gem 'graphiql-rails', group: :development`が追加されて
`GraphiQL`っていうブラウザ上でGraphQLのqueryとかmutationとかを叩いて試せるGUIが操作出来るようになるので、それをインストール
```bash
bundle
```

ローカルサーバーの立ち上げ
```bash
rails s
```

[http://localhost:3000/graphiql](http://localhost:3000/graphiql)
にアクセスして、下記のqueryを実行
`testField`が取れるか確認する
```
query {
  testField
}
```

`Hello World!`が取れてたらOK!
```
{
  "data": {
    "testField": "Hello World!"
  }
}
```

今度は本題のDBに格納された値を取得したいので、User Modelを作成
```bash
rails g model User name:string email:string
```

migrateして、usersテーブルを作成
```bash
rails db:migrate
```

`GraphQL`用のgenerateコマンドが準備されてるので、
それを使ってUser Typeを生成する
```bash
rails g graphql:object User id:Int! email:String
```

これで`app/graphql/types/user_type.rb`が生成される
そして、実際にDBの中にデータを入れるので`rails c`して
```bash
rails c
```

1件データを挿入
```ruby
User.create!(id: 1, email: 'hoge@example.com')

User.count # 1
```

DBに追加したUserを取得したいので、`app/graphql/types/query_type.rb`に下記を追加する
```ruby
field :user, Types::UserType, null: false, resolve: ->(obj, args, ctx) { User.first }
```

`resolve`のところで、どのデータを返すのか、データを加工して返したいとかロジックを書くことができる
実際にはログインしているUserを`ctx[:current_user]`とかで返すことになりそう
`field`の書き方は`Class-Based API`になって変わったので、昔の書き方だとエラーが出る 
今回はサンプルなので、`User.first`で最初のUserを返すようにした

graphiqlの方で下記のqueryを実行
```
query {
  user {
    id
    email
  }
}
```

下記のようにちゃんとデータが取れてたら、OK..!
```
{
  "data": {
    "user": {
      "id": 1,
      "email": "hoge@example.com"
    }
  }
}
```

参考
このYoutubeの解説動画が分かりやすかったです
[Rails + GraphQL Tutorial - Building a GraphQL API Server](https://www.youtube.com/watch?v=DaznKqh5Ypk)
