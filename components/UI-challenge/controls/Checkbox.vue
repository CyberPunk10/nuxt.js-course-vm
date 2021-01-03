<template>
  <li v-if="tagLi" class="checkbox-btn">
    <input type="checkbox" class="checkbox-btn__input" :id="id" :checked="isChecked">
    <label :for="id"
      class="checkbox-btn__label"
      :class="{'checkbox-btn__label_title': description}"
    >{{title}}</label>
    <p v-if="description" class="checkbox-btn__description"><slot/></p>
  </li>

  <div v-else class="checkbox-btn">
    <input type="checkbox" class="checkbox-btn__input" :id="id" :checked="isChecked">
    <label :for="id"
      class="checkbox-btn__label"
      :class="{'checkbox-btn__label_title': description}"
    >{{title}}</label>
    <p v-if="description" class="checkbox-btn__description"><slot/></p>
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
    tagLi: {
      type: Boolean,
      default: false
    },
    description: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="sass" scoped>
.checkbox-btn
  // max-width: 32rem
  padding: .3rem 0 .32rem

  &__input
    position: absolute
    left: -9999px

    &:checked + .checkbox-btn__label:after
      opacity: 1

    &:not(:checked) + .checkbox-btn__label:after
      opacity: 0

    &:checked + .checkbox-btn__label:before
      border-color: $theme-color-yellow

    &:checked + .checkbox-btn__label
      color: #bbb


  &__label
    color: #999
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
      top: .4rem
      width: 1.6rem
      height: 1.6rem
      background-color: #403a3a
      box-sizing: border-box
      border: 1px solid #444
      border-radius: 4px

    &:after
      content: ""
      position: absolute
      left: .4rem
      top: .7rem
      width: .8rem
      height: .6rem
      box-sizing: border-box
      border-radius: 1px
      border-left: 2px solid $theme-color-yellow
      border-bottom: 2px solid $theme-color-yellow

      // -webkit-border-image: $gradient-linear-purple
      // -moz-border-image: $gradient-linear-purple
      // -o-border-image: $gradient-linear-purple
      // -ms-border-image: $gradient-linear-purple
      // border-image: $gradient-linear-purple

      -webkit-transform: rotate(-45deg)
      -moz-transform: rotate(-45deg)
      -o-transform: rotate(-45deg)
      -ms-transform: rotate(-45deg)
      transform: rotate(-45deg)

    &_title
      font-weight: bold
      color: #999

  &__description
    padding: .3rem 0 .1rem 3rem
    font-size: 1.2rem
    color: #999
    user-select: none         // делает текст невыделяемым
    line-height: 1.4rem







// https://habr.com/ru/post/489476/
// https://itchief.ru/html-and-css/styling-checkbox-and-radio

</style>
