export const actions = {
  login({commit}) {
    commit('setToken', 'true')
  },

  logout({commit}) {
    commit('clearToken')
  },

  async nuxtServerInit({dispatch}) {
    await dispatch('users/fetchUsers')
  }
}

export const state = () => ({
  token: null
})

export const mutations = {
  setToken(state, token) {
    state.token = token
  },
  clearToken(state) {
    state.token = null
  }
}

export const getters = {
  isAuth: state => !!state.token
}
