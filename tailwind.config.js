module.exports = {
  purge: {
    content: [
      './components/**/*.{vue,js}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
      './nuxt.config.{js,ts}',
    ],
    // https://purgecss.com/configuration.html#options
    options: {
      keyframes: true,
      // fontFace: true, // если раскомментировать, то в prod на heroku font-awesome icons not render
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
    container: [] // Отключение адаптивных вариантов (https://tailwindcss.ru/docs/container#otklyuchenie-adaptivnyh-variantov)
  },
  plugins: [],
  corePlugins: {
    // ...
    outline: false,
    pointerEvents: false,
    preflight: false,
    container: false, // Полное отключение (https://tailwindcss.ru/docs/container#otklyuchenie-adaptivnyh-variantov)
  }
}
