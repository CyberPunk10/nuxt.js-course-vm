export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      lang: 'ru'
    },
    title: 'challenges',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'robots', content: 'none' } // закрыть сайт от индексации
    ],
    link: [
      { href: "https://fonts.googleapis.com/icon?family=Material+Icons", rel: "stylesheet" },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: {
    // color: '#ffa33b',
    color: '#ffd438',
    // height: '5px'
  },
  serverMiddleware: [
    '~/api_rest/index.js', // подключаем rest api
    // '@/api_graphql/index.js'
  ],

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
    '@nuxtjs/pwa'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/axios',
    '~/modules/mongodb_setup.js',
    // '@nuxtjs/auth-next'
  ],

  pwa: {
    meta: {
      /* meta options */
      lang: 'ru',
      theme_color: '#ee4540',
    },
    manifest: {
      name: 'Challenges App',
      short_name: 'Challenges',
      lang: 'ru',
      background_color: 'rgba(100,100,255,.3)'
    },
    workbox: {
      /* workbox options */
    }
  },

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
    baseURL: process.env.BASE_URL || 'http://localhost:3000' // for heroku or other hosting
  },

  env: {
    appName: 'SSR Blog',
    appNameChallenges: 'Challenges'
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: [/^element-ui/],
  },

  // Доступ к серверу разработки Nuxt.js на мобильном устройстве
  // https://webinmind.ru/nuxtjs/articles/razrabotka-nuxt-js-na-mobilnom-ustrojstve
  // перед deploy on heroku закомментировать!!!!
  // server: {
  //   port: 3000,
  //   host: '0.0.0.0',
  // },
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


// «Роутинг и защита роутов в SSR приложении на примере Nuxt.js»
// https://css-tricks.com/routing-route-protection-server-rendered-vue-apps-using-nuxt-js/

// для практики
// https://habr.com/ru/company/timeweb/blog/543090/

// Пишем свое PWA на Nuxt.js
// https://www.youtube.com/watch?v=A-dywZC301g&ab_channel=ASTRIOagency
