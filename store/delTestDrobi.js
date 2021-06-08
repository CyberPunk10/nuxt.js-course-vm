import Vue from 'vue'

export const state = () => ({
  allFractions: [
    [10, 21],
    [11, 21],
    [12, 21]
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

      // add/remove class .active --> .btn-add-col
      // if current input является крайним..
      // if (player[arr].length - 1 == indexInput) {
      //   // if input value != 0
      //   if (+target.value !== 0) {
      //     addClassActiveBtnAddCol(indexForm)
      //     // if input value == 0
      //   } else {
      //     // предполагаем что все крайние inputs пусты
      //     let emptyLastInputs = true

      //     // перебор result
      //     for (let i = 0; i < players.length; i++) {
      //       if (players[i].result[players[i].result.length - 1]) {
      //         emptyLastInputs = false
      //         break
      //       }
      //     }
      //     // перебор result2 (if он есть и if emptyLastInputs по прежнему true)
      //     if (emptyLastInputs && player.result2) {
      //       for (let i = 0; i < players.length; i++) {
      //         if (players[i].result2[players[i].result2.length - 1]) {
      //           emptyLastInputs = false
      //           break
      //         }
      //       }
      //     }

      //     if (emptyLastInputs) removeClassActiveBtnAddCol(indexForm)

      //   }
      // }
    }

    // change resultAll
    changeResultAll(state)
  },

  addFraction(state) {
    state.allFractions.push([1, 10])
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

function addClassActiveBtnAddCol(indexForm) {
  const $btnAddCol = document.getElementById(`index-form-${indexForm}`)
    .querySelector('.form-sport-main .btns-col .btn-add-col')
  $btnAddCol.classList.add('active')
}
function removeClassActiveBtnAddCol(indexForm) {
  const $btnAddCol = document.getElementById(`index-form-${indexForm}`)
    .querySelector('.form-sport-main .btns-col .btn-add-col')
  $btnAddCol.classList.remove('active')
}

// Что можно улучшить:

// 1.

