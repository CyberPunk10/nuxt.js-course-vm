<template >
  <button class="button-challenge">
    <span class="button-challenge__title"><slot/></span>
  </button>
</template>

<style lang="sass">
.button-challenge
  cursor: pointer
  user-select: none
  // position: relative
  width: 100%
  height: 3.4rem
  color: #fff
  background-color: darken($primary-color, 2%)
  font-family: "Open Sans", sans-serif
  text-align: center
  transition: .15s ease-out background-color
  border: 1px solid darken($primary-color, 5%)
  outline: none
  border-radius: $borderRadius
  margin-top: 1rem
  &:hover
    background-color: darken($primary-color, 5%)
  &__title
    width: 100%
    line-height: 3.2rem
    text-align: center
    white-space: nowrap
    font-weight: bold
    font-size: 1.2rem
    text-transform: uppercase
    padding: 1rem
</style>



