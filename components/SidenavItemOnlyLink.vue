<template>
  <div class="sidenav__nav-item-wrap">
    <NuxtLink :to="link.url" class="sidenav__nav-item">
      <i v-if="link.icon" :class="link.icon"></i>
      <span class="sidenav__nav-item-text">{{ link.name }}</span>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    link: {
      type: Object
    }
  }
}
</script>

<style lang="sass">
.sidenav__nav-item-wrap
  position: relative
  overflow: hidden
  margin-bottom: 2px
  padding-left: $sidebar-marginItem
  margin-right: $sidebar-marginItem

  &>.sidenav__nav-item
    display: grid
    grid: minmax($sidebar-heightItem, max-content ) / calc(#{$sidebarWidthIcon} - 2 * #{$sidebar-marginItem}) minmax(auto, calc(100% - #{$sidebar-heightItem})) // row/col
    width: 100%
    border-radius: $borderRadius
    transition: $transitionDefaultHover
    &:hover
      background-color: rgba(140, 79, 232, 0.03)
      &>i,
      &>span
        color: $theme-color-main

    &>i
      text-align: center
      font-size: 1.6rem
      line-height: $sidebar-heightItem
      height: $sidebar-heightItem
      color: $color-text-grey
      border-radius: $borderRadius
      transition: $transitionDefault

    &>span
      line-height: $sidebar-heightItem
      color: rgba(0,0,0,.7)
      transition: $transitionDefault

    &.nuxt-link-exact-active
      background-color: rgba(140, 79, 232, 0.08)
      i, span
        color: $theme-color-main
      &:before
        position: absolute
        background-color: rgba(140, 79, 232, 0.8)
        border: 1px solid $theme-color-main
        content: ''
        top: 0
        left: 0
        bottom: 0
        width: 3px
        // border-top-right-radius: 2px
        // border-bottom-right-radius: 2px
        border-radius: 10px

</style>

<style>
.jkj {
  color: rgb(119, 126, 197)
}
</style>
