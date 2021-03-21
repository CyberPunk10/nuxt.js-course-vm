<template>
  <div class="layout-wrapper main-container_transform-x"
    :data-sidebar-active="isSidebarActive"
    :data-header-out="isHeaderOut"
    ref="layout"
  >
    <Header />

    <Sidebar />

    <div class="main-container">
      <div class="main-content layout-scrollbar layout-cell" ref="mainContent">
        <Nuxt class="container" />
        <div class="underlay-main-container"
          @click="closeSidebar"
        ></div>
      </div>
      <!-- <Nuxt class="main-content layout-scrollbar layout-cell container" /> -->
    </div>

    <ProgressBar :value="progress"/>

    <FooterMobile />

    <!-- <TeleportMenu /> -->
  </div>
</template>

<script>
import swipe from '@/common/swipe'
import { mapGetters } from 'vuex'

export default {
  name: 'layout-main-challenges', // Иначе ошибка: [Vue warn]: Invalid component name: "layouts/layout-main-challenges.vue". Component names should conform to valid custom element name in html5 specification.
  data () {
    return {
      progress: 0, // for progressBar
    }
  },
  middleware: ['class', 'scroll-top-to-start'],
  computed: {
    error() {
      return this.$store.getters.error
    },
    // isSidebarActive () {
    //     return this.$store.getters['sidebarLayoutChallenges/isSidebarActive']
    // },
    ...mapGetters({
      isSidebarActive: 'sidebarLayoutChallenges/isSidebarActive',
      isHeaderOut: 'headerLayoutChallenges/isHeaderOut'
    }),
  },
  watch: {
    error(value) {
      console.log(value)
      this.$message.error(value.response.data.message)
    }
  },

  mounted(){
    /* Работа со скоролом */
    // взято отсюда: https://habr.com/ru/company/ruvds/blog/468405/
    // легкий простой код на проверку фиксированные ли scroll-ы у пользователя или нет
    // Scrollbar Width Test
    // Adds `layout-scrollbar-obtrusive` class to body if scrollbars use up screen real estate

    function getScrollbar () {

      const parent = document.createElement("div")
      parent.setAttribute("style", "width:30px; height:30px;")
      parent.classList.add('scrollbar-test')

      const child = document.createElement("div")
      child.setAttribute("style", "width:100%; height:40px")
      parent.appendChild(child)
      document.body.appendChild(parent)

      // Measure the child element, if it is not
      // 30px wide the scrollbars are obtrusive.
      const scrollbarWidth = 30 - parent.firstChild.clientWidth
      if(scrollbarWidth) {
        document.body.classList.add("layout-scrollbar-obtrusive")
      }
      document.body.removeChild(parent)
    }
    getScrollbar()

    // Swipe
    // const $layout = document.querySelector('.layout-wrapper')
    const $layout = this.$refs.layout
    swipe($layout, { maxTime: 1000, minTime: 10, maxDist: 150,  minDist: 60 })
    $layout.addEventListener("swipe", this.handleSwipe)

    // Scroll (show/hidden header)
    // const $MainContent = document.querySelector('.layout-wrapper>.main-container>.main-content')
    const $MainContent = this.$refs.mainContent
    window.justExecuted = false
    window.scrollPrev = 0 // for event swipe
    $MainContent.addEventListener('scroll', e => {
      this.handleScrollHiddenHeader(e)
      this.handleScrollProgressBar(e)
    })

    // подписываемся на изменения размеров экрана
    window.addEventListener('resize', this.updateWidthWindow)
  },

  // (не нужно удалять listeners, так как будет удален сам DOM-элемент, на которые повешаны эти слушатели)
  // beforeDestroy() {
  //   // const $layout = document.querySelector('.layout-wrapper')

  //   // swipe
  //   // $layout.removeEventListener("swipe", this.handleSwipe)

  //   // removeEventListener Scroll (show/hidden header) (не нужно удалять listener, так как будет удален сам DOM-элемент)
  //   // document.querySelector('.layout-wrapper>.main-container>.main-content').removeEventListener('scroll', this.handleScroll)
  // },

  methods: {
    closeSidebar: function() {
      if (document.documentElement.clientWidth < 768) {
        this.$store.dispatch('sidebarLayoutChallenges/closeSidebar')
      }
    },

    handleSwipe(e) {
      // console.log(e.detail.full.type, e.detail)
      console.log(e.detail.full.target)

      const ignoreSwipe = e.detail.targetStartSwipe.closest('.layout-swipe-ignore')

      switch (e.detail.dir) {
        case 'right': // open sidebar
          if (!ignoreSwipe) {
            this.$store.dispatch('sidebarLayoutChallenges/openSidebar')
          }
          break
        case 'left': // close sidebar
          if (!ignoreSwipe) {
            this.$store.dispatch('sidebarLayoutChallenges/closeSidebar')
          }
          break
      }
    },

    // (show/hidden header)
    handleScrollHiddenHeader(e) {
      // Оптимизация window scroll
      // https://gist.github.com/znamilya/f10fe9d8caf20a5e0e7f
      if(window.justExecuted) {
        return
      }
      console.log('[scroll-hidden-header]', window.justExecuted)

      // your event handling logic here
      if (document.documentElement.clientWidth < 480 ) {
        requestAnimationFrame(() => {

          let scrolled = e.target.scrollTop

          if (scrolled > 80 && scrolled > window.scrollPrev) {
            this.$store.dispatch('headerLayoutChallenges/addAttrHeaderOut')
          } else {
            this.$store.dispatch('headerLayoutChallenges/removeAttrHeaderOut')
          }

          window.scrollPrev = scrolled
        })
      }

      window.justExecuted = true

      setTimeout(function() {
        window.justExecuted = false
      }, 50)
    },


    handleScrollProgressBar (e) {
      // console.log('[ProgressBar]')
      requestAnimationFrame(() => {
        let scrollPos = e.target.scrollTop
        let winHeight = document.documentElement.clientHeight
        let docHeight = e.target.scrollHeight
        let perc = (100 * scrollPos) / (docHeight - winHeight)
        // console.log(scrollPos, docHeight, winHeight, perc)
        if (scrollPos + winHeight >= docHeight) this.progress = 100 // 100%
        else this.progress = perc
      })
    },

    // прослушивание изменения ширины окна  (например для добавления тени к фиксированным колонкам таблиц)
    updateWidthWindow() {
      this.$store.dispatch('layoutChallenge/updateCurrentWidthWindow', window.innerWidth)
    },
  }
}
</script>

