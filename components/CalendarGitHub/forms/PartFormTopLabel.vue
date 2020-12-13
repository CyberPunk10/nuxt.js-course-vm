<template>
  <div class="form-sport-top-label">
    <div class="cell-input cell-label"></div>
    <div v-for="item in count" :key="item" class="cell-input cell-label">{{ item }}</div>
    <div @click="$emit('addcol')" class="cell-input cell-label cell-plus">+</div>
  </div>
</template>

<script>
export default {
  props: {
    count: {
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
</style>
