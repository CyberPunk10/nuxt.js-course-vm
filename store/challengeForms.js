import Vue from 'vue'

export const state = () => ({
  allFormsSport: [
    {
      idForm: 1,
      title: 'Отжимания',
      players: [
        {id: 1, name: 'Player 1', result: [null, null, null, null], resultAll: 0},
        {id: 2, name: 'Player 2', result: [null, null, null, null], resultAll: 0},
        {id: 3, name: 'Player 3', result: [null, null, null, null], resultAll: 0}
      ],
      stats: {

      },
      settings: {
        mode: 1,
        defaultCountMainCol: 4,
        labelMode2: 'кг'
      }
    },
    {
      idForm: 2,
      title: 'Подтягивания с утяжелением',
      players: [
        {id: 1, name: 'Player 1', result: [null, null, null, null], resultAll: 0, result2: [null, null, null, null]},
        {id: 2, name: 'Player 2', result: [null, null, null, null], resultAll: 0, result2: [null, null, null, null]},
        {id: 3, name: 'Player 3', result: [null, null, null, null], resultAll: 0, result2: [null, null, null, null]}
      ],
      stats: {

      },
      settings: {
        mode: 2,
        defaultCountMainCol: 4,
        labelMode2: 'кг'
      }
    }
  ]
})

export const mutations = {
  setInput(state, data) {
    const indexForm = data.indexForm
    const target = data.target
    const targetForm = state.allFormsSport[indexForm]
    const players = targetForm.players
    const player = players[target.dataset.indexPlayer]
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
        // if current input является крайним..
        if (player[arr].length - 1 == indexInput) {
          // if input value != 0
          if (+target.value !== 0) {
            addClassActiveBtnAddCol(indexForm)
          // if input value == 0
          } else {
            // предполагаем что все крайние inputs пусты
            let emptyLastInputs = true

            // перебор result
            for (let i = 0; i < players.length; i++) {
              if (players[i].result[players[i].result.length - 1]) {
                emptyLastInputs = false
                break
              }
            }
            // перебор result2 (if он есть и if emptyLastInputs по прежнему true)
            if (emptyLastInputs && player.result2) {
              for (let i = 0; i < players.length; i++) {
                if (players[i].result2[players[i].result2.length - 1]) {
                  emptyLastInputs = false
                  break
                }
              }
            }

            if (emptyLastInputs) removeClassActiveBtnAddCol(indexForm)

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
      const idxInputFirstNull = player[arr].indexOf(null, 1)

      if (idxInputFirstNull !== -1) { // есть пустые начиная со 2-ой
        Vue.set(player[arr], idxInputFirstNull, player[arr][idxInputFirstNull - 1])
        if (player[arr].length - 1 === idxInputFirstNull) {
          console.log('lkdjflkasdjfkljaskldjfklasjdflkasjflk')
          // add class .active to .btn-add-col
          addClassActiveBtnAddCol(indexForm)
        }
      } else { // иначе добавляем колонку
        const index = player[arr].length
        addCol(targetForm) // local func
        Vue.set(player[arr], index, player[arr][index - 1])

        // ..и скроллим вправо
        // if current input является крайним..
        // if (player[arr].length - 2 == idxInputFirstNull) {
          // оставил setTimeout для более плавного действия
          setTimeout(() => {
            const $elMainCol = document.getElementById(`index-form-${indexForm}`)
              .querySelector('.form-sport-main .main-col')
            $elMainCol.scrollLeft = $elMainCol.scrollWidth - $elMainCol.offsetWidth
          },100)
        // }
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
  if (targetForm.settings.mode === 1) {
    player.resultAll = arraySum(player.result)
  } else if (targetForm.settings.mode === 2) {
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

// 1. Доработать scroll при repeat value last input
// (при отмотке влево и многократном нажатии на repeat, скроллится уже только тогда,
// когда добавляется новая колонка)

// 2. Сделать scroll не через трекер, а просто крутя колесо над областью inputs (.main-col)

// 3. При рендере страницы сначала показываются страшные рандомные скроллы (на desktop)


