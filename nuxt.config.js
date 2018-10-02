const fs = require("fs");
const fm = require('front-matter');
const parseArgs = require("minimist");
const argv = parseArgs(process.argv.slice(2), {
  alias: {
    H: "hostname",
    p: "port"
  },
  string: ["H"],
  unknown: parameter => false
});

const port =
  argv.port ||
  process.env.PORT ||
  process.env.npm_package_config_nuxt_port ||
  "3000";
const host =
  argv.hostname ||
  process.env.HOST ||
  process.env.npm_package_config_nuxt_host ||
  "localhost";

// 動的なroutesを返す
function getRoutes() {
  return fs
    .readdirSync("./static")
    .filter(i => i.match(/.md$/))
    .map(f => f.replace(/.md$/, ""))
    .map(f => `/${f}`);
}

module.exports = {
  env: {
    baseUrl: process.env.BASE_URL || `http://${host}:${port}`
  },

  router: {
    base: "/blog/"
  },

  head: {
    title: "Naochael Jordan Blog",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content:
          "Naochael Jordan Blog. ReactNative, Electron, Nuxt.js, Vuex, Redux, Rails辺りをよく触ってます。"
      }
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/blog/favicon.ico"
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: "#3B8070" },

  /*
  ** Build configuration
  */
  css: [
    "normalize.css",
    "~/assets/css/main.scss",
    {
      src: "~/node_modules/highlight.js/styles/vs2015.css",
      lang: "css"
    }
  ],

  plugins: ["~/plugins/init.js"],

  build: {
    extend: function(config) {
      config.node = {
        fs: "empty"
      };
    }
  },

  generate: {
    routes: getRoutes()
  },

  modules: [
    "@nuxtjs/axios",
    "~/modules/typescript.js",
    [
      "@nuxtjs/google-analytics",
      {
        id: "UA-125875531-1"
      }
    ],
    "@nuxtjs/markdownit",
    "@nuxtjs/sitemap",
    "@nuxtjs/feed"
  ],

  markdownit: {
    preset: "default",
    linkify: true,
    breaks: true,
    use: [
      "markdown-it-container",
      "markdown-it-attrs",
      "markdown-it-meta",
      "markdown-it-highlightjs"
    ]
  },

  sitemap: {
    path: "/sitemap.xml",
    hostname: "https://naochael-jordan.github.io/blog",
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    generate: true, // Enable me when using nuxt generate
    exclude: [],
    routes: getRoutes()
  },

  feed: [
    // A default feed configuration object
    {
      path: "/feed.xml", // The route to your feed.
      // async create(feed) {}, // The create function (see below)
      create = feed => {
        feed.options = {
          title: 'Naochael Jordan Blog',
          link: 'https://naochael-jordan.github.io/blog/feed.xml',
          description: '普段はフロントエンドエンジニアしながら、Webサービスとかアプリ開発してます。Nuxt, ReactNative, Electron, Vuex, Redux辺りをよく触ってます。',
        }

        feed.addItem({
          title: 'たいとる',
          id: 'https://naochael-jordan.github.io/blog/',
          link: 'https://naochael-jordan.github.io/blog/',
          description: 'ですくりぷしょん',
          content: 'こんてんつ'
        })

        // const files = fs.readdirSync("./static");
        // const posts = files.filter(file => file.match(/.md$/)).map(file => {
        //   let post = fm(fs.readFileSync(`static/${file}`, "utf8"));
        //   post.fileName = file.replace(/.md$/, "");
        //   return post;
        // });
        // posts.forEach(post => {
        //   feed.addItem({
        //     title: post.attributes.title,
        //     id: post.url,
        //     link: post.url,
        //     description: post.description,
        //     content: post.content
        //   })
        // })

        feed.addCategory('Nuxt.js')

        feed.addContributor({
          name: 'Naochael Jordan',
          email: 'naochael.jordan@gmail.com',
          link: 'https://naochael-jordan.github.io/blog/'
        })
      },
      cacheTime: 1000 * 60 * 15, // How long should the feed be cached
      type: "rss2" // Can be: rss2, atom1, json1
    }
  ],

  axios: {}
};
