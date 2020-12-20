import Cookie from 'cookie' // for parsing
import Cookies from 'js-cookie' // create and remove cookies

export const state = () => ({
  allFormsSport: [
    {
      idForm: 1,
      title: 'Отжимания',
      mode: 1,
      countCol: 4,
      players: [
        {id: 1, name: 'Player 1', result: [null, null, null, null], resultAll: 0},
        {id: 2, name: 'Player 2', result: [null, null, null, null], resultAll: 0},
        {id: 3, name: 'Player 3', result: [null, null, null, null], resultAll: 0}
      ],
    },
    {
      idForm: 2,
      title: 'Подтягивания с утяжелением',
      mode: 2,
      countCol: 4,
      players: [
        {id: 1, name: 'Player 1', result: [null, null, null, null], resultAll: 0, result2: [null, null, null, null]},
        {id: 2, name: 'Player 2', result: [null, null, null, null], resultAll: 0, result2: [null, null, null, null]},
        {id: 3, name: 'Player 3', result: [null, null, null, null], resultAll: 0, result2: [null, null, null, null]}
      ],
    }
  ]
})

export const mutations = {
  // setTokenMutation(state, token) {
  //   state.token = token
  // },
  // clearTokenMutation(state) {
  //   state.token = null
  // }
  setInput(state, target) {
    console.log(target, target.value)
    const sportForm = state.allFormsSport[target.dataset.indexForm]
    const player = sportForm.players[target.dataset.indexPlayer]

    // set input result
    if (target.dataset.indexResult) {
      // set input
      if (!target.dataset.modeResult) {
        player.result[target.dataset.indexResult] = +target.value
      } else if (target.dataset.modeResult === 'result2') {
        player.result2[target.dataset.indexResult] = +target.value
      }

      // change resultAll
      if (sportForm.mode === 1) {
        player.resultAll = arraySum(player.result)
      } else if (sportForm.mode === 2) {
        player.resultAll = getResult2(player.result, player.result2)
      }

    // rename player
    } else if (target.dataset.namePlayer) {
      player.name = target.value
    }
  }
}

export const actions = {
  // async login({commit, dispatch}, formData) {
  //   try {
  //     const { token } = await this.$axios.$post('/api/auth/admin/login', formData)
  //     dispatch('setToken', token)
  //   } catch (error) {
  //     commit('setError', error, {root: true})
  //     throw error
  //   }
  // },

  // setToken({commit}, token) {
  //   this.$axios.setToken(token, 'Bearer')
  //   commit('setTokenMutation', token)
  //   Cookies.set('jwt-token', token)
  // },

  input({commit}, target) {
    commit('setInput', target)
  },

  // logout({commit}) {
  //   this.$axios.setToken(false)
  //   commit('clearTokenMutation')
  //   Cookies.remove('jwt-token')
  // },

  // async createUser({commit}, formData) {
  //   try {
  //     await this.$axios.$post('/api/auth/admin/create', formData)
  //   } catch (error) {
  //     commit('setError', error, {root: true})
  //     throw error
  //   }
  // },

  // autoLogin({dispatch}) {
  //   const cookieStr = process.browser
  //     ? document.cookie
  //     : this.app.context.req.headers.cookie

  //   const cookies = Cookie.parse(cookieStr || '') || {} // если метод ничего не вернет, то вернем пустой объект
  //   const token = cookies['jwt-token']

  //   if (isJwtValid(token)) {
  //     dispatch('setToken', token)
  //   } else {
  //     dispatch('logout')
  //   }
  // }
}

export const getters = {
  allFormsSport: state => state.allFormsSport
  // isAuthenticated: state => Boolean(state.token),
}


// local functions

function arraySum(array){
  let sum = 0
  for (let i = 0; i < array.length; i++) {
    sum += array[i]
  }
  return sum
}

function getResult2(arrayTop, arrayBottom){
  let sum = 0
  for (let i = 0; i < arrayTop.length; i++) {
    sum += arrayTop[i] * arrayBottom[i]
  }
  return sum
}

// function isJwtValid(token) {
//   if (!token) {
//     return false
//   }
//   const jwtData = jwtDecode(token) || {} // return {login: '2222', userId: '5fa13d35b01c6d3244638f96', iat: 1604404038, exp: 1604407638 }

//   // окончание жизни токена
//   const expires = jwtData.exp || 0

//   return (new Date().getTime() / 1000) < expires // если текущий timeStamp меньше timeStamp токена, то токен валидный и вернем true (иначе false)
// }
