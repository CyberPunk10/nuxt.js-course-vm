// export default (context, inject) => {
//   // Inject $hello(msg) in Vue, context and store.
//   inject('api', api)
//   // For Nuxt <= 2.12, also add 👇
//   context.$api = api
// }

// const api = {
//   getDate() {
//     return fetch('/api/date')
//   }
// }

export default (context, inject) => {
  inject('api', async (controller, method, params) => {
    try {
      return await context.$axios['$' + (params ? 'post' : 'get')]('/api/' + controller + '/' + method, params)
    } catch (e) {
      console.error(e)
      throw e
    }
  })
}


// теперь все вызовы на странице (и в компонентах) можно заменить на простой вызов:

// ...
// <script>
// export default {
//   ...
//   async fetch() {
//     this.users = await this.$api("users", "index");
//   },
//   methods: {
//     async getUserInfo(id) {
//       this.userInfo = await this.$api("users", "show", {id: id});
//     }
//   }
// };
// </script>
