<template>
  <div class="form-sport-top-label" :class="{'mode-2': mode == 2}">
    <div class="top-label"></div>
    <div class="grid-nesting">
      <div v-for="item in count" :key="item" class="top-label">{{ item }}</div>
    </div>
    <div class="btn-add-col"><span data-add-col="true">+</span></div>
  </div>
</template>

<script>
export default {
  props: {
    count: {
      type: Number,
      require: true
    },
    mode: {
      type: Number,
      require: true
    }
  },
}
</script>

<style lang="sass">
.form-sport-top-label
  grid: repeat(1, 2rem)/$width-first-column-grid 4fr 1fr // row/col
  border-top-right-radius: 1rem
  border-top-left-radius: 1rem
  padding-top: 1rem

  .grid-nesting
    display: grid
    grid: repeat(1, 100%)/repeat(4, minmax(4rem, 1fr)) // row/col //min-width берется из indexFormSport.vue(.cell-input)
    font-size: 10px
    color: #aaa
    overflow-x: scroll
    -ms-overflow-style: non  // IE 10+
    scrollbar-width: none // Firefox
    scrollbar-height: none // Firefox
    &::-webkit-scrollbar // chrome based
      width: 0 // ширина scrollbar'a
      height: 5 // ширина scrollbar'a
    //   background: transparent  // опционально

  .top-label,
  .btn-add-col
    display: flex
    justify-content: center
    align-items: center
    user-select: none
  .btn-add-col
    color: $theme-color-yellow
    font-size: 1.8rem
    padding-right: .2rem
    span
      line-height: 1.8rem
      cursor: pointer

.form-sport-top-label.mode-2
  .btn-add-col
    justify-content: flex-end
    padding-right: 1.3rem
</style>
