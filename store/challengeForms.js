import Cookie from 'cookie' // for parsing
import Cookies from 'js-cookie' // create and remove cookies
import Vue from 'vue'

export const state = () => ({
  allFormsSport: [
    {
      idForm: 1,
      title: 'Отжимания',
      mode: 1,
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
  setInput(state, data) {
    const indexForm = data.indexForm
    const target = data.target
    const targetForm = state.allFormsSport[indexForm]
    const player = targetForm.players[target.dataset.indexPlayer]

    console.log(target, target.value)

    // set input result
    if (target.dataset.indexResult) {
      // set input
      if (!target.dataset.result2) {
        player.result[target.dataset.indexResult] = +target.value
      } else if (target.dataset.result2) {
        player.result2[target.dataset.indexResult] = +target.value
      }

      // change resultAll
      if (targetForm.mode === 1) {
        player.resultAll = arraySum(player.result)
      } else if (targetForm.mode === 2) {
        player.resultAll = getResult2(player.result, player.result2)
      }

    // rename player
    } else if (target.dataset.namePlayer) {
      player.name = target.value
    }
  },

  addCol(state, indexForm) {
    const targetForm = state.allFormsSport[indexForm]
    addCol(targetForm) // local func
  },

  repeatLastResult(state, data) {
    const indexForm = data.indexForm
    const target = data.target
    const targetForm = state.allFormsSport[indexForm]
    const player = targetForm.players[target.dataset.indexPlayer]

    const readyResult = !target.dataset.mode2
      ? setValue('result')
      : setValue('result2')

    console.log('repeat Last Result on click!')

    function setValue(arr) {
      console.log(arr)
      const indexItem = player[arr].indexOf(null, 1)

      if (indexItem !== -1) {
        return false
      } else {
        Vue.set(player[arr], indexItem, player[arr][indexItem - 1])
        return true
      }
    }

    // если все значения не пустые, то добавляем новую колонку
    if (readyResult) {
      addCol(targetForm, value) // local func
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

  setInput({commit}, data) {
    commit('setInput', data)
  },

  addCol({commit}, indexForm) {
    commit('addCol', indexForm)
  },

  repeatLastResult({commit}, data) {
    commit('repeatLastResult', data)
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

function addCol(targetForm, value) {
  const resultValue = value ? value : null

  targetForm.players.forEach(item => {
    item.result.push(resultValue)

    if(item.result2) {
      item.result2.push(resultValue)
    }
  })
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
