<template>
  <div class="radio-btn">
    <input type="radio" class="radio-btn__input" :id="id" :name="name" :checked="isChecked">
    <label :for="id" class="radio-btn__label" :class="{'radio-btn__label_title': description}">{{title}}</label>
    <p v-if="description" class="radio-btn__description"><slot/></p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    isChecked: {
      type: Boolean,
      default: false
    },
    id: {
      type: String,
      required: true
    },
    name: {
      type: String
    },
    description: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="sass">
.radio-btn
  $sizeCircle: 2rem
  $sizeCircleInset: calc(#{$sizeCircle} / 100 * 40)

  max-width: 32rem
  padding: .3rem 0
  display: inline-block
  &__input
    position: absolute
    left: -9999px

    &:checked + .radio-btn__label:after
      opacity: 1

    &:not(:checked) + .radio-btn__label:after
      opacity: 0

    &:checked + .radio-btn__label:before
      border-color: $color-purple

    &:checked + .radio-btn__label
      color: $color-dark-shade-75

  &__label
    color: $color-dark-shade-50
    position: relative
    cursor: pointer
    display: inline-block
    line-height: 1.8rem
    padding: .3rem 0 .3rem 3rem
    user-select: none         // делает текст невыделяемым

    &:before
      content: ""
      position: absolute
      left: 0
      top: .2rem
      width: $sizeCircle
      height: $sizeCircle
      background-color: #ffffff
      box-sizing: border-box
      border: 1px solid $color-dark-shade-25
      border-radius: 50%

    &:after
      content: ""
      position: absolute
      // left: .4rem
      // top: .6rem
      // width: 1.2rem
      // height: 1.2rem
      left: calc(#{$sizeCircleInset} / 2)
      top: calc(#{$sizeCircleInset} / 2 + .2rem)
      width: calc(#{$sizeCircle} - #{$sizeCircleInset})
      height: calc(#{$sizeCircle} - #{$sizeCircleInset})
      border-radius: 50%
      @include linear-gradient

    &_title
      font-weight: bold
      color: $color-dark-shade-75

  &__description
    padding: .2rem 0 .2rem 3rem
    font-size: 1.2rem
    color: $color-dark-shade-50
    user-select: none         // делает текст невыделяемым




// https://habr.com/ru/post/489476/
// https://itchief.ru/html-and-css/styling-radio-and-radio
</style>
