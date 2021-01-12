<template>
  <div class="wrapper-layout">
    <Sidebar />
    <div class="main layout-scrollbar layout-cell">

      <div class="container">
        <div class="menu">
          <button class="sidebar-toggle"
            data-btn="sidebar-toggle"
            @click="handleClickSidebarToggle"
          >sidebar-toggle</button>

          <NuxtLink
            v-for="link in links" :key="link.url"
            :to="link.url"
          >
            {{ link.title }}
          </NuxtLink>
        </div>

        <Nuxt />
      </div>

    </div>
    <TeleportMenu />
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {title: 'Главная', url: '/challenges/'},
        {title: 'Создать ch', url: '/challenges/create'},
        {title: 'Добавить прогресс', url: '/challenges/addprogress'},
        {title: 'Mobile', url: '/challenges/mobile'},
        {title: 'layout-main', url: '/layout-main'},
        {title: 'Table', url: '/challenges/table'}
      ]
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
// vars
$height-header: 5.1rem

.wrapper-layout
  position: relative
  width: 100%
  height: 100vh

.main
  position: fixed
  overflow-x: hidden
  top: 0
  bottom: 0
  right: 0
  left: 0
  width: 100%
  height: 100%
  background-color: #2dce89
  color: #fff
  transition: $transitionSidebar

.sidebar-toggle
  margin: 1rem
  padding: 1rem

.sidebar-wrapper.active + .main
  left: 80%


.container
  padding-top:$height-header
  .menu
    position: fixed
    z-index: 444
    top: 0
    left: 0
    right: 0
    height: $height-header
    background-color: #fff
    border-bottom: 1px solid #e6e6e6
    display: flex
    justify-content: center
    align-items: center
    @media screen and (max-width: $tableWidth)
      font-size: 6px
    a
      color: #909399
      height: $height-header
      line-height: $height-header
      padding: 0 1.5rem
      &:hover
        border-bottom: 2px solid #409EFF
</style>
