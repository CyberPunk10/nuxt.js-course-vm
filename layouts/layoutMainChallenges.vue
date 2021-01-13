<template>
  <div class="layout-wrapper main-container_transform-x">
    <Sidebar />

    <div class="main-container"
      @click="handleClickSidebarToggle"
    >
      <div class="underlay"></div>

      <Header/>

      <div class="main-wrapper layout-scrollbar layout-cell">
        <div class="container">
          <Nuxt />
        </div>
      </div>
    </div>

    <TeleportMenu />
  </div>
</template>

<script>
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
  },

  methods: {
    handleClickSidebarToggle: function(event) {
      console.log('click layout (layoutMainChallenges.vue)', event.target)
      const sideBar = document.querySelector('.sidebar-wrapper')
      const mainContainer = document.querySelector('.main-container')
      if ( event.target.dataset.btn === 'sidebar-toggle'
        || event.target.className === 'underlay' && event.target.parentElement.classList.contains('main-container')) {
        sideBar.classList.toggle('active')
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

.main-container
  position: fixed
  overflow: hidden
  top: 0
  bottom: 0
  right: 0
  left: 0
  width: 100%
  height: 100vh
  background-color: #f7f7f7
  color: #555
  transition: $transitionSidebar
  .underlay
    position: absolute

.header-wrapper,
.main-wrapper
  position: absolute
  bottom: 0
  left: 0
  right: 0
  width: 100%

.main-wrapper
  top: $height-header
  height: calc(100% - #{$height-header})
  overflow-x: hidden

.sidebar-wrapper.active + .main-container
  .underlay
    z-index:555
    pointer-events: auto
    opacity: .2

// если main-container not static (need add .main-container_transform-x)
.layout-wrapper.main-container_transform-x
  .sidebar-wrapper
    z-index: 0
  // show
  .sidebar-wrapper.active + .main-container
    left: $sidebarWidth

</style>
