<template>
  <div class="sidenav__nav-item">
    <NuxtLink :to="link.url">
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
.sidenav__nav-item
  position: relative
  overflow: hidden
  margin-bottom: 2px
  padding-left: $sidebar-marginItem
  margin-right: $sidebar-marginItem

  &>a
    display: grid
    grid: minmax($sidebar-heightItem, max-content ) / calc(#{$sidebarWidthIcon} - 2 * #{$sidebar-marginItem}) minmax(auto, calc(100% - #{$sidebar-heightItem})) // row/col
    width: 100%
    border-radius: $borderRadius
    transition: $transitionDefault
    &:hover
      background-color: $color-light-green2
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
      &:hover
        color: rgba(0,0,0,.8)

    &.nuxt-link-exact-active
      background-color: rgba(140, 79, 232, 0.05)
      i, span
        color: $theme-color-main
      &:before
        position: absolute
        background-color: $theme-color-main
        content: ''
        top: 0
        left: 0
        bottom: 0
        width: 3px
        border-top-right-radius: 2px
        border-bottom-right-radius: 2px

</style>
