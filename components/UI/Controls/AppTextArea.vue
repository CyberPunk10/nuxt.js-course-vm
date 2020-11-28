<template>
  <div class="control text-field">
    <label><slot/></label>
    <textarea
      class="text-field__input"
      :value="value"
      @input="$emit('textarea', $event.target.value)"
    >
    </textarea>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="sass" scoped>
.text-field
  position: relative
  max-width: 32rem
  margin-bottom: 1rem

  &_width-sm
    max-width: 26.6rem

  &_margin-bottom-5
    margin-bottom: .5rem

  &__input
    @include text-field-and-drop-btn

    &::-webkit-input-placeholder
      color: $color-dark-shade-25
    &::-moz-placeholder
      color: $color-dark-shade-25

    &:hover, &:focus
      border: 1px solid $color-dark-shade-40

  label
    display: inline-block
    margin-bottom: .7rem
    margin-left: .3rem
    
  &__icon
    position: absolute
    cursor: pointer
    @include isFlex
    height: calc(100% - 2px)
    width: 4.3rem
    background-color: #fff
    border-radius: 5px
    top: 1px
    bottom: 0
    right: 1px
    @include text-linear-gradient


</style>
