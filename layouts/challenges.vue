<template>
  <div style="position: relative" class="bg height-100vh mm-nav-opened">
    <div class="container">
      <div class="menu">
        <nuxt-link
          v-for="link in links" :key="link.url"
          :to="link.url"
        >
          {{ link.title }}
        </nuxt-link>
      </div>
      <Nuxt class="layout-scrollbar layout-cell height-100vh-minus-header" />
    </div>
    <TeleportMenu/>
  </div>
</template>

<script>
export default {
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

  data() {
    return {
      links: [
        {title: 'Главная', url: '/challenges/'},
        {title: 'Создать ch', url: '/challenges/create'},
        {title: 'Добавить прогресс', url: '/challenges/addprogress'},
        {title: 'Mobile', url: '/challenges/mobile'},
        {title: 'MobileMenu', url: '/challengesmmenu'},
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
  }
}
</script>

<style>
/* Variables */
:root {
  --scrollbar-size: 8px;
  --scrollbar-minlength: 15px; /* Minimum length of scrollbar thumb (width of horizontal, height of vertical) */
  --scrollbar-ff-width: thin; /* FF-only accepts auto, thin, none */
  --scrollbar-track-color: transparent;
  --scrollbar-color: rgb(42, 36, 36,.3);
  --scrollbar-color-hover: rgba(41, 35, 35, 0.55);
  --scrollbar-color-active: rgb(42, 36, 36,.8);
}
</style>

<style lang="sass" scoped>
$height-header: 5.1rem

// .bg
  // @include backgroundShorthandWithExternalVar('challenges/kaspar-allenbach-w9QgdJ3lAPU-unsplash.jpg', center)
  // background-color: $theme-color-yellow
.height-100vh
  height: 100vh
.height-100vh-minus-header
  height: calc(100vh - #{$height-header})

.container
  // padding-top: calc(#{$height-header} + 3rem)
  padding-top:$height-header
.menu
  position: fixed
  z-index: 9999
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