<style lang="sass">
.layout-wrapper
  position: relative
  width: 100%
  height: 100vh
  transition: $transitionDefault // for bgc sidebar show

  &>header,
  &>.sidebar,
  &>.main-container
    position: fixed
    top: 0
    left: 0
    transition: $transitionSidebar
    // transition: all 2s ease

  &>header
    right: 0
    height: $header-height
    z-index: 9

  &>.sidebar,
  &>.main-container
    bottom: $header-height

  &>.sidebar,
  &>.main-container
    @media screen and (min-width: $phoneWidth)
      top: $header-height
      bottom: 0

  &>.sidebar
    // z-index: 999 // если захочется вернуть, то указать причину! (при < 480 перекрывает header и не закрыть sidebar! если включить)
    width: 0
    // @media screen and (max-width: calc(#{$phoneWidth} - 1px)) // < 480px
      // width: $sidebarWidthPhone
    @media screen and (min-width: $tableWidth)
      width: $sidebarWidthIcon
    .sidebar-main
      margin-top: calc(#{$header-height} + .5rem)
      height: calc(100% - 1rem - #{$header-height})
      @media screen and (min-width: $phoneWidth)
        margin-top: .5rem
        height: calc(100% - 1rem)



  &>.main-container
    right: 0
    width: 100%
    overflow: hidden // (без header и sidebar, потому что нужно показывать контекстное меню под аватаркой и подсказки)

    // @media screen and (max-width: calc(#{$phoneWidth} - 1px)) // < 480px
    //   background-color: $color-bg-body

    @media screen and (min-width: $tableWidth)
      width: auto
      left: $sidebarWidthIcon

    .main-content
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: 0
      width: 100%
      height: 100%
      overflow-x: hidden
      padding-top: $header-height
      transition: padding .4s ease, width .4s ease, height .4s ease // надо закомментить чтобы переходы между страницами были не плавными // for padding! (иначе скачет)
      @media screen and (min-width: $phoneWidth)
        padding-top: 0

    .underlay-main-container
      z-index: -1
      position: fixed
      top: $header-height
      left: 0
      width: 100%
      height: calc(100% - #{$header-height} * 2)
      // border-radius: 1.2rem
      // background-color: rgba(100, 200, 300, .3)
      border: .5rem solid transparent
      transition: $transitionSidebar
      @media screen and (min-width: $phoneWidth)
        height: calc(100% - #{$header-height})


  // если sidebar not static (need add .transform-x)
  &>.sidebar.transform-x
    left: -$sidebarWidth
    @media screen and (min-width: $phoneWidth)
      left: -$sidebarWidthPhone
    @media screen and (min-width: $tableWidth)
      left: 0

  &>.footer-mobile
    position: fixed
    right: 0
    left: 0
    bottom: 0
    height: $header-height
    background-color: #fff
    transition: $transitionSidebar
    @media screen and (min-width: $phoneWidth)
      bottom: -$header-height

  // если main-container not static (need add .main-container_transform-x)
  &.main-container_transform-x
    &>.sidebar
      // z-index: 0
      @media screen and (min-width: $tableWidth)
        z-index: 1


  // show sidebar
  &[data-sidebar-active]
    @media screen and (max-width: calc(#{$phoneWidth} - 1px)) // < 480px
      background-color: #c5c6c7 // gray
      background-color: #E3E2DF // gray
      background-color: #EDEAE5 //
      &>header
        background-color: #fff
        border-bottom-left-radius: $borderRadiusBig
        border-bottom-right-radius: $borderRadiusBig
      .footer-mobile
        // box-shadow: 0 0 2px rgba(88,88,88,.15)
        border-top-left-radius: $borderRadiusBig
        border-top-right-radius: $borderRadiusBig
    &>.sidebar
      // vars
      $margin-left-sidebar: 1.2rem

      left: $margin-left-sidebar
      width: calc(#{$sidebarWidthPhone} - #{$margin-left-sidebar})
      @media screen and (min-width: $phoneWidth)
        left: 0
        width: $sidebarWidthTable
        // .sidebar-main
        //   box-shadow: 0 0 4px rgba(88,88,88,.15)
      @media screen and (min-width: $desktopWidth)
        width: $sidebarWidth
      @media screen and (max-width: calc(#{$smPhoneWidth} - 1px)) // < 320px
        left:  calc(.5rem + .15rem)
        width: calc(100% - 1rem)


    &>.sidebar.transform-x
      left: 0
      box-shadow: 4px 2px 4px rgba(0,0,0,.101562)

  // show
  &.main-container_transform-x[data-sidebar-active]
    .main-container
      left: $sidebarWidthPhone
      // opacity: .3
      .underlay-main-container
        left: $sidebarWidthPhone
        z-index: 999
        // background-color: rgba(100,100,255,.4)
        // background-color: rgba(100, 200, 300, .3)
        // backdrop-filter: blur(2px) // This be the blur
        // box-shadow: 4px 2px 4px rgba(0,0,0,.9101562)
        // border-color: $color-bg-body-not-active
        @media screen and (min-width: $phoneWidth)
          background-color: transparent
        @media screen and (min-width: $tableWidth)
          z-index: -1

      @media screen and (max-width: calc(#{$smPhoneWidth} - 1px)) // < 320px
        left: calc(100% - .5rem)
        .underlay-main-container
          left: 100%
      @media screen and (max-width: calc(#{$phoneWidth} - 1px)) // < 480px
        .container
          padding-left: 1.5rem
      @media screen and (min-width: $phoneWidth) // >= 480px
        left: $sidebarWidthTable
        .underlay-main-container
          left: $sidebarWidthTable
          border-color: transparent
      @media screen and (min-width: $desktopWidth) // >= 1280px
        left: $sidebarWidth
        .underlay-main-container
          left: $sidebarWidth


  // hover sidebar
  &.main-container_transform-x:not([data-sidebar-active]),
  &:not([data-sidebar-active])
    &>.sidebar
      @media(hover: hover) and (pointer: fine) // https://webformyself.com/css-hover-na-sensornyx-ekranax/ (решение на чистом CSS для :hover на сенсорных экранах)
        &:hover
          @media screen and (min-width: $tableWidth)
            width: $sidebarWidthTable
            max-width: $sidebarWidthTable
            .sidebar-main
              // background-color: #fff
              box-shadow: 2px 2px 11px rgba(88,88,88,.15)
              // box-shadow: 1px 1px 8px rgba(88, 88, 88, 0.2)

          @media screen and (min-width: $desktopWidth)
            width: $sidebarWidth
            max-width: $sidebarWidth

            // & + .main-container
            //   z-index: 0 !important
            //   left: $sidebarWidth


  &[data-header-out]
    @media screen and (max-width: calc(#{$phoneWidth} - 1px)) // < 480px
      &>header
        transform: translateY(-#{$header-height})
        box-shadow: $borderShadowHover
      &>.sidebar .sidebar-main
        margin-top: .5rem
        height: calc(100% - 1rem)
      // &>.main-container .main-content
        // padding-top: 0
      .progress-bar
        transform: translateY(-#{$header-height})
      .underlay-main-container
        top: 0
        height: calc(100% - #{$header-height})



// HEADER продолжает прыгать!!!

// (решено) SWIPE продолжает работать на других layout!!!

// под логином при входе может быть email, поэтому может получиться ситуация,
// когда найдется другой пользователь,
// и это требует дополнительных проверок при создании пользователя (?)

// event scroll for show/hidden header need realization with vue directive (?)

// после swipe сбрасывать выделение текста!

// Оптимизация window scroll
// https://gist.github.com/znamilya/f10fe9d8caf20a5e0e7f
// записываем переменные прямо в window, переделать или сделать аккуратнее

</style>
