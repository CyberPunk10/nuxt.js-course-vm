<template>
  <div class="layout-wrapper main-container_transform-x"
    data-sidebar-active="false"
  >

    <Header />

    <Sidebar />

    <div class="main-container"
      @click="handleClickSidebarToggle"
    >
      <Nuxt class="main-content layout-scrollbar layout-cell container" />
    </div>

    <FooterMobile />

    <!-- <TeleportMenu /> -->
  </div>
</template>

<script>
import swipe from '@/common/swipe'

export default {
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

      var parent = document.createElement("div");
      parent.setAttribute("style", "width:30px; height:30px;");
      parent.classList.add('scrollbar-test');

      var child = document.createElement("div");
      child.setAttribute("style", "width:100%; height:40px");
      parent.appendChild(child);
      document.body.appendChild(parent);

      // Measure the child element, if it is not
      // 30px wide the scrollbars are obtrusive.
      var scrollbarWidth = 30 - parent.firstChild.clientWidth;
      if(scrollbarWidth) {
        document.body.classList.add("layout-scrollbar-obtrusive");
      }
      document.body.removeChild(parent);
    }
    getScrollbar()

    // swipe
    swipe(document, { maxTime: 1000, minTime: 10, maxDist: 150,  minDist: 60 })

    document.addEventListener("swipe", function(e) {
      console.log(e.detail.full.type)
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
    })
  },

  methods: {
    handleClickSidebarToggle: function(event) {
      console.log('click layout (layoutMainChallenges.vue)', event.target)
      const layout = document.querySelector('.layout-wrapper')

      if ( document.documentElement.clientWidth < 768
        && layout.dataset.sidebarActive === 'true' ) {
        layout.dataset.sidebarActive = 'false'
      }

    }
  }
}
</script>

<style lang="sass">
.layout-wrapper
  position: relative
  width: 100%
  height: 100vh

  &>header,
  &>.sidebar,
  &>.main-container
    position: fixed
    left: 0
    transition: $transitionSidebar
    // transition: all 2s ease

  // &>.sidebar,
  &>.main-container
    overflow: hidden // (без header, потому что нужно показывать контекстное меню под аватаркой)

  &>header
    top: 0
    left: 0
    right: 0
    height: $height-header

  &>.sidebar,
  &>.main-container
    top: $height-header
    bottom: 0
    @media screen and (max-width: $phoneWidth)
      bottom: $height-header

  &>.sidebar
    z-index: 999
    width: $sidebarWidthIcon
    @media screen and (max-width: 421px)
      width: $sidebarWidthPhone
    @media screen and (min-width: $tableWidth)
      width: $sidebarWidthIcon


  &>.main-container
    right: 0
    width: 100%
    background-color: $color-bg-body
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

  // если sidebar not static (need add .transform-x)
  &>.sidebar.transform-x
    left: -$sidebarWidth
    @media screen and (max-width: 421px)
      left: -$sidebarWidthPhone
    @media screen and (min-width: $tableWidth)
      left: 0

  &>.footer-mobile
    position: fixed
    bottom: -$height-header
    right: 0
    left: 0
    height: $height-header
    background-color: #fff
    transition: $transitionSidebar
    @media screen and (max-width: $phoneWidth)
      bottom: 0

  // если main-container not static (need add .main-container_transform-x)
  &.main-container_transform-x
    &>.sidebar
      z-index: 0
      @media screen and (min-width: $tableWidth)
        z-index: 1


  // show sidebar
  &[data-sidebar-active="true"]
    &>.sidebar
      // vars
      $margin-left-sidebar: .7rem

      left: 0
      width: $sidebarWidth
      @media screen and (max-width: $desktopWidth)
        width: $sidebarWidthTable
      @media screen and (max-width: 421px)
        left: $margin-left-sidebar
        width: calc(#{$sidebarWidthPhone} - #{$margin-left-sidebar})

    &>.sidebar.transform-x
      left: 0
      box-shadow: 4px 2px 4px rgba(0,0,0,.101562)

  // show
  &.main-container_transform-x[data-sidebar-active="true"]
    .main-container
      left: $sidebarWidth
      @media screen and (max-width: $desktopWidth)
        left: $sidebarWidthTable
      @media screen and (max-width: 421px)
        left: $sidebarWidthPhone

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
              background-color: #fff
              box-shadow: 2px 2px 11px rgba(88,88,88,.15)
              // box-shadow: 1px 1px 8px rgba(88, 88, 88, 0.2)

          @media screen and (min-width: $desktopWidth)
            width: $sidebarWidth
            max-width: $sidebarWidth

            // & + .main-container
            //   z-index: 0 !important
            //   left: $sidebarWidth

</style>
