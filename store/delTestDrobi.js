import Vue from 'vue'

export const state = () => ({
  allFractions: [
    ['', ''],
    ['', ''],
  ],
  result: ''
})

export const mutations = {
  setInput(state, data) {
    const target = data.target
    const indexFraction = target.dataset.indexFraction

    if (target.dataset.input === 'up') {
      setValue('0')
    } else {
      setValue('1')
    }

    function setValue(arr) {
      Vue.set(state.allFractions[indexFraction], arr, +target.value ? +target.value : null)
    }

    changeResultAll(state)
  },

  addFraction(state) {
    state.allFractions.push(['', ''])
  }
}

export const actions = {
  setInput({ commit }, data) {
    commit('setInput', data)
  },

  addFraction({ commit }) {
    commit('addFraction')
  },
}

export const getters = {
  allFractions: state => state.allFractions,
  result: state => state.result
}


// local functions

function changeResultAll(state) {
  let tempArray = []

  state.allFractions.forEach(item => {
    tempArray.push(item[0] / item[1])
  })

  state.result = tempArray.reduce((sum, current) => sum + current, 0)
}

// Что можно улучшить:

// 1. Допилить удаление дроби

