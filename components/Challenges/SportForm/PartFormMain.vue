<template>
  <!-- <div class="form-sport-main"></div> -->
  <div class="form-sport-main" :class="{'mode-2': mode == 2, 'form-sport-main_last': index + 1 == players.length}">

    <!-- <div class="cell-input cell-descr cell-descr-name">{{ players[index].name }}</div> -->
    <div class="cell-input cell-descr cell-descr-name">
      <input class="input-transparent" type="text" :value="players[index].name">
    </div>

    <!-- 1 ряд -->
    <div class="cell-input">
      <input
      :value="players[index].result[0]"
      @input="$emit('input', $event.target.value)"
      class="input" type="number" min="0" max="9999">
    </div>
    <div class="cell-input">
      <input
      :value="players[index].result[1]"
      @input="$emit('input', $event.target.value)"
      class="input" type="number" min="0" max="9999">
    </div>
    <div class="cell-input">
      <input
      :value="players[index].result[2]"
      @input="$emit('input', $event.target.value)"
      class="input" type="number" min="0" max="9999">
    </div>
    <div class="cell-input">
      <input
      :value="players[index].result[3]"
      @input="$emit('input', $event.target.value)"
      class="input" type="number" min="0" max="9999">
    </div>
    <!-- button repiat c KГ, если 2 ряда -->
    <!-- <div class="cell-input cell-plus jcsb mode-2"> -->
    <div class="btn-repeat mode-2">
      <p class="cell-label">кг</p>
      <svg
        height="14" width="14"
        enable-background="new 0 0 512 512"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg">
        <g id="_x31_5_refresh">
          <path d="m504.92 229.383c-5.213-.575-26.628-2.939-29.602-3.268-14.437-116.247-113.603-208.697-236.736-208.697-131.863 0-238.582 106.707-238.582 238.582 0 131.864 106.707 238.582 238.582 238.582 69.282 0 131.939-29.528 175.765-77.25 7.796-8.489 7.234-21.692-1.255-29.488-8.489-7.797-21.692-7.234-29.488 1.255-35.991 39.19-87.576 63.742-145.022 63.742-108.539.001-196.842-88.302-196.842-196.841s88.303-196.842 196.842-196.842c96.727 0 177.381 70.131 193.789 162.216-5.804-.641-.08-.009-30.977-3.42-6.096-.673-10.621 5.523-8.126 11.125l41.987 94.272c2.472 5.55 10.007 6.382 13.631 1.505l61.539-82.844c3.656-4.922.59-11.956-5.505-12.629z" fill="#ffd438"/>
          <path d="m504.92 229.383c-5.213-.576-26.628-2.939-29.602-3.268-14.437-116.248-113.604-208.697-236.736-208.697-4.894 0-9.748.165-14.568.454 116.282 6.986 208.242 96.639 222.102 208.243 2.974.328 24.389 2.692 29.602 3.268 6.096.673 9.161 7.707 5.504 12.63l-51.385 69.175 5.417 12.164c2.472 5.55 10.008 6.382 13.631 1.505l61.538-82.844c3.658-4.923.592-11.957-5.503-12.63z" fill="#ffd438"/>
        </g>
      </svg>
    </div>

    <!-- 2 ряд -->
    <div class="cell-input mode-2"><input class="input" type="number" min="0" max="9999"></div>
    <div class="cell-input mode-2"><input class="input" type="number" min="0" max="9999"></div>
    <div class="cell-input mode-2"><input class="input" type="number" min="0" max="9999"></div>
    <div class="cell-input mode-2"><input class="input" type="number" min="0" max="9999"></div>

    <!-- button repiat -->
    <!-- <div class="cell-input cell-plus"> -->
    <div class="btn-repeat">
      <svg
        height="14" width="14"
        enable-background="new 0 0 512 512"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg">
        <g id="_x31_5_refresh">
          <path d="m504.92 229.383c-5.213-.575-26.628-2.939-29.602-3.268-14.437-116.247-113.603-208.697-236.736-208.697-131.863 0-238.582 106.707-238.582 238.582 0 131.864 106.707 238.582 238.582 238.582 69.282 0 131.939-29.528 175.765-77.25 7.796-8.489 7.234-21.692-1.255-29.488-8.489-7.797-21.692-7.234-29.488 1.255-35.991 39.19-87.576 63.742-145.022 63.742-108.539.001-196.842-88.302-196.842-196.841s88.303-196.842 196.842-196.842c96.727 0 177.381 70.131 193.789 162.216-5.804-.641-.08-.009-30.977-3.42-6.096-.673-10.621 5.523-8.126 11.125l41.987 94.272c2.472 5.55 10.007 6.382 13.631 1.505l61.539-82.844c3.656-4.922.59-11.956-5.505-12.629z" fill="#ffd438"/>
          <path d="m504.92 229.383c-5.213-.576-26.628-2.939-29.602-3.268-14.437-116.248-113.604-208.697-236.736-208.697-4.894 0-9.748.165-14.568.454 116.282 6.986 208.242 96.639 222.102 208.243 2.974.328 24.389 2.692 29.602 3.268 6.096.673 9.161 7.707 5.504 12.63l-51.385 69.175 5.417 12.164c2.472 5.55 10.008 6.382 13.631 1.505l61.538-82.844c3.658-4.923.592-11.957-5.503-12.63z" fill="#ffd438"/>
        </g>
      </svg>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    index: {
      type: Number,
      require: true
    },
    // принимаем всех, а не одного только для вычисления последнего
    // с целью добавления отступа внизу всего блока с players
    players: {
      type: Array,
      require: true
    },
    // mode1: 1 stroke, mode2: 2 stroke
    mode: {
      type: Number,
      default: 1
    }
  },

  data() {
    return {
      dataResult: this.players[this.index]
    }
  },

  computed: {

  }
}

