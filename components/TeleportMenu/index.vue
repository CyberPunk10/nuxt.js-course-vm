<template>
  <div
    class="teleport-menu"
    v-on:click="handleClickTeleportMenu"
  >
    <div class="underlay"></div>
    <div class="teleport-menu__bg-gradient">
      <div class="teleport-menu__content">
        <ul>
          <li v-for="item in items" :key="item.text" :class="'teleport-menu__li-' + item.type">
            <a v-if="item.type === 'link'" :href="item.url">{{item.text}}</a>
            <span v-if="item.type === 'category'">{{item.text}}</span>
          </li>
        </ul>

        <div class="teleport-menu__btns-wrap">
          <button data-tmbtn="teleport-menu__btn" class="teleport-menu__button">
            <svg data-tmbtn="teleport-menu__btn" class="teleport-menu__svg-close" width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path data-tmbtn="teleport-menu__btn" d="M231.6 256l130.1-130.1c4.7-4.7 4.7-12.3 0-17l-22.6-22.6c-4.7-4.7-12.3-4.7-17 0L192 216.4 61.9 86.3c-4.7-4.7-12.3-4.7-17 0l-22.6 22.6c-4.7 4.7-4.7 12.3 0 17L152.4 256 22.3 386.1c-4.7 4.7-4.7 12.3 0 17l22.6 22.6c4.7 4.7 12.3 4.7 17 0L192 295.6l130.1 130.1c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17L231.6 256z"></path>
            </svg>
            <svg data-tmbtn="teleport-menu__btn" class="teleport-menu__svg-list" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
              <line data-tmbtn="teleport-menu__btn" x1="8" x2="21" y1="6" y2="6"></line>
              <line data-tmbtn="teleport-menu__btn" x1="8" x2="21" y1="12" y2="12"></line>
              <line data-tmbtn="teleport-menu__btn" x1="8" x2="21" y1="18" y2="18"></line>
              <line data-tmbtn="teleport-menu__btn" x1="3" x2="3" y1="6" y2="6"></line>
              <line data-tmbtn="teleport-menu__btn" x1="3" x2="3" y1="12" y2="12"></line>
              <line data-tmbtn="teleport-menu__btn" x1="3" x2="3" y1="18" y2="18"></line>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { type: 'category', text: 'Проекты на Nuxt.js' },
        { type: 'link', text: 'SSR блог', url: '/' },
        { type: 'link', text: 'SSR блог админка', url: '/admin' },
        { type: 'link', text: 'Dreams', url: '/dreams' },
        { type: 'link', text: 'Моноколеса', url: '/landing' },
        { type: 'category', text: 'Другие проекты' },
        { type: 'link', text: 'Курс Exel', url: '/landing' },
        { type: 'category', text: `CurrentRouteName: ${this.$route.name}` },
      ]
    }
  },

  // computed: {
  //   currentRouteName: this.$route.name
  // },
  // computed: {
  //   currentRouteName() {
  //     return this.$route.name
  //   }
  // },

  methods: {
    handleClickTeleportMenu: function(event) {
      const teleportMenu = document.querySelector('.teleport-menu')
      const underlay = teleportMenu.querySelector('.underlay')
      if (event.target.className === 'underlay') {
        teleportMenu.classList.toggle('active')
      } else if (event.target.dataset.tmbtn === 'teleport-menu__btn') {
        teleportMenu.classList.toggle('active')
      }
    }
  }
}
</script>

<style lang="sass">
.teleport-menu
  &__bg-gradient
    position: fixed
    z-index: 9999
    top: $height-header
    left: -21.2rem
    width: 21.2rem
    max-height: calc(100vh - #{$height-header})
    border-top-right-radius: 22px
    border-bottom-right-radius: 22px
    padding: 0.2rem 0.2rem 0.2rem 0
    background-image: -webkit-linear-gradient(264.51deg, #FFE580 4.38%, #FF7571 11.51%, #FF7270 25.06%, #EA5DAD 36.04%, #C2A0FD 47.63%, #9867F0 59.03%, #3BF0E4 69.96%, #33CE43 83.74%, #B2F4B6 95.62%)
    background-image: -moz-linear-gradient(264.51deg, #FFE580 4.38%, #FF7571 11.51%, #FF7270 25.06%, #EA5DAD 36.04%, #C2A0FD 47.63%, #9867F0 59.03%, #3BF0E4 69.96%, #33CE43 83.74%, #B2F4B6 95.62%)
    background-image: -0-linear-gradient(264.51deg, #FFE580 4.38%, #FF7571 11.51%, #FF7270 25.06%, #EA5DAD 36.04%, #C2A0FD 47.63%, #9867F0 59.03%, #3BF0E4 69.96%, #33CE43 83.74%, #B2F4B6 95.62%)
    background-image: linear-gradient(264.51deg, #FFE580 4.38%, #FF7571 11.51%, #FF7270 25.06%, #EA5DAD 36.04%, #C2A0FD 47.63%, #9867F0 59.03%, #3BF0E4 69.96%, #33CE43 83.74%, #B2F4B6 95.62%)
    background-position: 58% 50%
    background-size: 500%
    -webkit-animation: gradient-shift 30s ease infinite
    animation: gradient-shift 30s ease infinite
    transition: all .2s linear

  &__content
    width: 21rem
    max-height: calc(100vh - #{$height-header} - 4px)
    background-color: rgb(248,250,252)
    border-top-right-radius: 20px
    border-bottom-right-radius: 20px
    transition: all .2s linear

    ul
      padding: 1.6rem 0
    li
      padding: .8rem 1.6rem 0.8rem 0
      margin-left: 1rem
      transition: all .2s ease
      a
        color: $color-dark-shade-75

      &.teleport-menu__li-category
        border-bottom: 1px dashed $color-dark-shade-25
        color: $color-dark-shade-50
        margin: 0 1.5rem 1rem 1.5rem
      &.teleport-menu__li-link
        padding-left: 2.5rem
        margin-left: 0
        border-left: 5px solid transparent
        transition: all .2s ease
        &:hover
          // border-color: #33CE43
          // border-color: #9867F0
          // border-color: #C2A0FD
          // border-color: #FF7571
          border-color: #FF7270
          a
            color: #FF7270

  &__btns-wrap
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
    svg
      fill: rgb(47, 73, 94)
      stroke: rgb(47, 73, 94)
    &_target
      border: none
      z-index: -1
      top: .5rem
      left: 0rem
      height: 3rem
      width: 3.5rem
      line-height: 3rem
      padding: 0
      text-align: center
      font-weight: 700
      border-top-right-radius: 2rem
      border-bottom-right-radius: 2rem
      transition: all 0.2s linear
      a
        color: rgb(47, 73, 94)
      &:hover
        background-color: #FF7270
        a
          color: rgb(237,242,247)

  &__svg-list
    display: block

  &__svg-close
    display: none


.underlay
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 100%
  background-color: #333
  opacity: 0
  pointer-events: none
  transition: all .2s linear

// hide
.teleport-menu.active .teleport-menu__bg-gradient
  left: 0
  box-shadow: 4px 2px 4px rgba(0,0,0,.101562)
.teleport-menu.active .underlay
  opacity: 0.3
  pointer-events: auto
.teleport-menu.active .teleport-menu__svg-list
  display: none
.teleport-menu.active .teleport-menu__svg-close
  display: block


@keyframes gradient-shift
  0%
    background-position: 58% 50%
  25%
    background-position: 100% 0%
  75%
    background-position: 10% 50%
  to
    background-position: 58% 50%

</style>
