<template>
  <aside
    class="sidebar active"
    @click="handleClickSidebar"
  >

    <div class="sidebar-main layout-scrollbar-sidebar-transparent layout-cell-sidebar-transparent">

      <div class="sidenav">
        <Sidenav
          v-for="(link, index) in navLinks"
          :key="link.name + index"
          :link="link"
        >
          <Sidenav
            v-for="(sublink, index) in link.children"
            :key="sublink.name + index"
            :link="sublink"
          >
          </Sidenav>
        </Sidenav>
      </div>

      <div class="navbar-inner">




        <!-- <hr class="my-3">

        <h6 class="navbar-heading p-0 text-muted">Documentation</h6>
        <ul class="navbar-nav mb-md-3">
          <li class="nav-item"><a href="#" rel="noopener" class="nav-link"><i class="ni ni-spaceship"></i> <span class="nav-link-text">Getting started</span></a></li>
          <li class="nav-item"><a href="#" rel="noopener" class="nav-link"><i class="ni ni-palette"></i> <span class="nav-link-text">Foundation</span></a></li>
          <li class="nav-item"><a href="#" rel="noopener" class="nav-link"><i class="ni ni-ui-04"></i> <span class="nav-link-text">Components</span></a></li>
          <li class="nav-item"><a href="#" rel="noopener" class="nav-link"><i class="ni ni-chart-pie-35"></i> <span class="nav-link-text">Plugins</span></a></li>
        </ul> -->
      </div>

      <!-- <a
        href="#"
        class="btn btn-sm btn-danger btn-icon mx-sm-5 mb-2 d-none d-md-block"
        ><span class="btn-inner--icon"
          ><i class="fas fa-download mr-2"></i
        ></span>
        <span class="nav-link-inner--text">Upgrade to PRO</span></a
      >
      <a
        href="#"
        class="btn btn-sm btn-neutral btn-icon mx-sm-5 mb-2 d-none d-md-block"
        ><span class="btn-inner--icon"><i class="fas fa-file-alt"></i></span>
        <span class="nav-link-inner--text">Documentation</span></a
      >
      <a
        href="#"
        class="btn btn-sm btn-info btn-icon mx-sm-5 mb-2 d-none d-md-block"
        ><span class="btn-inner--icon"><i class="fas fa-gift"></i></span>
        <span class="nav-link-inner--text">Download now</span></a
      >
      <a
        href="#"
        class="btn btn-sm btn-dark btn-icon mx-sm-5 mb-2 d-none d-md-block"
        ><span class="btn-inner--icon"><i class="fab fa-github"></i></span>
        <span class="nav-link-inner--text">Star us on Github</span></a
      > -->
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
    }
  }
}
</script>

<style lang="sass">
.sidebar
  position: relative
  white-space: nowrap
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

</style>
