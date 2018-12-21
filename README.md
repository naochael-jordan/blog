# blog

- Nuxt.js + TypeScript + Markdown
- git pushしたらTravisでGithub Pagesデプロイして、完了したらSlackで通知

## Build Setup

``` bash
# install dependencies
$ yarn

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate

# deploy gh-pages
$ yarn deploy
```

## Deploy

``` bash
# TravisCI will deploy('yarn generate') to GitHub Pages.
# Notice will come in Slack when done.
$ git push 
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).
