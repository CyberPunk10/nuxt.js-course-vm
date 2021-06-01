<template>
  <div class="control text-field">
    <label :class="{required: inputData.required}">
      <slot />
    </label>
    <input
      class="text-field__input"
      v-bind="$attrs"
      :value="value"
      @input="$emit('input', $event.target.value)"
      ref="input"
    >
    <span
      v-if="v.$error"
      class="text-field__error-msg"
    >
      {{
        (v.$dirty && !v.required) ? messageEmpty
        : ((v.$dirty && !v.minLength) ? messageIncorrect : '')
      }}
    </span>
  </div>
</template>

<script>
export default {
  inheritAttrs: false, // чтобы КОРНЕВОЙ элемент компонента НЕ наследовал атрибуты (наследовать будет элемент с v-bind="$attrs")

  props: {
    value: {
      type: String,
      default: ''
    },
    v: {
      type: Object,
      required: true
    },
    inputData: {
      type: Object,
      default() { return {} },
    },
  },

  data() {
    return {
      messageEmpty: `Введите ${this.inputData.title}`,
    }
  },

  computed: {
    name: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit("input", value)
      }
    },
    messageIncorrect() {
      // если есть валидация по длине, то выводим сколько символов необходимо
      if ('minLength' in this.v) {
        return `${this.inputData.title} должен быть не менее ${this.v.$params.minLength.min} символов, сейчас: ${this.value.length}`
      }
      // если есть валидация по email, то выводим требования к написанию почты
      if ('email' in this.v) {
        return `${this.inputData.title} должен содержать символ "@". Например myemail@ya.ru`
      }
      return `Введите корректный ${this.inputData.title}`
    }
  },

  mounted() {
    // добавляем автофокус, так как автоматом он добавляется только при загрузке страницы (а нам нужно и при переходе между страницами)
    // (выставляем задержку, чтобы всё успело зарендериться)
    this.$nextTick(function () {
      if (this.$refs.input.getAttribute('autofocus')) this.$refs.input.focus()
    })
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
    padding: .5rem 1rem .7rem
    border: 1px solid rgb(216,218,220)
    border-radius: $borderRadius
    background-color: #fefefe
    width: 100%
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji
    letter-spacing: .3px
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
    margin-bottom: .5rem
    input
      border-color: $color-red

  label
    display: inline-block
    margin-bottom: .5rem
    margin-left: .3rem
    font-size: 1.4rem
    user-select: none
  label.required
    &:after
      padding-left: 5px
      color: $color-red
      content: "*"

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

  &__error-msg
    color: $color-red
    font-size: 1.2rem
    margin-left: .3rem

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

// label bold
.text-field.label_bold
  label
    font-weight: bold
</style>
