export const state = () => ({
  token: null
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
      const { token } = await this.$axios.$post('/api/auth/admin/login', formData)
      dispatch('setToken', token)
    } catch (error) {
      commit('setError', error, {root: true})
      throw error
    }
  },

  setToken({commit}, token) {
    this.$axios.setToken(token, 'Bearer')
    commit('setTokenMutation', token)
  },

  logout({commit}) {
    this.$axios.setToken(false)
    commit('clearTokenMutation')
  },

  async createUser({commit}, formData) {
    try {
      await this.$axios.$post('/api/auth/admin/create', formData)
    } catch (error) {
      commit('setError', error, {root: true})
      throw error
    }
  }
}

export const getters = {
  isAuthenticated: state => Boolean(state.token),
  token: state => state.token
}
