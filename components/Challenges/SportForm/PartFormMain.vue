<template>
  <!-- <div class="top-label"></div>
  <div class="grid-nesting-label">
    <div v-for="item in count" :key="item" class="top-label">{{ item }}</div>
  </div>
  <div class="btn-add-col"><span data-add-col="true">+</span></div> -->
  <div>
    <div
      v-for="(player, index) in players" :key="index"
      class="form-sport-main"
      :class="{'mode-2': mode == 2, 'form-sport-main_last': index + 1 == players.length}"
    >

      <!-- name -->
      <div class="cell-input cell-descr cell-descr-name">
        <input
          :value="players[index].name"
          :data-index-form="indexForm"
          :data-index-player="index"
          data-name-player="true"
          class="input-transparent" type="text">
      </div>

      <div class="grid-nesting">
        <!-- 1 ряд -->
        <div class="cell-input">
          <input
            :value="players[index].result[0]"
            :data-index-form="indexForm"
            :data-index-player="index"
            data-index-result="0"
            class="input" type="number" min="0" max="9999">
        </div>
        <div class="cell-input">
          <input
            :value="players[index].result[1]"
            :data-index-form="indexForm"
            :data-index-player="index"
            data-index-result="1"
            class="input" type="number" min="0" max="9999">
        </div>
        <div class="cell-input">
          <input
            :value="players[index].result[2]"
            :data-index-form="indexForm"
            :data-index-player="index"
            data-index-result="2"
            class="input" type="number" min="0" max="9999">
        </div>
        <div class="cell-input">
          <input
            :value="players[index].result[3]"
            :data-index-form="indexForm"
            :data-index-player="index"
            data-index-result="3"
            class="input" type="number" min="0" max="9999">
        </div>

        <!-- 2 ряд -->
        <div v-if="mode === 2" class="cell-input">
          <input
            :value="players[index].result2[0]"
            :data-index-form="indexForm"
            :data-index-player="index"
            data-mode-result="result2"
            data-index-result="0"
            class="input" type="number" min="0" max="9999">
        </div>
        <div v-if="mode === 2" class="cell-input">
          <input
            :value="players[index].result2[1]"
            :data-index-form="indexForm"
            :data-index-player="index"
            data-mode-result="result2"
            data-index-result="1"
            class="input" type="number" min="0" max="9999">
        </div>
        <div v-if="mode === 2" class="cell-input">
          <input
            :value="players[index].result2[2]"
            :data-index-form="indexForm"
            :data-index-player="index"
            data-mode-result="result2"
            data-index-result="2"
            class="input" type="number" min="0" max="9999">
        </div>
        <div v-if="mode === 2" class="cell-input">
          <input
            :value="players[index].result2[3]"
            :data-index-form="indexForm"
            :data-index-player="index"
            data-mode-result="result2"
            data-index-result="3"
            class="input" type="number" min="0" max="9999">
        </div>
      </div>

      <div class="grid-nesting-btn">
        <!-- button repeat c KГ, если 2 ряда -->
        <div v-if="mode === 2" class="btn-repeat mode-2">
          <p class="cell-label">кг</p>
          <svg
            height="14" width="14"
            data-repeat-last-result="true"
            enable-background="new 0 0 512 512"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg">
            <path d="m504.92 229.383c-5.213-.575-26.628-2.939-29.602-3.268-14.437-116.247-113.603-208.697-236.736-208.697-131.863 0-238.582 106.707-238.582 238.582 0 131.864 106.707 238.582 238.582 238.582 69.282 0 131.939-29.528 175.765-77.25 7.796-8.489 7.234-21.692-1.255-29.488-8.489-7.797-21.692-7.234-29.488 1.255-35.991 39.19-87.576 63.742-145.022 63.742-108.539.001-196.842-88.302-196.842-196.841s88.303-196.842 196.842-196.842c96.727 0 177.381 70.131 193.789 162.216-5.804-.641-.08-.009-30.977-3.42-6.096-.673-10.621 5.523-8.126 11.125l41.987 94.272c2.472 5.55 10.007 6.382 13.631 1.505l61.539-82.844c3.656-4.922.59-11.956-5.505-12.629z" fill="#ffd438"/>
            <path d="m504.92 229.383c-5.213-.576-26.628-2.939-29.602-3.268-14.437-116.248-113.604-208.697-236.736-208.697-4.894 0-9.748.165-14.568.454 116.282 6.986 208.242 96.639 222.102 208.243 2.974.328 24.389 2.692 29.602 3.268 6.096.673 9.161 7.707 5.504 12.63l-51.385 69.175 5.417 12.164c2.472 5.55 10.008 6.382 13.631 1.505l61.538-82.844c3.658-4.923.592-11.957-5.503-12.63z" fill="#ffd438"/>
          </svg>
        </div>

        <!-- button repeat -->
        <div class="btn-repeat">
          <svg
            height="14" width="14"
            data-repeat-last-result="true"
            enable-background="new 0 0 512 512"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg">
            <path d="m504.92 229.383c-5.213-.575-26.628-2.939-29.602-3.268-14.437-116.247-113.603-208.697-236.736-208.697-131.863 0-238.582 106.707-238.582 238.582 0 131.864 106.707 238.582 238.582 238.582 69.282 0 131.939-29.528 175.765-77.25 7.796-8.489 7.234-21.692-1.255-29.488-8.489-7.797-21.692-7.234-29.488 1.255-35.991 39.19-87.576 63.742-145.022 63.742-108.539.001-196.842-88.302-196.842-196.841s88.303-196.842 196.842-196.842c96.727 0 177.381 70.131 193.789 162.216-5.804-.641-.08-.009-30.977-3.42-6.096-.673-10.621 5.523-8.126 11.125l41.987 94.272c2.472 5.55 10.007 6.382 13.631 1.505l61.539-82.844c3.656-4.922.59-11.956-5.505-12.629z" fill="#ffd438"/>
            <path d="m504.92 229.383c-5.213-.576-26.628-2.939-29.602-3.268-14.437-116.248-113.604-208.697-236.736-208.697-4.894 0-9.748.165-14.568.454 116.282 6.986 208.242 96.639 222.102 208.243 2.974.328 24.389 2.692 29.602 3.268 6.096.673 9.161 7.707 5.504 12.63l-51.385 69.175 5.417 12.164c2.472 5.55 10.008 6.382 13.631 1.505l61.538-82.844c3.658-4.923.592-11.957-5.503-12.63z" fill="#ffd438"/>
          </svg>
        </div>
      </div>

    </div>

    <!-- :class="{'mode-2': mode == 2, 'form-sport-main_last': index + 1 == players.length}" -->
    <div class="form-sport-main-TEMP-Right" :class="{'mode-2': mode == 2}">

      <!-- name-col -->
      <div class="name-col">
        <!-- top-label-row -->
        <div class="top-label"></div>

        <!-- other-rows -->
        <!-- name -->
        <div class="cell-input cell-descr cell-descr-name row-typical"
          v-for="(player, index) in players" :key="index"
        >
          <input
            :value="players[index].name"
            :data-index-form="indexForm"
            :data-index-player="index"
            data-name-player="true"
            class="input-transparent" type="text">
        </div>
      </div>

      <!-- main-col -->
      <div class="main-col">
        <!-- top-label-row -->
        <div class="grid-nesting-label">
          <div v-for="item in countCol" :key="item" class="top-label">{{ item }}</div>
        </div>

        <!-- other-rows -->
        <div class="grid-nesting-main"
          v-for="(player, index) in players" :key="index"
        >
          <!-- 1 ряд -->
          <div class="cell-input">
            <input
              :value="players[index].result[0]"
              :data-index-form="indexForm"
              :data-index-player="index"
              data-index-result="0"
              class="input" type="number" min="0" max="9999">
          </div>
          <div class="cell-input">
            <input
              :value="players[index].result[1]"
              :data-index-form="indexForm"
              :data-index-player="index"
              data-index-result="1"
              class="input" type="number" min="0" max="9999">
          </div>
          <div class="cell-input">
            <input
              :value="players[index].result[2]"
              :data-index-form="indexForm"
              :data-index-player="index"
              data-index-result="2"
              class="input" type="number" min="0" max="9999">
          </div>
          <div class="cell-input">
            <input
              :value="players[index].result[3]"
              :data-index-form="indexForm"
              :data-index-player="index"
              data-index-result="3"
              class="input" type="number" min="0" max="9999">
          </div>

          <!-- 2 ряд -->
          <div v-if="mode === 2" class="cell-input row-2">
            <input
              :value="players[index].result2[0]"
              :data-index-form="indexForm"
              :data-index-player="index"
              data-mode-result="result2"
              data-index-result="0"
              class="input" type="number" min="0" max="9999">
          </div>
          <div v-if="mode === 2" class="cell-input row-2">
            <input
              :value="players[index].result2[1]"
              :data-index-form="indexForm"
              :data-index-player="index"
              data-mode-result="result2"
              data-index-result="1"
              class="input" type="number" min="0" max="9999">
          </div>
          <div v-if="mode === 2" class="cell-input row-2">
            <input
              :value="players[index].result2[2]"
              :data-index-form="indexForm"
              :data-index-player="index"
              data-mode-result="result2"
              data-index-result="2"
              class="input" type="number" min="0" max="9999">
          </div>
          <div v-if="mode === 2" class="cell-input row-2">
            <input
              :value="players[index].result2[3]"
              :data-index-form="indexForm"
              :data-index-player="index"
              data-mode-result="result2"
              data-index-result="3"
              class="input" type="number" min="0" max="9999">
          </div>
        </div>
      </div>

      <!-- btns-col -->
      <div class="btns-col">
        <!-- top-label-row -->
        <div class="btn-add-col"><span data-add-col="true">+</span></div>

        <!-- other-rows -->
        <div class="grid-nesting-btns"
          v-for="(player, index) in players" :key="index"
        >
          <!-- button repeat c KГ, если 2 ряда -->
          <div v-if="mode === 2" class="btn-repeat mode-2">
            <p class="cell-label">кг</p>
            <svg
              height="14" width="14"
              data-repeat-last-result="true"
              enable-background="new 0 0 512 512"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg">
              <path d="m504.92 229.383c-5.213-.575-26.628-2.939-29.602-3.268-14.437-116.247-113.603-208.697-236.736-208.697-131.863 0-238.582 106.707-238.582 238.582 0 131.864 106.707 238.582 238.582 238.582 69.282 0 131.939-29.528 175.765-77.25 7.796-8.489 7.234-21.692-1.255-29.488-8.489-7.797-21.692-7.234-29.488 1.255-35.991 39.19-87.576 63.742-145.022 63.742-108.539.001-196.842-88.302-196.842-196.841s88.303-196.842 196.842-196.842c96.727 0 177.381 70.131 193.789 162.216-5.804-.641-.08-.009-30.977-3.42-6.096-.673-10.621 5.523-8.126 11.125l41.987 94.272c2.472 5.55 10.007 6.382 13.631 1.505l61.539-82.844c3.656-4.922.59-11.956-5.505-12.629z" fill="#ffd438"/>
              <path d="m504.92 229.383c-5.213-.576-26.628-2.939-29.602-3.268-14.437-116.248-113.604-208.697-236.736-208.697-4.894 0-9.748.165-14.568.454 116.282 6.986 208.242 96.639 222.102 208.243 2.974.328 24.389 2.692 29.602 3.268 6.096.673 9.161 7.707 5.504 12.63l-51.385 69.175 5.417 12.164c2.472 5.55 10.008 6.382 13.631 1.505l61.538-82.844c3.658-4.923.592-11.957-5.503-12.63z" fill="#ffd438"/>
            </svg>
          </div>

          <!-- button repeat -->
          <div class="btn-repeat">
            <svg
              height="14" width="14"
              data-repeat-last-result="true"
              enable-background="new 0 0 512 512"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg">
              <path d="m504.92 229.383c-5.213-.575-26.628-2.939-29.602-3.268-14.437-116.247-113.603-208.697-236.736-208.697-131.863 0-238.582 106.707-238.582 238.582 0 131.864 106.707 238.582 238.582 238.582 69.282 0 131.939-29.528 175.765-77.25 7.796-8.489 7.234-21.692-1.255-29.488-8.489-7.797-21.692-7.234-29.488 1.255-35.991 39.19-87.576 63.742-145.022 63.742-108.539.001-196.842-88.302-196.842-196.841s88.303-196.842 196.842-196.842c96.727 0 177.381 70.131 193.789 162.216-5.804-.641-.08-.009-30.977-3.42-6.096-.673-10.621 5.523-8.126 11.125l41.987 94.272c2.472 5.55 10.007 6.382 13.631 1.505l61.539-82.844c3.656-4.922.59-11.956-5.505-12.629z" fill="#ffd438"/>
              <path d="m504.92 229.383c-5.213-.576-26.628-2.939-29.602-3.268-14.437-116.248-113.604-208.697-236.736-208.697-4.894 0-9.748.165-14.568.454 116.282 6.986 208.242 96.639 222.102 208.243 2.974.328 24.389 2.692 29.602 3.268 6.096.673 9.161 7.707 5.504 12.63l-51.385 69.175 5.417 12.164c2.472 5.55 10.008 6.382 13.631 1.505l61.538-82.844c3.658-4.923.592-11.957-5.503-12.63z" fill="#ffd438"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    indexForm: {
      type: Number,
      require: true
    },
    // mode1: 1 stroke, mode2: 2 stroke
    mode: {
      type: Number,
      default: 1
    },
    players: {
      type: Array,
      require: true
    },
    countCol: {
      type: Number,
      require: true
    },
  },

  data() {
    return {

    }
  },

  computed: {

  },

  methods: {

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

.form-sport-main-TEMP-Right
  // vars
  $heightRowTopLabel: 2rem
  $heightRowTypical: 4rem
  $heightRowTypicalMode2: 3.5rem
  $heightRowTypicalMode2ForNameColAndBtnsCol: calc(#{$heightRowTypicalMode2} * 2)

  // Убрать стрелочки с <input type=“number”>
  input[type='number']
    -moz-appearance: textfield
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button
    -webkit-appearance: none

  margin-top: 1rem
  padding-top: 1rem
  border-top-right-radius: 1rem
  border-top-left-radius: 1rem
  grid: repeat(1, auto)/$width-first-column-grid 4fr 1fr // row/col
  padding-bottom: .5rem

  // .name-col,
  // .main-col,
  // .btns-col

  .row-typical
    height: $heightRowTypical

  .grid-nesting-label,
  .grid-nesting-main,
  .grid-nesting-btns
    display: grid
    grid-gap: 2px
    overflow-x: scroll
    -ms-overflow-style: none  // IE 10+
    scrollbar-width: none // Firefox
    scrollbar-height: none // Firefox
    &::-webkit-scrollbar // chrome based
      width: 0 // ширина scrollbar'a
      height: 0 // ширина scrollbar'a
    //   background: transparent  // опционально
  .grid-nesting-label
    grid: repeat(1, $heightRowTopLabel)/repeat(4, minmax(4rem, 1fr)) // row/col //min-width берется из indexFormSport.vue(.cell-input)
  .grid-nesting-main
    grid: repeat(1, $heightRowTypical)/repeat(4, minmax(4rem, 1fr)) // row/col //min-width берется из indexFormSport.vue(.cell-input)
    // border: 1px solid red
  .grid-nesting-btns
    grid: repeat(1, $heightRowTypical)/1fr // row/col
    .btn-repeat
      display: flex
      justify-content: center
      align-items: center
      height: 100%
      width: 100%
    svg
      cursor: pointer

  .cell-input.row-2
    margin-bottom: 1rem
  // .btn-repeat.row-2
  //   margin-bottom: 1rem

  .top-label,
  .btn-add-col
    display: flex
    justify-content: center
    align-items: center
    user-select: none
    height: $heightRowTopLabel
  .top-label
    font-size: 10px
    line-height: 1.8rem
    color: #aaa
  .btn-add-col
    color: $theme-color-yellow
    font-size: 1.8rem
    padding-right: .2rem
    height: $heightRowTopLabel
    span
      line-height: 1.8rem
      cursor: pointer

  .input
    max-width: 5.5rem

  // mode-2
  &.mode-2
    grid: repeat(1, auto)/$width-first-column-grid 4fr 1fr // row/col
    padding-bottom: .5rem

    .grid-nesting-main
      grid: repeat(2, $heightRowTypicalMode2)/repeat(4, minmax(4rem, 1fr)) // row/col //min-width берется из indexFormSport.vue(.cell-input)
    .grid-nesting-btns
      grid: repeat(2, $heightRowTypicalMode2)/1fr // row/col
      .btn-repeat
        display: flex
        justify-content: flex-end
        align-items: center
        height: 100%
        width: 100%
        padding-right: 1rem
        padding-bottom: 1rem
      .btn-repeat.mode-2
        padding-bottom: 0
        justify-content: space-between

    .row-typical
      height: $heightRowTypicalMode2ForNameColAndBtnsCol // используется разово, лишний класс вроде

    .cell-descr-name
      grid-column: 1/2
      grid-row: 1/3
      overflow: hidden
    .cell-label
      user-select: none

    .btn-add-col
      justify-content: flex-end
      padding-right: 1.3rem













// -------------------------------------------------------------------------
// Убрать стрелочки с <input type=“number”>
.form-sport-main
  input[type='number']
    -moz-appearance: textfield
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button
    -webkit-appearance: none

.form-sport-main
  // grid: repeat(1, 4rem)/$width-first-column-grid repeat(5, 1fr) // row/col
  grid: repeat(1, 4rem)/$width-first-column-grid 4fr 1fr // row/col
  padding-bottom: .5rem
  .input
    max-width: 5.5rem
  .btn-repeat
    display: flex
    align-items: center
    justify-content: center
    svg
      cursor: pointer

  .grid-nesting,
  .grid-nesting-label,
  .grid-nesting-btn
    display: grid
    grid-gap: 2px
    overflow-x: scroll
    -ms-overflow-style: none  // IE 10+
    scrollbar-width: none // Firefox
    scrollbar-height: none // Firefox
    &::-webkit-scrollbar // chrome based
      width: 0 // ширина scrollbar'a
      height: 0 // ширина scrollbar'a
    //   background: transparent  // опционально

  .grid-nesting
    grid: repeat(1, 100%)/repeat(4, minmax(4rem, 1fr)) // row/col //min-width берется из indexFormSport.vue(.cell-input)

  .grid-nesting-label
    grid: repeat(1, 100%)/repeat(4, minmax(4rem, 1fr)) // row/col //min-width берется из indexFormSport.vue(.cell-input)

  .grid-nesting-btn
    grid: repeat(1, 100%)/1fr // row/col

  .top-label,
  .btn-add-col
    display: flex
    justify-content: center
    align-items: center
    user-select: none
  .top-label
    font-size: 10px
    line-height: 1.8rem
    color: #aaa
  .btn-add-col
    color: $theme-color-yellow
    font-size: 1.8rem
    padding-right: .2rem
    span
      line-height: 1.8rem
      cursor: pointer

.form-sport-main.mode-2
  grid: repeat(1, 6rem)/$width-first-column-grid 4fr 1fr // row/col
  padding-bottom: .5rem
  padding-top: .5rem

  .grid-nesting
    grid: repeat(2, 50%)/repeat(4, minmax(4rem, 1fr)) // row/col //min-width берется из indexFormSport.vue(.cell-input)

  .grid-nesting-btn
    grid: repeat(2, 50%)/1fr // row/col

  .cell-descr-name
    grid-column: 1/2
    grid-row: 1/3
    overflow: hidden
  .cell-label
    user-select: none
  .btn-repeat
    padding-right: 1rem
    justify-content: flex-end

  .btn-add-col
    justify-content: flex-end
    padding-right: 1.3rem

  .btn-repeat.mode-2
    padding-right: 1rem
    justify-content: space-between

.form-sport-main.mode-2.form-sport-main_last
  padding-bottom: 1rem

</style>
