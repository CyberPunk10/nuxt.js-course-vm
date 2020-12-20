<template>
  <div class="form-sport-top-label" :class="{'mode-2': mode == 2}">
    <div class="top-label"></div>
    <div v-for="item in count" :key="item" class="top-label">{{ item }}</div>
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
  grid: repeat(1, 2rem)/$width-first-column-grid repeat(5, 1fr) // row/col
  border-top-right-radius: 1rem
  border-top-left-radius: 1rem
  padding-top: 1rem
  font-size: 10px
  color: #aaa

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
