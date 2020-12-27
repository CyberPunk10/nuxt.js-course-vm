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
      changeResultAll(targetForm, player)

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
    console.log('repeat Last Result on click!')
    const indexForm = data.indexForm
    const target = data.target
    const targetForm = state.allFormsSport[indexForm]
    const player = targetForm.players[target.dataset.indexPlayer]

    // const readyResult = !target.dataset.mode2
    //   ? setValue('result')
    //   : setValue('result2')

    if (!target.dataset.mode2) {
      setValue('result')
    } else {
      setValue('result2')
    }

    function setValue(arr) {
      const indexItem = player[arr].indexOf(null, 1)

      if (indexItem !== -1) { // есть пустые начиная со 2-ой
        Vue.set(player[arr], indexItem, player[arr][indexItem - 1])
      } else { // иначе добавляем колонку
        console.log('[-1]', indexItem)
        const index = player[arr].length
        // player[arr][index]
        addCol(targetForm) // local func
        Vue.set(player[arr], index, player[arr][index - 1])
        console.log(state)
      }

      // change resultAll
      changeResultAll(targetForm, player)
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
}

export const getters = {
  allFormsSport: state => state.allFormsSport
}


// local functions

function changeResultAll(targetForm, player) {
  if (targetForm.mode === 1) {
    player.resultAll = arraySum(player.result)
  } else if (targetForm.mode === 2) {
    player.resultAll = getResult2(player.result, player.result2)
  }
}

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

function addCol(targetForm) {
  targetForm.players.forEach(item => {
    item.result.push(null)

    if(item.result2) {
      item.result2.push(null)
    }
  })
}