// export default {
//   props: {
//     countCol: {
//       type: Number,
//       require: true
//     },
//     players: {
//       type: Array,
//       require: true
//     }
//   },

//   data() {
//     return {

//     }
//   },

//   async mounted() {
//     const $el = document.querySelector('.form-sport-main')

//     const players = this.players
//     const countPlayers = players.length
//     const countCol = this.countCol

//     $el.style.grid = `repeat(${ countPlayers }, 4rem)/70px repeat(${ countCol + 1 }, 1fr)`

//     // const calendarGraph = this.calendarGraph

//     let resultHtml = ``


//     createRow()

//     function createRow() {
//       for (let i = 0; i < countPlayers; i++) {
//         resultHtml += `
//           <div class="cell-input cell-descr cell-descr-name">${players[i].name}</div>
//           ${ createInputs() }
//           <div class="cell-input cell-plus"></div>
//         `
//       }
//     }
//     function createInputs() {
//       let html = ''
//       for (let i = 0; i < countCol; i++) {
//         html += `
//           <div class="cell-input"><input type="text" value=""></div>
//         `
//       }
//       return html
//     }

//     $el.innerHTML = resultHtml
//   }
// }
</script>

<style lang="sass">

// Убрать стрелочки с <input type=“number”>
.form-sport-main
  input[type='number']
    -moz-appearance: textfield
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button
    -webkit-appearance: none

.form-sport-main
  grid: repeat(1, 4rem)/$width-first-column-grid repeat(5, 1fr) // row/col
  padding-bottom: .5rem
  .input
    max-width: 5.5rem
  .btn-repeat
    display: flex
    align-items: center
    justify-content: center
    svg
      cursor: pointer
  .mode-2
    display: none

.form-sport-main.mode-2
  grid: repeat(2, 3rem)/$width-first-column-grid repeat(5, 1fr) // row/col
  padding-bottom: .5rem
  padding-top: .5rem
  .cell-descr-name
    grid-column: 1/2
    grid-row: 1/3
    overflow: hidden
  .cell-label
    user-select: none
  .btn-repeat
    padding-right: 1rem
    justify-content: flex-end

  .btn-repeat.mode-2
    padding-right: 1rem
    justify-content: space-between
  .mode-2
    display: flex

.form-sport-main.mode-2.form-sport-main_last
  padding-bottom: 1rem

</style>
