<template>
  <header>
    <!-- <button class="sidebar-toggle"
      data-btn="sidebar-toggle"
    >
      <span data-btn="sidebar-toggle">
        <svg data-btn="sidebar-toggle" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <rect data-btn="sidebar-toggle" y="9" width="20" height="2"></rect>
          <rect data-btn="sidebar-toggle" y="3" width="20" height="2"></rect>
          <rect data-btn="sidebar-toggle" y="15" width="20" height="2"></rect>
        </svg>
      </span>
      <span data-btn="sidebar-toggle">Меню</span>
    </button> -->

    <!-- <div class="menu" id="headerMenu">
      <NuxtLink
        v-for="link in links" :key="link.url"
        :to="link.url"
      >
        {{ link.name }}
      </NuxtLink>
    </div> -->
  </header>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  computed: {
    links() {
      let sidebarLinks = this.$store.state.sidebarLayoutChellanges.sidebarLinks
      return sidebarLinks.filter(item => item.onHeader)
    }
  },
}
</script>

<style lang="sass">
header
  top: 0
  height: $height-header
  display: flex
  justify-content: space-between
  background-color: #fff
  user-select: none
  // border-bottom: 1px solid #e6e6e6
  .sidebar-toggle
    display: flex
    justify-content: center
    align-items: center
    box-sizing: border-box
    height: 100%
    padding: 0 1rem
    background-color: transparent
    border: none
    font-size: 1.4rem
    white-space: nowrap // запрет переноса строк
    @media screen and (min-width: $tableWidth)
      display: none
    span
      padding-right: 1rem

  .menu
    height: $height-header
    width: 100%
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
