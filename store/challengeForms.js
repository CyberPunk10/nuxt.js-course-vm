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
  setInput(state, data) {
    const indexForm = data.indexForm
    const target = data.target
    const targetForm = state.allFormsSport[indexForm]
    const player = targetForm.players[target.dataset.indexPlayer]
    const indexInput = target.dataset.indexInput

    // set input result
    if (indexInput) {
      // set input
      if (!target.dataset.result2) {
        setValue('result')
      } else {
        setValue('result2')
      }

      function setValue(arr) {
        Vue.set(player[arr], indexInput, +target.value ? +target.value : null)

        // add/remove class .active --> .btn-add-col
        if (player[arr].length - 1 == indexInput) {
          if (+target.value !== 0) {
            const $btnAddCol = document.getElementById(`index-form-${indexForm}`)
              .querySelector('.form-sport-main .btns-col .btn-add-col')
            $btnAddCol.classList.add('active')
          } else {

            // let notEmptyLastInputs = true

            // for (let i = 0; i < targetForm.players; i++) {
            //   console.log(notEmptyLastInputs)
            //   console.log(targetForm.players[i].result[targetForm.players[i].result.length - 1])
            //   if (targetForm.players[i].result[targetForm.players[i].result.length - 1]) {
            //     notEmptyLastInputs = false
            //     break
            //   }
            // }

            // if (!notEmptyLastInputs) {
            //   const $btnAddCol = document.getElementById(`index-form-${indexForm}`)
            //     .querySelector('.form-sport-main .btns-col .btn-add-col')
            //   $btnAddCol.classList.remove('active')
            // }

          }
        }
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
    const indexForm = data.indexForm
    const target = data.target
    const targetForm = state.allFormsSport[indexForm]
    const player = targetForm.players[target.dataset.indexPlayer]

    if (!target.dataset.mode2) {
      setRepeatValue('result')
    } else {
      setRepeatValue('result2')
    }

    function setRepeatValue(arr) {
      const indexInput = player[arr].indexOf(null, 1)

      if (indexInput !== -1) { // есть пустые начиная со 2-ой
        Vue.set(player[arr], indexInput, player[arr][indexInput - 1])
      } else { // иначе добавляем колонку
        const index = player[arr].length
        addCol(targetForm) // local func
        Vue.set(player[arr], index, player[arr][index - 1])
      }

      // change resultAll
      changeResultAll(targetForm, player)
    }
  }
}

export const actions = {

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
  targetForm.players.forEach(player => {
    player.result.push(null)

    if(player.result2) {
      player.result2.push(null)
    }
  })
}
