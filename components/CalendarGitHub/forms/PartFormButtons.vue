<template>
  <div class="form-sport-buttons">
    <div class="buttons">
      <button>Сохранить</button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="sass">
.form-sport-buttons
  grid: repeat(1, 2rem)/ repeat(1, 1fr) // row/col
  padding-left: 0
  border-bottom-left-radius: 1rem
  border-bottom-right-radius: 1rem
  .buttons
    // padding-bottom: 1rem
    padding: 0 1rem
    background-color: #2a2424
    border-bottom-left-radius: 1rem
    border-bottom-right-radius: 1rem
    display: flex
    justify-content: center
    align-items: center
    button
      background-color: #ffd438
      border: none
      border-radius: 4px
      height: 3rem
      padding-left: 2rem
      padding-right: 2rem
      box-shadow: 0 16px 16px rgba(0,0,0,.06)
</style>
