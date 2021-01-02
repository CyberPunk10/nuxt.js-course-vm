<template>
  <!-- mixin checkbox-btn(options)
  -
    var title = options.title || "label for checkbox"
    var isChecked = options.checked || false          // checked: true
    var id = options.id || false
    var tag = options.tag || false

    // for checkbox-btn__label
    var classNameLabel = "checkbox-btn__label"
    var description = options.description || false
    classNameLabel += options.description ? " checkbox-btn__label_title" : ""

    // for checkbox-btn__description
    var classNameDescription = "checkbox-btn__description"


  if tag
    li.checkbox-btn
      input(type="checkbox", class="checkbox-btn__input", id = id checked = isChecked)
      label(class = classNameLabel, for = id) !{title}
      if description
        p.checkbox-btn__description= description
  else
    .checkbox-btn
      input(type="checkbox", class="checkbox-btn__input", id = id checked = isChecked)
      label(class = classNameLabel, for = id) !{title}
      if description
        p.checkbox-btn__description !{description} -->

  <div class="checkbox-btn">
    <input type="checkbox" class="checkbox-btn__input" id="test">
    <label for="test" class="checkbox-btn__label">slot</label>
  </div>

</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>
.checkbox-btn
  max-width: 32rem
  padding: .3rem 0 .32rem

  &__input
    position: absolute
    left: -9999px

    &:checked + .checkbox-btn__label:after
      opacity: 1

    &:not(:checked) + .checkbox-btn__label:after
      opacity: 0

    &:checked + .checkbox-btn__label:before
      border-color: $color-purple

    &:checked + .checkbox-btn__label
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
      width: 2rem
      height: 2rem
      background-color: #ffffff
      box-sizing: border-box
      border: 1px solid $color-dark-shade-25
      border-radius: 4px

    &:after
      content: ""
      position: absolute
      left: .6rem
      top: .8rem
      width: .8rem
      height: .6rem
      box-sizing: border-box
      border-radius: 1px
      border-left: 2px solid $color-purple
      border-bottom: 2px solid $color-purple

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
      color: $color-dark-shade-75

  &__description
    padding: .3rem 0 .1rem 3rem
    font-size: 1.2rem
    color: $color-dark-shade-50
    user-select: none         // делает текст невыделяемым
    line-height: 1.4rem







// https://habr.com/ru/post/489476/
// https://itchief.ru/html-and-css/styling-checkbox-and-radio

</style>
