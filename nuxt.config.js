export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      lang: 'ru'
    },
    title: 'nuxt.js-course-vm3333',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'robots', content: 'none'} // закрыть сайт от индексации
    ],
    link: [
      { href: "https://fonts.googleapis.com/icon?family=Material+Icons", rel: "stylesheet" },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  serverMiddleware: [
    '~/api/index.js'
  ],

  // router: {
  //   // Run the middleware/scroll-top-to-start.js on every page
  //   middleware: 'scroll-top-to-start'
  // },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'element-ui/lib/theme-chalk/index.css',
    'element-ui/lib/theme-chalk/display.css',
    'assets/font-awesome/releases/v5.15.1/css/all.min.css',
    'assets/sass/main.sass',
    '@/theme/index.sass'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/globals',
    '~/plugins/axios'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/axios',
    '~/modules/mongodb_setup.js',
    '@nuxtjs/pwa'
  ],

  styleResources: {
    sass: [
      'assets/sass/vars/_index.sass',
      'assets/sass/mixins/_index.sass'
    ],
    scss: [

    ]
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000'
  },

  env: {
    appName: 'SSR Blog',
    appNameChallenges: 'Challenges'
  },

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


// CSS Grid #8 Вложенность grid-элементов (Grid Nesting)
// https://www.youtube.com/watch?v=XP30BMpJ740


// Простой многоязычный сайт с Nuxt.js и nuxt-i18n
// https://favicon.tech/prostoj-mnogoyazychnyj-sajt-s-nuxt-js-i-nuxt-i18n/


// Как оптимизируйте шрифт Awesome
// https://techblog.sdstudio.top/kak-optimizirujte-shrift-awesome-do-smeshnogo-razmera-v-10kb-i-uluchshit-skorost-sajta/
// https://icomoon.io/app/#/select

// 5 библиотек для Vue.js, без которых мне не обойтись
// https://habr.com/ru/company/ruvds/blog/517316/
