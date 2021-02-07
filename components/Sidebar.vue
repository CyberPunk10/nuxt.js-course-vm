<template>
  <aside
    class="sidebar"
    @click="handleClickSidebar"
  >

    <div class="sidebar-main layout-scrollbar-sidebar-transparent layout-cell-sidebar-transparent">

      <div class="sidenav">
        <!-- <SidenavItem
          v-for="(link, index) in navLinks"
          :key="link.name + index"
          :link="link"
        >
          <SidenavItem
            v-for="(sublink, index) in link.children"
            :key="sublink.name + index"
            :link="sublink"
          >
          </SidenavItem>
        </SidenavItem> -->

        <SidenavItemOnlyLink
          v-for="(link, index) in navLinks"
          :key="link.name + index"
          :link="link"
        />
      </div>

      <!-- <div class="temp">
        <i class="fas fa-download mr-2"></i>
        <i class="fas fa-file-alt"></i>
        <i class="fas fa-gift"></i>
        <i class="fab fa-github"></i>
      </div> -->

    </div>

  </aside>
</template>

<script>
export default {
  computed: {
    navLinks () {
      return this.$store.getters['sidebarLayoutChellanges/sidenavLinks']
    }
  },
  methods: {
    handleClickSidebar: function(event) {
      console.log('click on Sidebar', event.target)
      const sideBar = document.querySelector('.sidebar')
      const className = event.target.className

      // if (event.target.className === 'radio-btn__input') {
      //   console.log(event.target.id)
      //   const id = event.target.id
      //   const layoutWrapper = document.querySelector('.layout-wrapper')
      //   if (id === 'mode-view-sidebar-1') {
      //     sideBar.classList.add('transform-x')
      //     layoutWrapper.classList.remove('main-container_transform-x')
      //   }
      //   if (id === 'mode-view-sidebar-2') {
      //     layoutWrapper.classList.add('main-container_transform-x')
      //     sideBar.classList.remove('transform-x')
      //   }
      //   if (id === 'mode-view-sidebar-3') {
      //     layoutWrapper.classList.add('main-container_transform-x')
      //     sideBar.classList.add('transform-x')
      //   }
      // }
      // if (event.target.className === 'sidebar-toggle_pinned') {

      // }

      switch (className) {
        case 'radio-btn__input':
          console.log(event.target.id)
          const id = event.target.id
          const layoutWrapper = document.querySelector('.layout-wrapper')
          if (id === 'mode-view-sidebar-1') {
            sideBar.classList.add('transform-x')
            layoutWrapper.classList.remove('main-container_transform-x')
          }
          if (id === 'mode-view-sidebar-2') {
            layoutWrapper.classList.add('main-container_transform-x')
            sideBar.classList.remove('transform-x')
          }
          if (id === 'mode-view-sidebar-3') {
            layoutWrapper.classList.add('main-container_transform-x')
            sideBar.classList.add('transform-x')
          }
          break

        case 'sidebar-toggle_pinned':
          console.log('sidebar-toggle_pinned')
          break

        case 'sidebar-toggle':
          console.log('sidebar-toggle')
          break
      }

      // $tableWidth 768px
      const layout = document.querySelector('.layout-wrapper')
      const dataAttr = event.target.dataset
      console.log(document.documentElement.clientWidth)

      if (dataAttr.autoCloseSidebar === 'true') {
        if (layout.dataset.sidebarActive === 'true') layout.dataset.sidebarActive = 'false'
        else layout.dataset.sidebarActive = 'true'
        return
      }
      // if (!layout.matches('.pinned')) layout.dataset.sidebarActive = 'false'
    }
  }
}
</script>

<style lang="sass">
.sidebar
  position: relative
  white-space: nowrap
  user-select: none
  // color: #242424

  // общее
  &-main
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 0
    width: 100%
    height: 100%
    overflow-x: hidden
    padding-top: 2rem

  .temp a
    display: block

</style>
