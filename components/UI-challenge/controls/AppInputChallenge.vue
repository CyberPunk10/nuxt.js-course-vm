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
    <span
      class="text-field__error-msg"
      :class="{invalid: inputData.invalid.emptyField || inputData.invalid.incorrect}"
    >
      {{
        inputData.invalid.emptyField ? messageEmpty
        : (inputData.invalid.incorrect ? messageIncorrect : false)
      }}
    </span>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,

  data () {
    return {
      valueInput: '',
      messageEmpty: `Поле ${this.inputData.title} не должно быть пустым`,
      messageIncorrect: `Введите корректный ${this.inputData.title}`
    }
  },

  props: {
    value: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    inputData: Object,
  },

  watch: {
    valueInput (value) {
      this.$emit('func', value)
    }
  }

}
</script>

<style lang="sass">
.text-field
  position: relative
  margin-bottom: 1.5rem
  color: #606266

  &__input
    // @include text-field-and-drop-btn
    font-size: 1.6rem
    padding: .5rem 1rem
    border: 1px solid rgb(216,218,220)
    border-radius: $borderRadius
    background-color: lighten($color-bg-body, 1%)
    width: 100%
    font-family: "Montserrat Alternates", Avenir, Helvetica, Arial, sans-serif
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji
    color: $color-dark-shade-75
    outline: none
    box-sizing: border-box
    transition: 0.2s ease all

    &::-webkit-input-placeholder
      color: $color-dark-shade-25
    &::-moz-placeholder
      color: $color-dark-shade-25

    &:hover
      border: 1px solid $color-dark-shade-25
      background-color: #fff
    &:focus
      border: 1px solid $color-dark-shade-30
      background-color: #fff

  &.invalid
    // input
    //   border-color: red
    span
      opacity: 1
      visibility: visible

  // &__error-msg
  //   // color: $color-red
  //   font-size: 1.2rem
  //   opacity: 0
  //   visibility: hidden
  //   &.invalid
  //     opacity: 1
  //     visibility: visible

  label
    display: inline-block
    margin-bottom: .5rem
    margin-left: .3rem
    font-size: 1.4rem
    user-select: none

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

.text-field.label_bold
  label
    font-weight: bold




$color-red: #ff6163
.text-field
  max-width: 132rem
  min-width: 26rem
  width: calc(100% - 2rem)
  // margin: 1rem
  &__title
    padding-bottom: 2.5rem
    user-select: none
    font-family: "Open Sans", sans-serif
    white-space: nowrap
    font-weight: bold
    font-size: 1.2rem
    text-transform: uppercase
  &__input
    background: #FFFFFF
    border: none
    // border-bottom: 1px solid $color-dark-shade-10
    padding-bottom: .4rem
    width: 100%
    font-size: 1.8rem
    font-family: "Montserrat Alternates", Avenir, Helvetica, Arial, sans-serif
    color: $color-dark-shade-75
    outline: none
    box-sizing: border-box
    transition: 0.2s ease all
    &::-webkit-input-placeholder
      color: $color-dark-shade-25
    &::-moz-placeholder
      color: $color-dark-shade-25
    &:hover, &:focus
      // border-bottom: 1px solid #fff
  &__error-msg
    color: $color-red
    font-size: 1.2rem
    opacity: 0
    visibility: hidden
    &.invalid
      opacity: 1
      visibility: visible

.div-input
  position: relative
  outline: none
  border-bottom: 1px solid $color-dark-shade-10

  line-height: 30px
  font-family: "Open Sans","Helvetica Neue",Helvetica,Arial,sans-serif
  font-size: 18px
  color: #111
  &:focus
    border-bottom: 1px solid #fff
</style>
