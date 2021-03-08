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
  height: 2px
  width: 100%
  display: flex
  justify-content: center
  align-items: center
  overflow: hidden
  z-index: 999
  // background-color: $color-green
  transition: $transitionSidebar

.filled-bar
  position: absolute
  top: 0
  left: 0
  z-index: 2
  height: 100%
  width: 100%
  background-color: $color-purple

</style>
