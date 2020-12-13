<template>
  <div class="form-sport-relax">
    <div class="cell-input cell-descr">Отдых:</div>
    <div class="cell-input"><input class="cell-width-x3" type="text" value="вольный"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="sass">
.form-sport-relax
  grid: repeat(1, 4rem)/$width-first-column-grid 1fr // row/col
  padding-top: .5rem
  border-top: 1px solid rgba(255,255,255,.1)
  & > div.cell-input
    padding-right: 1rem
    input
      justify-content: flex-start
      width: 100%
</style>
