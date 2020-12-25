<template>
  <div>
    <div class="form-sport-main" :class="{'mode-2': mode == 2}">

      <!-- name-col -->
      <div class="name-col">
        <!-- top-label-row -->
        <div class="top-row top-label"></div>

        <!-- other-rows -->
        <!-- name -->
        <div class="cell-input cell-descr cell-descr-name "
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
      <div class="main-col layout-scrollbar-sport-form layout-cell-sport-form" @scroll="scrollMainCol">
        <!-- top-label-row -->
        <div class="top-row grid-nesting-label" :style="styleGridTemplateColumns">
          <div v-for="(item, index) in players[0].result.length" :key="index" class="top-label">{{ ++index }}</div>
        </div>

        <!-- other-rows -->
        <div class="main-col-grids-nesting"
          v-for="(player, index) in players" :key="index"
        >

          <!-- 1 ряд -->
          <div class="grid-nesting-main-row-1" :style="styleGridTemplateColumns">
            <div class="cell-input"
              v-for="(resultItem, indexResult) in players[index].result" :key="indexResult"
            >
              <input
                :value="players[index].result[indexResult]"
                :data-index-form="indexForm"
                :data-index-player="index"
                :data-index-result="indexResult"
                class="input" type="number" min="0" max="9999">
            </div>
          </div>

          <!-- 2 ряд -->
          <div v-if="mode === 2" class="grid-nesting-main-row-2" :style="styleGridTemplateColumns">
            <div class="cell-input"
              v-for="(resultItem2, indexResult2) in players[index].result2" :key="indexResult2"
            >
              <input
                :value="players[index].result2[indexResult2]"
                :data-index-form="indexForm"
                :data-index-player="index"
                :data-index-result="indexResult2"
                data-result2="true"
                class="input" type="number" min="0" max="9999">
            </div>
          </div>

        </div>

      </div>

      <!-- btns-col -->
      <div class="btns-col">
        <div class="box-shadow-content">
          <!-- top-label-row -->
          <div class="top-row btn-add-col"><span data-add-col="true">+</span></div>

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

        <div class="box-shadow active"></div>
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
    }
  },

  data() {
    return {

      }
  },

  computed: {
    styleGridTemplateColumns: function () {
        return {
          gridTemplateColumns: `repeat(${this.players[0].result.length}, minmax(4rem, 1fr))`
        }
      }
  },

  methods: {
    scrollMainCol(e) {
      console.log(e)
    }
  }
}
</script>

<style lang="sass">
.form-sport-main
  // vars
  $heightRowTopLabel: 2rem
  $heightRowTypical: 4rem
  $heightRowTypicalMode2: 3rem
  $heightRowTypicalMode2ForNameCol: calc(#{$heightRowTypicalMode2} * 2)

  // Убрать стрелочки с <input type=“number”>
  input[type='number']
    -moz-appearance: textfield
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button
    -webkit-appearance: none

  border-top-right-radius: 1rem
  border-top-left-radius: 1rem
  grid: repeat(1, auto)/$width-first-column-grid 4fr 1fr // row/col
  grid-gap: 0
  // padding-bottom: .5rem
  .top-row
    padding-top: 1rem

  .name-col,
  .main-col,
  .btns-col
    padding-bottom: .5rem

  .main-col
    overflow-x: scroll

  .grid-nesting-label,
  .grid-nesting-main-row-1,
  .grid-nesting-main-row-2,
  .grid-nesting-btns
    display: grid
    grid-gap: 2px
  .grid-nesting-btns
    grid-gap: 0

  .grid-nesting-label
    grid: repeat(1, $heightRowTopLabel)/repeat(4, minmax(4rem, 1fr)) // row/col //min-width берется из indexFormSport.vue(.cell-input)
  .grid-nesting-main-row-1,
  .grid-nesting-main-row-2
    // grid: repeat(1, $heightRowTypical)/repeat(4, minmax(4rem, 1fr)) // row/col //min-width берется из indexFormSport.vue(.cell-input)
    grid-template-rows: repeat(1, $heightRowTypical)
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

  .top-label,
  .btn-add-col
    display: flex
    justify-content: center
    align-items: center
    user-select: none
    height: $heightRowTopLabel
  .top-label
    font-size: 1rem
    line-height: 1.8rem
    color: #aaa
  .btn-add-col
    color: $theme-color-yellow
    font-size: 1.8rem
    padding-right: .2rem
    margin-top: 1rem
    padding-top: 0
    span
      line-height: $heightRowTopLabel
      cursor: pointer

  .input
    max-width: 5.5rem

  .cell-descr-name
    overflow: hidden
    height: $heightRowTypical

  // добавление тени при появлении скролла в колонке с ячейками
  .btns-col
    position: relative
    .btn-add-col,
    .grid-nesting-btns
      z-index: 20
      background-color: $theme-color-black

    .box-shadow,
    .box-shadow-content
      position: absolute
      top: 0
      left: 0
      bottom: 0
      z-index: 1
    .box-shadow
      box-shadow: 0 0 10px rgba(1, 1, 1,.52)
      width: 4px
      z-index: 0
      opacity: 0
      transition: opacity .4s ease
    .box-shadow.active
      opacity: 1
    .box-shadow-content
      z-index: 1
      width: 100%
      border-top-right-radius: 1rem
      background-color: $theme-color-black

  // mode-2
  &.mode-2
    padding-bottom: 0
    .top-row
      margin-bottom: .5rem
    .name-col,
    .main-col,
    .btns-col
      padding-bottom: 0

    .grid-nesting-main-row-1,
    .grid-nesting-main-row-2
      grid: repeat(1, $heightRowTypicalMode2)/repeat(4, minmax(4rem, 1fr)) // row/col //min-width берется из indexFormSport.vue(.cell-input)

    .cell-descr-name
      height: $heightRowTypicalMode2ForNameCol

    .cell-descr-name,
    .grid-nesting-main-row-2,
    .grid-nesting-btns
      margin-bottom: 1rem

    .grid-nesting-btns
      grid: repeat(2, $heightRowTypicalMode2)/1fr // row/col
      .btn-repeat
        display: flex
        justify-content: flex-end
        align-items: center
        height: 100%
        width: 100%
        padding-right: 1rem
      .btn-repeat.mode-2
        justify-content: space-between

    .cell-label // кг
      user-select: none
      padding-left: .2rem

    .btn-add-col
      justify-content: flex-end
      padding-right: 1.3rem

</style>
