importScripts('/blog/_nuxt/workbox.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/blog/_nuxt/app.2d8371c12659f68c8806.js",
    "revision": "4c0850bc935f944a61d54b4dae4e1a5d"
  },
  {
    "url": "/blog/_nuxt/layouts/default.39f41fc80a7ca63b733a.js",
    "revision": "4fd081cdcc4dd58d4f804961ee71f2d2"
  },
  {
    "url": "/blog/_nuxt/manifest.a5f9e150dfee106cb667.js",
    "revision": "1a6e10663e2337c6e87f24426725f507"
  },
  {
    "url": "/blog/_nuxt/pages/_slug.30db68fcf5770890f38f.js",
    "revision": "6a16ec92bfb510861d4853551f0d1e39"
  },
  {
    "url": "/blog/_nuxt/pages/index.85ce95f18f314cbf8fe1.js",
    "revision": "2c1e9dcaa51ac987ab511c1045615074"
  },
  {
    "url": "/blog/_nuxt/pages/profile.55da638f84c59ee63447.js",
    "revision": "753ed7fea04223458938f2ca1132044e"
  },
  {
    "url": "/blog/_nuxt/vendor.9cd260a929ef240cc3c9.js",
    "revision": "7de314e1f7fe3ad861e90f6161564be4"
  }
], {
  "cacheId": "blog",
  "directoryIndex": "/",
  "cleanUrls": false
})



workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('/blog/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/blog/.*'), workbox.strategies.networkFirst({}), 'GET')





