// import server from './api_graphql_not_used_(no hmr)/index'

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
    // '~/api_rest/index.js',
    { path: '/api', handler: '~/api_rest/index.js' }, // подключаем rest api
  ],

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'element-ui/lib/theme-chalk/index.css',
    'element-ui/lib/theme-chalk/display.css',
    'assets/font-awesome/releases/v5.15.1/css/all.min.css',
    'assets/sass/main.sass',
    '@/theme/index.sass'
  ],

  // cssSourceMap: true, // Если закомментировать, то: true for dev and false for production

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/globals',
    '~/plugins/axios',
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  // components: true,
  components: {
    dirs: [
      '~/components',
      '~/components/Challenges',
      '~/components/AboutMe',
      // '~/components/Challenges/CalendarGitHub',
      '~/components/Challenges/SportForm',
      '~/components/Challenges/TableResultChallenges',
      '~/components/FSD/buttons',
      '~/components/main',
      '~/components/UI/Controls',
      '~/components/UI-challenge/controls',
      '~/components/UI-test/leadgid',
    ]
  },

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/pwa',
    '@nuxtjs/tailwindcss', // https://tailwindcss.su/docs/guides/nuxtjs
    '@nuxt/typescript-build' // https://typescript.nuxtjs.org/guide/setup
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/axios',
    '~/modules/mongodb_setup.js',
    '@nuxtjs/apollo', // https://github.com/nuxt-community/apollo-module
    '@nuxtjs/markdownit', // https://github.com/nuxt-community/markdownit-module
    'nuxt-socket-io', // https://github.com/richardeschloss/nuxt-socket-io, https://javascript.plainenglish.io/introduction-to-nuxt-socket-io-b78c5322d389
    '@nuxtjs/proxy', // https://github.com/nuxt-community/proxy-module
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
      'assets/sass/mixins/_index.sass',
      'assets/sass/utils/_px-to-rem.sass'
    ],
    scss: [

    ]
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    // baseURL: process.env.BASE_URL || 'http://localhost:3000/' // for heroku or other hosting
    prefix: '/rest-api/',
    proxy: true
  },

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: process.env.BASE_URL_GRAPHQL || 'http://localhost:4000/graphql', // for heroku or other hosting
        // httpEndpoint: 'https://rickandmortyapi.com/graphql',
      }
    }
  },

  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    // use: [
    //   'markdown-it-div',
    //   'markdown-it-attrs'
    // ],
    runtime: true // Support `$md()`
  },

  io: {
    // module options
    sockets: [
      // {
      //   name: 'main',
      //   url: 'http://localhost:3000',
      //   default: true,
      //   vuex: {
      //     mutations: [
      //       { process: 'examples/SET_PROGRESS' }
      //     ],
      //     actions: [
      //       { process: 'examples/FORMAT_MESSAGE' }
      //     ],
      //     emitBacks: ['examples/sample', { 'examples/sample2': 'sample2' }]
      //   }
      // },
      // {
      //   name: 'test',
      //   url: 'http://localhost:3100',
      //   vuex: {
      //     mutations: [
      //       { process: 'examples/SET_PROGRESS' }
      //     ],
      //     actions: [
      //       { process: 'examples/FORMAT_MESSAGE' }
      //     ],
      //     emitBacks: ['examples/sample', { 'examples/sample2': 'sample2' }]
      //   }
      // }
    ]
  },

  proxy: {
    '/rest-api/': {
      target: process.env.BASE_URL || 'http://localhost:3000/',
      pathRewrite: { '^/rest-api/': '' },
    },
    '/jokeapi/': {
      target: 'https://v2.jokeapi.dev/',
      pathRewrite: { '^/jokeapi/': '' },
    }
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
  //   port: 3000, // (?) process.env.BASE_URL || 'http://localhost:3000'
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
