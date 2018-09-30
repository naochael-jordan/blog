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
  ],

  plugins: ["~/plugins/init.js"],

  build: {
    extend: function (config) {
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
      .map(f => `/${f}`)
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
    breaks: true,
    use: ["markdown-it-container", "markdown-it-attrs", "markdown-it-meta"]
  },

  axios: {}
};
