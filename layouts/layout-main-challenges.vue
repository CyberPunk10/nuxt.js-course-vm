<template>
  <div class="layout-wrapper main-container_transform-x"
    data-sidebar-active="false"
  >
    <Header />

    <Sidebar />

    <div class="main-container"
      @click="handleClickSidebarToggle"
    >
      <div class="main-content layout-scrollbar layout-cell">
        <Nuxt class="container"/>
      </div>
      <!-- <Nuxt class="main-content layout-scrollbar layout-cell container" /> -->
    </div>

    <FooterMobile />

    <!-- <TeleportMenu /> -->
  </div>
</template>

<script>
import swipe from '@/common/swipe'

export default {
  name: 'layout-main-challenges', // Иначе ошибка: [Vue warn]: Invalid component name: "layouts/layout-main-challenges.vue". Component names should conform to valid custom element name in html5 specification.
  data () {
    return {
      // scrollTimer: null // for event scroll hidden header

    }
  },
  middleware: ['class', 'scroll-top-to-start'],
  computed: {
    error() {
      return this.$store.getters.error
    }
  },
  watch: {
    error(value) {
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

    // swipe
    const $layout = document.querySelector('.layout-wrapper')
    // console.log($layout)
    swipe($layout, { maxTime: 1000, minTime: 10, maxDist: 150,  minDist: 60 })
    $layout.addEventListener("swipe", this.handleSwipe)

    // addEventListener Scroll (show/hidden header)
    const $MainContent = document.querySelector('.layout-wrapper>.main-container>.main-content')
    window.justExecuted = false
    window.scrollPrev = 0 // for event swipe


    $MainContent.addEventListener('scroll', this.handleScroll)
    // $MainContent.scrollTop = 1000
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
    handleClickSidebarToggle: function(event) {
      console.log('click layout (layoutMainChallenges.vue)', event.target)

      // если оставить так, ток не будет работать swipe при такой ширине,
      // потому что после свайпа сразу происходит клик по .main-container
      // if (document.documentElement.clientWidth < 768) {
      //   const layout = document.querySelector('.layout-wrapper')
      //   if (layout.dataset.sidebarActive === 'true' ) {
      //       layout.dataset.sidebarActive = 'false'
      //   }
      // }
    },

    handleSwipe(e) {
      // console.log(e.detail.full.type, e.detail)

      const layout = document.querySelector('.layout-wrapper')
      const ignoreSwipe = e.detail.targetStartSwipe.closest('.layout-swipe-ignore')

      switch (e.detail.dir) {
        case 'right':
          if (!ignoreSwipe) layout.dataset.sidebarActive = 'true'
          break
        case 'left':
          if (!ignoreSwipe) layout.dataset.sidebarActive = 'false'
          break
      }
    },

    // (show/hidden header)
    handleScroll(e) {
      if(window.justExecuted) {
        return
      }
      console.log('[scroll-hidden-header]', window.justExecuted)

      // your event handling logic here
      if (document.documentElement.clientWidth < 480) {
        requestAnimationFrame(() => {

          const $layout = document.querySelector('.layout-wrapper')
          let scrolled = e.target.scrollTop

          if (scrolled > 80 && scrolled > window.scrollPrev) $layout.classList.add('header-out')
          else $layout.classList.remove('header-out')

          window.scrollPrev = scrolled
        })
      }

      window.justExecuted = true

      setTimeout(function() {
        window.justExecuted = false
      }, 50)
    }

  }
}
</script>

<style lang="sass">
.layout-wrapper
  position: relative
  width: 100%
  height: 100vh
  transition: $transitionSidebar // for bgc sidebar show

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

  &>.sidebar
    bottom: $header-height
  &>.main-container
    bottom: calc(#{$header-height} - #{$borderRadiusBig})

  &>.sidebar,
  &>.main-container
    @media screen and (min-width: $phoneWidth)
      top: $header-height
      bottom: 0

  &>.sidebar
    z-index: 999
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
      padding-bottom: $borderRadiusBig
      transition: padding .4s ease, width .4s ease, height .4s ease // надо закомментить чтобы переходы между страницами были не плавными // for padding! (иначе скачет)
      @media screen and (min-width: $phoneWidth)
        padding-top: 0
        padding-bottom: 0


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
      z-index: 0
      @media screen and (min-width: $tableWidth)
        z-index: 1


  // show sidebar
  &[data-sidebar-active="true"]
    @media screen and (max-width: calc(#{$phoneWidth} - 1px)) // < 480px
      background-color: $color-bg-body-not-active
    &>.sidebar
      // vars
      $margin-left-sidebar: 1.8rem

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
  &.main-container_transform-x[data-sidebar-active="true"]
    .main-container
      left: $sidebarWidth
      @media screen and (max-width: calc(#{$desktopWidth} - 1px)) // < 1280px
        left: $sidebarWidthTable
      @media screen and (max-width: calc(#{$phoneWidth} - 1px)) // < 480px
        left: $sidebarWidthPhone
        // background-color: $color-bg-body-not-active
      @media screen and (max-width: calc(#{$smPhoneWidth} - 1px)) // < 320px
        left: calc(100% - .5rem)

  // hover sidebar
  &.main-container_transform-x[data-sidebar-active="false"],
  &[data-sidebar-active="false"]
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


  &.header-out
    @media screen and (max-width: calc(#{$phoneWidth} - 1px)) // < 480px
      &>header
        transform: translateY(-#{$header-height})
        border-radius: 0
      &>.sidebar .sidebar-main
        margin-top: .5rem
        height: calc(100% - 1rem)
      // &>.main-container .main-content
        // padding-top: 0
      .progress-bar
        transform: translateY(-#{$header-height})



// HEADER продолжает прыгать!!!

// (решено) SWIPE продолжает работать на других layout!!!

// под логином при входе может быть email, поэтому может получиться ситуация,
// когда найдется другой пользователь,
// и это требует дополнительных проверок при создании пользователя (?)

// Оптимизация window scroll
// https://gist.github.com/znamilya/f10fe9d8caf20a5e0e7f
</style>
