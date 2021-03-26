<template>
  <!-- challenges prod -->
  <div class="sidenav__nav-item-wrap"
    v-if="isChallenges && link.isChallenges"
  >
    <NuxtLink :to="link.url" class="sidenav__nav-item">
      <i v-if="link.icon" :class="link.icon"></i>
      <span class="sidenav__nav-item-text">{{ link.name }}</span>
    </NuxtLink>
  </div>

  <!-- challenges dev -->
  <div class="sidenav__nav-item-wrap"
    v-else-if="isDeveloper && (link.isDev || link.isChallenges)"
  >
    <NuxtLink :to="link.url" class="sidenav__nav-item">
      <i v-if="link.icon" :class="link.icon"></i>
      <span class="sidenav__nav-item-text">{{ link.name }}</span>
    </NuxtLink>
  </div>

  <!-- mockup admin-->
  <div class="sidenav__nav-item-wrap"
    v-else-if="isMockupAdmin && (link.isMockup || link.isMockupAdmin)"
  >
    <NuxtLink :to="link.url" class="sidenav__nav-item">
      <i v-if="link.icon" :class="link.icon"></i>
      <span class="sidenav__nav-item-text">{{ link.name }}</span>
    </NuxtLink>
  </div>

  <!-- mockup (без авторизации) -->
  <div class="sidenav__nav-item-wrap"
    v-else-if="!isChallenges && !isDeveloper && !isMockupAdmin && link.isMockup"
  >
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
  },
  computed: {
    isDeveloper() {
      return this.$store.getters['auth/isDeveloper']
    },
    isChallenges() {
      return this.$store.getters['auth/isChallenges']
    },
    isMockupAdmin() {
      return this.$store.getters['auth/isMockupAdmin']
    }
  },
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
      background-color: $theme-color-main-lighten-hover
      &>i,
      &>span
        color: $theme-color-main !important
      &>span
        padding-left: .5rem

    &>i
      text-align: center
      font-size: 1.6rem
      line-height: $sidebar-heightItem
      height: $sidebar-heightItem
      color: $color-text-grey
      border-radius: $borderRadius
      transition: $transitionDefaultHover

    &>span
      line-height: $sidebar-heightItem
      color: rgba(0,0,0,.7)
      color: $color-text-grey-dark
      transition: $transitionDefaultHover

    &.nuxt-link-exact-active
      background-color: $theme-color-main-lighten-active
      i, span
        color: $theme-color-main !important
      &:before
        position: absolute
        background-color: $theme-color-main-dark
        border: 1px solid $theme-color-main
        content: ''
        top: 0
        left: 0
        bottom: 0
        width: 4px
        // border-top-right-radius: 2px
        // border-bottom-right-radius: 2px
        border-radius: 2px

// show/hover sidebar
.layout-wrapper
  &[data-sidebar-active="true"] // if show sidebar
    .sidenav__nav-item-wrap>.sidenav__nav-item
      &>i,
      &>span
        color: $color-text-grey-dark


  &[data-sidebar-active="false"] // if hover sidebar
    .sidebar
      @media(hover: hover) and (pointer: fine) // https://webformyself.com/css-hover-na-sensornyx-ekranax/ (решение на чистом CSS для :hover на сенсорных экранах)
        &:hover
          .sidenav__nav-item
            &>i,
            &>span
              color: $color-text-grey-dark

</style>
