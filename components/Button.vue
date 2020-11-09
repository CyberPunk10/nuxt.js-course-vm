<template >
  <button class="btn" v-bind:type="button.type">
    <span class="btn__title">{{button.text}}</span>
  </button>
</template>

<script>
export default {
  props: ['button']
}
</script>
<style lang="sass">
$color-dark-shade-100: rg(97, 40, 81)
$color-dark-shade-75: rgba(97, 40, 81, 0.75)
$color-dark-shade-50: rgba(97, 40, 81, 0.5)
// $color-dark-shade-25: rgba(31, 32, 65, 0.25)
// $color-dark-shade-10: rgba(31, 32, 65, 0.10)
// $color-dark-shade-5: rgba(31, 32, 65, 0.05)
// $color-purple: #BC9CFF
.btn
  cursor: pointer
  user-select: none
  position: relative
  max-width: 32rem
  min-width: 5rem
  height: 4.2rem
  margin: 1rem
  color: $color-dark-shade-75
  background-color: #fff
  font-family: "Open Sans", sans-serif
  text-align: center
  transition: .15s ease-out background-color
  border: none
  outline: none
  &:hover
    background-color: $color-dark-shade-100
  &__title
    width: 100%
    line-height: 4.4rem
    text-align: center
    white-space: nowrap
    font-weight: bold
    font-size: 1.2rem
    text-transform: uppercase
    padding: 1rem
</style>



