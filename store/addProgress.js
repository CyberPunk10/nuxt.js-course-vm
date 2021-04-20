// import { ADD_PROGRESS } from '../graphql/queries'

export const state = () => ({
  // currentWidthWindow: 0,
})

export const mutations = {
  // updateCurrentWidthWindow(state, value) { state.currentWidthWindow = value },
  setLoading: (state, payload) => {
    state.loading = payload
  },
  setError: (state, payload) => {
    state.error = payload
  },
}

export const actions = {
  // addProgress: ({ commit }, payload) => {
  //   commit('setLoading', true)
  //   console.log('[apolloClient]: ', apolloClient)
  //   console.log('[this]: ', this)
  //   let apolloClient = this.app.apolloProvider.defaultClient
  //   apolloClient
  //     .mutate({
  //       mutation: gql`
  //         mutation addProgress($username: String!, $count: String!, $date: String!) {
  //           signupUser(username: $username, count: $count, date: $date) {
  //             # token
  //             _id
  //           }
  //         }
  //       `,
  //       variables: payload
  //     })
  //     .then(({ data }) => {
  //       // localStorage.setItem('token', data.signinUser.token)
  //       // to make sure created method is run in main.js (we run getCurrentUser), reload the page
  //       // router.go()
  //       console.log('kjkjkj', data.addPost)
  //     })
  //     .catch(error => {
  //       commit('setError', error)
  //     })
  //     .finally(() => {
  //       commit('setLoading', false)
  //     })
  // }
  // updateCurrentWidthWindow({ commit }, value) { commit('updateCurrentWidthWindow', value) },

  // async addProgress({ commit }, fd) {
  //     try {
  //       // const fd = new FormData()

  //       // fd.append('title', title)
  //       // fd.append('date', date)
  //       // fd.append('color', color)
  //       // fd.append('count', count)

  //       // return await this.$axios.$post('/api/post/admin/create', fd)
  //       // return await this.$axios.$post('/api/challenge/create', fd)
  //     } catch (error) {
  //       commit('setError', error, { root: true })
  //       throw error
  //     }
  //   },
}

export const getters = {
  // getCurrentWidthWindow: state => state.currentWidthWindow
}



// local functions


// Что можно улучшить:

// 1.
