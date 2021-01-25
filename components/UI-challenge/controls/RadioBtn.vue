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
  $sizeCircle: 1.6rem
  $sizeCircleInset: calc(#{$sizeCircle} / 100 * 50)

  // max-width: 32rem
  padding: .3rem 0
  // display: inline-block
  &__input
    position: absolute
    left: -9999px

    &:checked + .radio-btn__label:after
      opacity: 1

    &:not(:checked) + .radio-btn__label:after
      opacity: 0

    &:checked + .radio-btn__label:before
      border-color: $theme-color-yellow

    &:checked + .radio-btn__label
      color: #bbb

  &__label
    color: #999
    position: relative
    cursor: pointer
    display: inline-block
    line-height: 1.8rem
    padding: .3rem 0 .3rem 2.5rem
    user-select: none         // делает текст невыделяемым

    &:before
      content: ""
      position: absolute
      left: 0
      top: .4rem
      width: $sizeCircle
      height: $sizeCircle
      background-color: #403a3a
      box-sizing: border-box
      border: 1px solid #444
      border-radius: 50%

    &:after
      content: ""
      position: absolute
      left: calc(#{$sizeCircleInset} / 2)
      top: calc(#{$sizeCircleInset} / 2 + .4rem)
      width: calc(#{$sizeCircle} - #{$sizeCircleInset})
      height: calc(#{$sizeCircle} - #{$sizeCircleInset})
      border-radius: 50%
      background-color: $theme-color-yellow
      // transition: all .2s ease

    &_title
      font-weight: bold
      color: #999

  &__description
    padding: .2rem 0 .2rem 3rem
    font-size: 1.2rem
    color: #999
    user-select: none         // делает текст невыделяемым




// https://habr.com/ru/post/489476/
// https://itchief.ru/html-and-css/styling-radio-and-radio
</style>
