<template>
  <div class="text-field">
    <h3 class="text-field__title">{{ TextArea.title }}</h3>

    <div
      class="div-input"
      contenteditable
      :autofocus="TextArea.autofocus"
    >
    </div>

    <span
      class="text-field__error-msg"
      :class="{invalid: TextArea.invalid.emptyField || TextArea.invalid.incorrect}">
      {{
        TextArea.invalid.emptyField ? messageEmpty
        : (TextArea.invalid.incorrect ? messageIncorrect : false)
      }}
    </span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      valueTextArea: '',
      messageEmpty: `Поле ${this.TextArea.title} не должно быть пустым`,
      messageIncorrect: `Введите корректный ${this.TextArea.title}`
    }
  },
  computed: { },
  props: ['TextArea'],
  // watch: {
  //   valueTextArea (value) {
  //     this.$emit('func', value, this.TextArea.title)
  //   }
  // }
}
</script>

<style lang="sass" scoped>
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
