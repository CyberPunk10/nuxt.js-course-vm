<template>
  <div class="progress-bar">
    <div class="filled-bar" :style="{ transform: `translate3d(-${100-value}%, 0, 0)` }"></div>
  </div>
</template>

<script>
export default {
  props: ['value']
}
</script>

<style lang="sass" scoped>
.progress-bar
  position: fixed
  top: $header-height
  height: 7px
  width: calc(100% + 3rem) // поправить (.container)
  display: flex
  justify-content: center
  align-items: center
  overflow: hidden
  z-index: 10000
  background-color: $color-green
  transition: $transitionSidebar

  // для
  margin-left: -1.5rem
  // // max-width: $desktopWidth
  // transition: padding .4s ease, width .4s ease, height .4s ease // надо закомментить чтобы переходы между страницами были не плавными
  // @media screen and (min-width: $phoneWidth)
  //   padding: 1.5rem
  // @media screen and (min-width: $tableWidth)
  //   padding: 2rem
  // @media screen and (min-width: $smDesktopWidth)
  //   padding: 3rem
  // @media screen and (min-width: $desktopWidth)
  //   padding: 4rem

.filled-bar
  position: absolute
  top: 0
  left: 0
  z-index: 2
  height: 100%
  width: 100%
  background-color: $color-purple

</style>
