<template>
<div class="form-sport-result">
  <div class="cell-input cell-descr">Всего:</div>
    <div class="cells-group">
      <p>
        <span class="name">Player 1</span><br>
        <span class="">21</span>
      </p>
    </div>
    <div class="cells-group">
      <p>
        <span class="name">Player 2</span><br>
        <span class="">21</span>
      </p>
    </div>
    <div class="cells-group">
      <p>
        <span class="name">Player 3</span><br>
        <span class="">21</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="sass">
.form-sport-result
  grid: repeat(1, 5rem)/$width-first-column-grid repeat(3, 1fr) // row/col
  padding-right: 1rem
  .cell-input
    min-width: 3rem
  .cell-width-x3
    min-width: 9.2rem
  .cells-group
    display: flex
    justify-content: center
    align-items: center
    border: 1px solid rgba(255,255,255,.1)
    border-radius: 4px
    p
      text-align: center
    .name
      color: #aaa
      font-size: 1.2rem
</style>
