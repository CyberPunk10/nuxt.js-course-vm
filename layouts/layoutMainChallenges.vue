<template>
  <div class="layout-wrapper main-container_transform-x">
    <Sidebar />

    <div class="main-container"
      @click="handleClickSidebarToggle"
    >
      <Header/>

      <div class="border-top"></div>
      <div class="border-right"></div>
      <div class="border-left"></div>

      <Nuxt class="main-content layout-scrollbar layout-cell container" />
    </div>

    <!-- <TeleportMenu /> -->
  </div>
</template>

<script>
import swipe from '@/common/swipe'

export default {
  data() {
    return {

    }
  },

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

      switch (e.detail.dir) {
        case 'right':
          document.querySelector('.sidebar').classList.add('active')
          break
        case 'left':
          document.querySelector('.sidebar').classList.remove('active')
          break
      }
    })
  },

  methods: {
    handleClickSidebarToggle: function(event) {
      console.log('click layout (layoutMainChallenges.vue)', event.target)
      const sideBar = document.querySelector('.sidebar')
      if (event.target.dataset.btn === 'sidebar-toggle') {
        sideBar.classList.toggle('active')
        return
      }
      if (!sideBar.matches('.pinned')) {
        sideBar.classList.remove('active')
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

  &>.sidebar,
  &>.main-container
    position: fixed
    top: 0
    left: 0
    bottom: 0
    height: 100%
    overflow: hidden
    transition: $transitionSidebar

  &>.sidebar
    z-index: 999
    width: $sidebarWidth
    background-color: $color-bg-sidebar
    // color: #242424
    @media screen and (max-width: 370px)
      width: $sidebarWidthPhone
    @media screen and (min-width: $tableWidth)
      width: $sidebarWidthIcon
  &>.main-container
    right: 0
    width: 100%
    background-color: $color-bg-body
    // color: #555
    @media screen and (min-width: $tableWidth)
      width: auto
      left: $sidebarWidthIcon

    header,
    .main-content
      position: absolute
      left: 0
      right: 0
      bottom: 0
      width: 100%

    .main-content
      top: $height-header
      height: calc(100% - #{$height-header})
      overflow-x: hidden

  // если sidebar not static (need add .transform-x)
  &>.sidebar.transform-x
    left: -$sidebarWidth
    @media screen and (max-width: 370px)
      left: -$sidebarWidthPhone
    @media screen and (min-width: $tableWidth)
      left: 0

  // show sidebar
  &>.sidebar.active
    left: 0
    width: $sidebarWidth
    box-shadow: 4px 2px 4px rgba(0,0,0,.101562)
    @media screen and (max-width: 370px)
      width: $sidebarWidthPhone
  &>.sidebar.transform-x.active
    left: 0

  // если main-container not static (need add .main-container_transform-x)
  &.main-container_transform-x
    &>.sidebar
      z-index: 0
    // show
    &>.sidebar.active + .main-container
      left: $sidebarWidth
      @media screen and (max-width: 370px)
        left: $sidebarWidthPhone


  // .border-top/left/right
  .border-top,
  .border-left,
  .border-right
    position: absolute
    top: $height-header
    background-color: rgba(0, 0, 0, 0.05)

  .border-top,
  .border-left
    z-index: 1

  .border-left,
  .border-right
    width: 1px
    height: 100%

  .border-top
    height: 1px
    width: 100%

  .border-left
    left: 0
  .border-right
    right: 0

</style>
