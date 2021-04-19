// import { GET_POSTS, SIGNIN_USER, GET_CURRENT_USER } from '../queries_for_client'
// import { ADD_POST } from '../queries_for_client'
// import { defaultClient as apolloClient } from '../main'

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
  addPost: ({ commit }, payload) => {
    console.log('payload', payload)
    commit('setLoading', true)
    apolloClient
      .mutate({
        mutation: ADD_POST,
        variables: payload
      })
      .then(({ data }) => {
        // localStorage.setItem('token', data.signinUser.token)
        // to make sure created method is run in main.js (we run getCurrentUser), reload the page
        // router.go()
        console.log(data.addPost)
      })
      .catch(error => {
        commit('setError', error)
      })
      .finally(() => {
        commit('setLoading', false)
      })
  }
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
