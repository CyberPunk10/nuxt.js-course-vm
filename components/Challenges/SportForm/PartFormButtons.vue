<template>
  <div class="form-sport-buttons">
    <div class="buttons">
      <!-- <button>Сохранить</button> -->
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="sass">
.form-sport-buttons
  z-index: 999 // тень от .form-sport-tabs должна быть под этим блоком
  position: relative
  grid: repeat(1, 1.4rem)/ repeat(1, 1fr) // row/col
  padding-left: 0
  background-color: #ffd4385f
  .buttons
    z-index: 10
    border-bottom-right-radius: $borderRadiusForm
    background-color: #2a2424

</style>
