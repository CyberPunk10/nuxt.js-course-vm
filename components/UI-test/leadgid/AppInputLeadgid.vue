<template>
  <div class="control text-field">
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
        : ((v.$dirty && !v.minLength) ? messageIncorrect
        : ((v.$dirty && !v.maxLength) ? messageIncorrect
        : ((v.$dirty && !v.helpers) ? messageIncorrect : '')))
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
      if (!this.v.minLength) {
        return `${this.inputData.title} должен быть не менее ${this.v.$params.minLength.min} символов, сейчас: ${this.value.length}`
      }
      if (!this.v.maxLength) {
        return `${this.inputData.title} должен быть не более ${this.v.$params.maxLength.max} символов, сейчас: ${this.value.length}`
      }
      if (!this.v.helpers) {
        return 'Используйте кириллицу или латиницу'
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
  max-width: 343px
  margin-bottom: rem-increase(1rem)
  color: #606266

  &__input
    height: 50px
    width: 100%
    background-color: $gray-01
    font-size: 16px
    padding: rem-increase(1rem) rem-increase(1rem) 15px
    border: 1px solid #E8E8E8
    border-radius: 8px
    color: #444
    outline: none
    box-sizing: border-box
    transition: $transitionDefaultHover
    &::-webkit-input-placeholder
      color: $gray-03
    &::-moz-placeholder
      color: $gray-03

    &:hover
      border: 1px solid $gray-03
    &:focus
      border: 1px solid $gray-03
      background-color: #fff

  &.invalid
    margin-bottom: rem-increase(.5rem)
    input
      border-color: $red

  &__error-msg
    font-size: 12px
    color: $red
</style>
