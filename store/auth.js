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
      const {token} = this.$axios.$post('/api/auth/admin/login', formData)
      console.log(token)
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

  async create({commit}, formData) {
    try {
      console.log('create user', formData)
      await this.$axios.$post('/api/auth/admin/create', formData)
    } catch (error) {
      commit('setError', error, {root: true})
      throw error
    }
  }
}

export const getters = {
  isAuthenticated: state => Boolean(state.token)
}
