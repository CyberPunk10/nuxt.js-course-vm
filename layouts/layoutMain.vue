<template>
  <div class="wrapper-layout">
    <Sidebar />
    <div class="absolute layout-scrollbar layout-cell">
      <button class="sidebar-toggle"
        data-btn="sidebar-toggle"
        @click="handleClickSidebarToggle"
      >sidebar-toggle</button>

      <Nuxt />
    </div>
    <TeleportMenu />
  </div>
</template>

<script>
import Sidebar from '~/components/Sidebar.vue';
export default {
  components: { Sidebar },
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
      // console.log('click on Sidebar-toggle', event.target)
      const sideBar = document.querySelector('.sidebar-wrapper')
      if (event.target.dataset.btn === 'sidebar-toggle') {
        sideBar.classList.toggle('active')
      }
    }
  }
}
</script>

<style lang="sass">
// .wrapper-layout
//   position: relative
//   width: 100%
//   height: 100vh

// .absolute
//   position: fixed
//   overflow-x: hidden
//   top: 0
//   bottom: 0
//   right: 0
//   left: 0
//   width: 100%
//   height: 100%
//   background-color: #2dce89
//   color: #fff
//   transition: $transitionSidebar

// .sidebar-toggle
//   margin: 1rem
//   padding: 1rem

// .sidebar-wrapper.active + .absolute
//   left: 80%


</style>
