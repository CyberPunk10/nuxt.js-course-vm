<template>
  <div
    class="teleport-menu-wrap"
    v-on:click="handleClickTeleportMenu"
  >
    <div class="underlay"></div>
    <div class="teleport-menu">
      <ul>
        <li><a href="/">SSR блог</a></li>
        <li><a href="/admin">SSR блог админка</a></li>
        <li><a href="/dreams">Dreams</a></li>
        <li><a href="/landing">Моноколеса</a></li>
        <li>Другие проекты</li>
        <li><a href="/landing">Курс Exel</a></li>
      </ul>
      <div class="teleport-menu-btns-wrap">
        <button data-tmbtn="teleport-menu-btn" class="teleport-menu__button">
          <svg data-tmbtn="teleport-menu-btn" class="teleport-menu__svg-close" width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path data-tmbtn="teleport-menu-btn" d="M231.6 256l130.1-130.1c4.7-4.7 4.7-12.3 0-17l-22.6-22.6c-4.7-4.7-12.3-4.7-17 0L192 216.4 61.9 86.3c-4.7-4.7-12.3-4.7-17 0l-22.6 22.6c-4.7 4.7-4.7 12.3 0 17L152.4 256 22.3 386.1c-4.7 4.7-4.7 12.3 0 17l22.6 22.6c4.7 4.7 12.3 4.7 17 0L192 295.6l130.1 130.1c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17L231.6 256z"></path>
          </svg>
          <svg data-tmbtn="teleport-menu-btn" class="teleport-menu__svg-list" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
            <line data-tmbtn="teleport-menu-btn" x1="8" x2="21" y1="6" y2="6"></line>
            <line data-tmbtn="teleport-menu-btn" x1="8" x2="21" y1="12" y2="12"></line>
            <line data-tmbtn="teleport-menu-btn" x1="8" x2="21" y1="18" y2="18"></line>
            <line data-tmbtn="teleport-menu-btn" x1="3" x2="3" y1="6" y2="6"></line>
            <line data-tmbtn="teleport-menu-btn" x1="3" x2="3" y1="12" y2="12"></line>
            <line data-tmbtn="teleport-menu-btn" x1="3" x2="3" y1="18" y2="18"></line>
          </svg>
        </button>
        <button class="teleport-menu__button teleport-menu__button_target top-position-1">
          <a href="/admin">A</a>
        </button>
        <button class="teleport-menu__button teleport-menu__button_target top-position-2">
          <a href="/dreams">D</a>
        </button>
        <button class="teleport-menu__button teleport-menu__button_target top-position-3">
          <a href="/landing">R</a>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    handleClickTeleportMenu: function(event) {
      console.log(event.target.dataset.tmbtn)
      const teleportMenuWrap = document.querySelector('.teleport-menu-wrap')
      const underlay = teleportMenuWrap.querySelector('.underlay')
      if (event.target.className === 'underlay') {
        // event.target.classList.toggle('underlay')
        // underlay.remove()
        teleportMenuWrap.classList.toggle('active')
      } else if (event.target.dataset.tmbtn === 'teleport-menu-btn') {
        // if (underlay) {
        // underlay.remove()
        // } else {
        //   teleportMenuWrap.insertAdjacentHTML('afterbegin', '<div class="underlay"></div>')
        // }
        teleportMenuWrap.classList.toggle('active')
      }
    }
  }
}
</script>

