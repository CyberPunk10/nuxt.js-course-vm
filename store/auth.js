import Cookie from 'cookie' // for parsing
import Cookies from 'js-cookie' // create and remove cookies
import jwtDecode from 'jwt-decode'

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
    Cookies.set('jwt-token', token)
  },

  logout({commit}) {
    this.$axios.setToken(false)
    commit('clearTokenMutation')
    Cookies.remove('jwt-token')
  },

  async createUser({commit}, formData) {
    try {
      await this.$axios.$post('/api/auth/admin/create', formData)
    } catch (error) {
      commit('setError', error, {root: true})
      throw error
    }
  },

  autoLogin({dispatch}) {
    const cookieStr = process.browser
      ? document.cookie
      : this.app.context.req.headers.cookie

    const cookies = Cookie.parse(cookieStr || '') || {} // если метод ничего не вернет, то вернем пустой объект
    const token = cookies['jwt-token']

    if (isJwtValid(token)) {
      dispatch('setToken', token)
    } else {
      dispatch('logout')
    }
  }
}

export const getters = {
  isAuthenticated: state => Boolean(state.token),
  token: state => state.token
}


// local functions

function isJwtValid(token) {
  if (!token) {
    return false
  }
  const jwtData = jwtDecode(token) || {} // return {login: '2222', userId: '5fa13d35b01c6d3244638f96', iat: 1604404038, exp: 1604407638 }

  // окончание жизни токена
  const expires = jwtData.exp || 0

  return (new Date().getTime() / 1000) < expires // если текущий timeStamp меньше timeStamp токена, то токен валидный и вернем true (иначе false)
}
