<template>
  <div
    v-on:click="handleClickTeleportMenu"
  >
    <div class="underlay"></div>
    <div class="teleport-menu">
      <ul>
        <li><a href="/">SSR блог</a></li>
        <li><a href="/admin">SSR блог админка</a></li>
        <li><a href="/dreams">Dreams</a></li>
        <li><a href="/landing">Моноколеса</a></li>
      </ul>
      <button class="teleport-menu__button">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="block h-5 fill-current transition-colors duration-300 ease-linear">
          <path d="M231.6 256l130.1-130.1c4.7-4.7 4.7-12.3 0-17l-22.6-22.6c-4.7-4.7-12.3-4.7-17 0L192 216.4 61.9 86.3c-4.7-4.7-12.3-4.7-17 0l-22.6 22.6c-4.7 4.7-4.7 12.3 0 17L152.4 256 22.3 386.1c-4.7 4.7-4.7 12.3 0 17l22.6 22.6c4.7 4.7 12.3 4.7 17 0L192 295.6l130.1 130.1c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17L231.6 256z"></path>
        </svg>
        <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="block text-nuxt-gray dark:text-dark-onSurfaceSecondary stroke-current transition-colors duration-300 ease-linear" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
          <line x1="8" x2="21" y1="6" y2="6"></line>
          <line x1="8" x2="21" y1="12" y2="12"></line>
          <line x1="8" x2="21" y1="18" y2="18"></line>
          <line x1="3" x2="3" y1="6" y2="6"></line>
          <line x1="3" x2="3" y1="12" y2="12"></line>
          <line x1="3" x2="3" y1="18" y2="18"></line>
        </svg> -->
      </button>
      <button style="top: 7rem" class="teleport-menu__button teleport-menu__button_target">
        B
      </button>
      <button style="top: 11rem" class="teleport-menu__button teleport-menu__button_target">
        D
      </button>
      <button style="top: 15rem" class="teleport-menu__button teleport-menu__button_target">
        R
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleClickTeleportMenu: function(event) {
      console.log(event.target.className)
      if (event.target.className === 'underlay') {
        event.target.classList.toggle('underlay')
      } else if (event.target.className === 'teleport-menu__button') {
        event.target.classList.toggle('underlay')
      }

    }
  }
}
</script>

<style lang="sass">
.underlay
  position: fixed
  top: 0
  width: 100%
  height: 100%
  opacity: 0.4
  opacity: 0
  background-color: #333

.teleport-menu
  position: fixed
  z-index: 9999
  top: $height-header
  left: -21rem
  width: 21rem
  max-height: calc(100vh - #{$height-header})
  background-color: rgb(248,250,252)
  border-top: 1px solid rgb(226, 232, 240)
  border-right: 1px solid rgb(226, 232, 240)
  border-bottom: 1px solid rgb(226, 232, 240)
  border-top-right-radius: 2rem
  border-bottom-right-radius: 2rem
  // box-shadow: 4px 2px 4px rgba(0,0,0,.101562)
  transition: all .2s linear

  ul
    padding: 1.6rem
  li
    padding: .8rem 0
  &__button
    position: absolute
    z-index: 9999
    top: 2rem
    right: -4rem
    height: 4rem
    width: 4rem
    padding-top: 0.4rem
    background-color: rgb(248,250,252)
    border: 1px solid rgb(226, 232, 240)
    border-left: none
    border-top-right-radius: 2rem
    border-bottom-right-radius: 2rem
    box-shadow: 4px 2px 4px rgba(0,0,0,.101562)
    // border: none
    // background-color: transparent
    svg
      height: 2rem
      width: 1.5rem
      fill: rgb(47, 73, 94)
    &_target
      border: none
      right: -3.5rem
      height: 3rem
      width: 3rem
      line-height: 3rem
      padding: 0
      text-align: center
      background-color: transparent
      font-weight: 700
      // padding-top: 0.4rem

// hide
.underlay + .teleport-menu
  left: 0
  &__button
    box-shadow: none

</style>