<style lang="sass">
.teleport-menu-wrap
  position: fixed
  z-index: 9999
  top: $height-header
  left: -21.3rem
  width: 21.3rem
  max-height: calc(100vh - #{$height-header} + .4rem)
  // height: 100%
  // background-color: red
  // border-top: 1px solid red
  // border-right: 1px solid red
  // border-bottom: 1px solid red
  border-top-right-radius: 2.3rem
  border-bottom-right-radius: 2.3rem
  transition: all .2s linear

  background-image: -webkit-linear-gradient(264.51deg, #FFE580 4.38%, #FF7571 11.51%, #FF7270 25.06%, #EA5DAD 36.04%, #C2A0FD 47.63%, #9867F0 59.03%, #3BF0E4 69.96%, #33CE43 83.74%, #B2F4B6 95.62%)
  background-image: -moz-linear-gradient(264.51deg, #FFE580 4.38%, #FF7571 11.51%, #FF7270 25.06%, #EA5DAD 36.04%, #C2A0FD 47.63%, #9867F0 59.03%, #3BF0E4 69.96%, #33CE43 83.74%, #B2F4B6 95.62%)
  background-image: -0-linear-gradient(264.51deg, #FFE580 4.38%, #FF7571 11.51%, #FF7270 25.06%, #EA5DAD 36.04%, #C2A0FD 47.63%, #9867F0 59.03%, #3BF0E4 69.96%, #33CE43 83.74%, #B2F4B6 95.62%)
  background-image: linear-gradient(264.51deg, #FFE580 4.38%, #FF7571 11.51%, #FF7270 25.06%, #EA5DAD 36.04%, #C2A0FD 47.63%, #9867F0 59.03%, #3BF0E4 69.96%, #33CE43 83.74%, #B2F4B6 95.62%)
  background-position: 58% 50%
  background-size: 500%

  -webkit-animation: gradient-shift 30s ease infinite
  animation: gradient-shift 30s ease infinite


@keyframes gradient-shift
  0%
    background-position: 58% 50%
  25%
    background-position: 100% 0%
  75%
    background-position: 10% 50%
  to
    background-position: 58% 50%

.underlay
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 100%
  opacity: 0.3
  opacity: 0
  background-color: #333
  z-index: -1
.teleport-menu
  // position: fixed
  // z-index: 9999
  // top: $height-header
  // left: -21rem
  width: 21rem
  max-height: calc(100vh - #{$height-header})
  background-color: rgb(248,250,252)
  border-top: 5px solid transparent
  border-right: 5px solid transparent
  border-bottom: 5px solid transparent
  border-top-right-radius: 2rem
  border-bottom-right-radius: 2rem
  transition: all .2s linear
  margin: .2rem
  margin-left: 0
  -webkit-background-clip: text
  background-clip: border-box

  ul
    padding: 1.6rem
  li
    padding: .8rem 0

  &-btns-wrap
    position: absolute
    z-index: 9999
    top: 2rem
    right: -4rem
    height: 16rem
    width: 4rem
    border-top-right-radius: 2rem
    border-bottom-right-radius: 2rem
    background-color: transition
    &:hover .teleport-menu__button_target.top-position-1
      top: 5rem
    &:hover .teleport-menu__button_target.top-position-2
      top: 9rem
    &:hover .teleport-menu__button_target.top-position-3
      top: 13rem

  &__button
    position: absolute
    top: 0
    left: 0
    height: 4rem
    width: 4rem
    background-color: rgb(248,250,252)
    border: 1px solid rgb(226, 232, 240)
    border-left: none
    border-top-right-radius: 2rem
    border-bottom-right-radius: 2rem
    box-shadow: 4px 2px 4px rgba(0,0,0,.101562)
    display: flex
    justify-content: center
    align-items: center
    // border: none
    // background-color: transparent
    svg
      // height: 2rem
      // width: 2rem
      fill: rgb(47, 73, 94)
      stroke: rgb(47, 73, 94)
    &_target
      border: none
      z-index: -1
      top: .5rem
      left: .5rem
      height: 3rem
      width: 3rem
      line-height: 3rem
      padding: 0
      text-align: center
      background-color: rgb(237,242,247)
      font-weight: 700
      border-radius: 2rem
      // border: 1px solid rgb(237,242,247)
      transition: all 0.2s linear
      a
        color: rgb(47, 73, 94)
      &:hover
        // box-shadow: none
        background-color: rgb(47, 73, 94)
        // border: 1px solid rgb(200, 200, 200)
        a
          color: rgb(237,242,247)

  &__svg-list
    display: block

  &__svg-close
    display: none


// // hide
// .underlay + .teleport-menu
//   left: 0
//   box-shadow: 4px 2px 4px rgba(0,0,0,.101562)
// // .underlay + .teleport-menu .teleport-menu__button
// //   box-shadow: none
// .underlay + .teleport-menu .teleport-menu__svg-list
//   display: none
// .underlay + .teleport-menu .teleport-menu__svg-close
//   display: block

// hide
.teleport-menu-wrap.active
  left: 0
  box-shadow: 4px 2px 4px rgba(0,0,0,.101562)
.teleport-menu-wrap.active .underlay
  opacity: 0.3
.teleport-menu-wrap.active .teleport-menu .teleport-menu__svg-list
  display: none
.teleport-menu-wrap.active .teleport-menu .teleport-menu__svg-close
  display: block


</style>
