<template >
  <button class="button">
    <span class="button__title">
      <slot />
    </span>
  </button>
</template>

<style lang="sass">
.wrap-test-leadgid
  .button
    cursor: pointer
    user-select: none
    width: 100%
    height: 5rem
    color: #fff
    background-color: $green-primary
    text-align: center
    transition: .15s ease-out background-color
    border: none
    outline: none
    border-radius: 25px
    margin-top: rem-increase(1rem)
    &:hover
      background-color: darken($green-primary, 5%)
    &__title
      width: 100%
      line-height: rem-increase(3.2rem)
      text-align: center
      white-space: nowrap
      font-size: rem-increase(1rem)
      padding: rem-increase(1rem)
</style>



