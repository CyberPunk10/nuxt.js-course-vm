<template>
  <div class="control text-field">
    <label><slot/></label>
    <input
      class="text-field__input"
      v-bind="$attrs"
      :value="value"
      :type="type"
      @input="$emit('input', $event.target.value)"
    >
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    value: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    }
  }
}
</script>

<style lang="sass">
.text-field
  position: relative
  margin-bottom: 1.5rem
  color: #606266

  // &_width-sm
  //   max-width: 26.6rem

  &__input
    // @include text-field-and-drop-btn
    font-size: 1.6rem
    padding: .5rem 1rem
    border: 1px solid red
    border-radius: $borderRadius

    &::-webkit-input-placeholder
      color: $color-dark-shade-25
    &::-moz-placeholder
      color: $color-dark-shade-25

    &:hover
      border: 1px solid $color-dark-shade-10
    &:focus
      border: 1px solid $light-color

  label
    display: inline-block
    margin-bottom: .5rem
    margin-left: .3rem
    font-size: 1.4rem

  // &__icon
  //   position: absolute
  //   cursor: pointer
  //   @include isFlex
  //   height: calc(100% - 2px)
  //   width: 4.3rem
  //   background-color: #fff
  //   border-radius: 5px
  //   top: 1px
  //   bottom: 0
  //   right: 1px
  //   @include text-linear-gradient

// label left
.text-field.label-left
  $width-label: 12rem
  display: flex
  max-width: calc(100% + #{$width-label})
  label
    display: flex
    justify-content: flex-end
    align-items: center
    padding-bottom: .2rem
    margin: 0 1.2rem
    width: $width-label
    text-align: right
  .text-field__input
    width: calc(100% - #{$width-label})

</style>
