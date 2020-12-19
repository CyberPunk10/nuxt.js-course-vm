<template>
  <div class="form-sport-buttons">
    <div class="buttons" :class="{bblr: activeTab != '1', bbrr: activeTab != '3'}">
      <!-- <button>Сохранить</button> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    activeTab: {
      type: String,
      default: '1'
    }
  }
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
    background-color: $theme-color-black
  .buttons.bblr
    border-bottom-left-radius: $borderRadiusForm
  .buttons.bbrr
    border-bottom-right-radius: $borderRadiusForm



</style>
