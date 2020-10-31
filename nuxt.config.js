export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'nuxt.js-course-vm',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  serverMiddleware: [
    { path: "/api", handler: require("body-parser").json() },
    { path: "/api", handler: (req, res, next) => {
        const url = require("url");
        req.query = url.parse(req.url, true).query
        req.params = { ...req.query, ...req.body }
        next()
      }
    },
    { path: "/api", handler: "~/serverMiddleware/api-server.js" }

    // { path: "/api", handler: "~/apiOld/rest.js" },
    // { path: "/api", handler: "~/apiOld/index.js" },
  ],

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '@/theme/index.sass'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/globals',
    '~/plugins/api-client.js'

  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '~/modules/mongodb_setup.js'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: [/^element-ui/],
  }
}

// Деплоим изоморфное веб-приложение на примере Nuxt.js
// https://habr.com/ru/post/438862/

// Nuxt as fullstack server: frontend + backend API Server (Часть 1)
// https://habr.com/ru/post/501652/

// Use Express with Nuxt.js
// https://bithacker.dev/use-express-with-nuxt-js
