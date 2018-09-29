const fs = require("fs");
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

/* nuxt.config.js */
// `DEPLOY_ENV` が `GH_PAGES` の場合のみ `router.base = '/<repository-name>/'` を追加する
// const routerBase =
//   process.env.DEPLOY_ENV === "GH_PAGES"
//     ? {
//         router: {
//           base: "/blog/"
//         }
//       }
//     : {
//         router: {
//           base: "/blog/"
//         }
//       };

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
    { src: "vue-material/dist/vue-material.min.css", lang: "css" }
  ],

  plugins: [{ src: "~/plugins/vue-material" }, "~/plugins/hoge.js"],

  build: {
    vendor: ["vue-material"],
    extend: function(config, { isDev, isClient }) {
      config.node = {
        fs: "empty"
      };
    }
  },

  generate: {
    routes: fs
      .readdirSync("./static")
      .filter(i => i.match(/.md$/))
      .map(f => f.replace(/.md$/, ""))
      .map(f => `/blog/${f}`)
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
    "@nuxtjs/markdownit"
  ],

  markdownit: {
    preset: "default",
    linkify: true,
    breaks: true
    // use: [["markdown-it-container", containerName], "markdown-it-attrs"]
  },

  axios: {}
};
