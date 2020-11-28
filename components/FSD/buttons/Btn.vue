<template>
  <!-- mixin btn(options)
  -
    var btnClassName = "btn"
    var btn__titleClassName = "btn__title"
    var deactive = options.deactive ? " btn_deactive" : ""
    var title = options.title
    var marginTop = options.marginTop ? ` btn_margin-top-${options.marginTop}` : ''   //- "20"
    var marginBottom = options.marginBottom ? ` btn_margin-bottom-${options.marginBottom}` : ''   //- "30"
    var paddingRight = options.paddingRight ? ` btn_padding-right-${options.paddingRight}` : ''   //- "3"


  case options.varBtn
    when "fill"
      - btnClassName += " btn-fill"
    when "border"
      - btnClassName += " btn-border"
    when "minimalism"
      - btnClassName += " btn-minimalism"

  case options.maxWidthBtn
    when "320"
      - btnClassName += " btn_max-width-320"
    when "200"
      - btnClassName += " btn_max-width-200"

  case options.minWidthBtn
    when "250"
      - btnClassName += " btn_min-width-250"

  -
    btnClassName += deactive + marginTop + marginBottom + paddingRight
    btn__titleClassName += paddingRight

  if (options.varBtn == "minimalism")
    a(class = btnClassName)= title

  else
    <div class="btnClassName"></div>
      <div class="btn__bg"></div>
      <span class="btn__titleClassName">title</span>
      if options.isClickable
        <i class="btn__icon material-icons">arrow_forward</i> -->

<div class="div">
  <div class="btn btn-fill">
    <div class="btn__bg"></div>
    <span class="btn__title"></span>
  </div>
</div>

</template>


<style lang="sass" scoped>

$border-radius: 2.2rem

// кнопка (общие свойства)
.btn
  cursor: pointer
  user-select: none
  position: relative
  width: 100%
  max-width: 9.9rem
  height: 4.4rem

  .btn__bg,
  .btn__bg:before
    position: absolute
    content: ""
    top: 0
    right: 0
    bottom: 0
    left: 0
    border-radius: $border-radius

  &__title
    position: absolute
    content: ""
    line-height: 4.4rem
    text-align: center
    width: 100%
    // top: 50%
    // left: 50%
    // transform: translate(-50%, -50%)
    white-space: nowrap
    @include font-how-h3($color: $color-purple)
    padding-bottom: .1rem

  // кнопка с заливкой
  &-fill
    .btn__bg
      @include linear-gradient

    .btn__title
      color: #fff

  // кнопка с бордером
  &-border
    .btn__bg
      @include linear-gradient
      &:before
        margin: 2px
        width: calc(100% - 4px)
        height: calc(100% - 4px)
        background: #fff

  // кнопка без заливки и бордера
  &-minimalism
    position: static
    width: auto
    max-width: none
    height: 1.6rem
    line-height: 1.6rem
    padding-left: 1px
    text-align: left
    @include font-how-h3($color: $color-purple)

  // модификатор: deactive
  &-fill.btn_deactive
    opacity: .5

  &-border.btn_deactive
    .btn__bg
      opacity: .5

  &-minimalism.btn_deactive
    color: $color-dark-shade-50

  // модификатор: width
  &_max-width-320
    max-width: 32rem

  &_min-width-250
    min-width: 25rem

  // добавление стрелки к кнопке
  &__icon
    position: absolute
    cursor: pointer
    @include isFlex
    height: calc(100% - 2px)
    width: 4.3rem
    @include linear-gradient
    border-radius: $border-radius
    top: 1px
    bottom: 0
    right: 1px
    color: #fff

  // модификатор: margin
  &_margin-top-20
    margin-top: 2rem

  &_margin-bottom-30
    margin-bottom: 3rem

  // модификатор: padding-right
  &_padding-right-3
    padding-right: .3rem

</style>
