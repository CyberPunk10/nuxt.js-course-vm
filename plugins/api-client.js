export default (context, inject) => {
  // Inject $hello(msg) in Vue, context and store.
  inject('api', api)
  // For Nuxt <= 2.12, also add 👇
  context.$api = api
}

const api = {
  getDate() {
    return fetch('/api/date')
  }
}
