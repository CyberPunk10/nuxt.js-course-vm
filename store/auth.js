export const state = () => ({
  // token: null
  token: true // temp for development
})

export const mutations = {
  setTokenMutation(state, token) {
    state.token = token
  },
  clearTokenMutation(state) {
    state.token = null
  }
}

export const actions = {
  async login({commit, dispatch}, formData) {
    try {
      const token = await new Promise((resolve, reject) => {
        setTimeout(() => { resolve('mock-token'), 500})
      })
      dispatch('setToken', token)
    } catch (error) {
      commit('setError', error, {root: true})
      throw error
    }
  },

  setToken({commit}, token) {
    commit('setTokenMutation', token)
  },

  logout({commit}) {
    commit('clearTokenMutation')
  },

  async createUser({commit}, formData) {
    try {
      console.log('create user', formData)
    } catch (error) {
      commit('setError', error, {root: true})
      throw error
    }
  }
}

export const getters = {
  isAuthenticated: state => Boolean(state.token)
}
