<template>
  <aside
    class="sidebar active"
    @click="handleClickSidebar"
  >

    <div class="sidebar-header d-flex align-items-center">

      <!-- <button class="sidebar-toggle"
        data-btn="sidebar-toggle"
      >
        <svg data-btn="sidebar-toggle" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <rect data-btn="sidebar-toggle" y="9" width="20" height="2"></rect>
          <rect data-btn="sidebar-toggle" y="3" width="20" height="2"></rect>
          <rect data-btn="sidebar-toggle" y="15" width="20" height="2"></rect>
        </svg>
        <span data-btn="sidebar-toggle">Меню</span>
      </button> -->

      <a href="#" class="navbar-brand">

      </a>

      <!-- <button class="sidebar-toggle_pinned"
        data-btn="sidebar-toggle"
      >
        <i class="fas fa-map-pin"></i>
        <span data-btn="sidebar-toggle">Закрепить меню</span>
      </button> -->

    </div>

    <div class="sidebar-main
                layout-scrollbar-sidebar-transparent
                layout-cell-sidebar-transparent
               "
    >

      <div class="sidenav">
        <Sidenav
          v-for="(link, index) in sidebarLinks"
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


        <!-- <div class="sidebar-settings">
          <RadioBtn class="comp-radioBtn" name="mode-view-sidebar" id="mode-view-sidebar-1" title="Sidebar not static and top" />
          <RadioBtn class="comp-radioBtn" name="mode-view-sidebar" id="mode-view-sidebar-2" isChecked title="Main-container not static and static Sidebar" />
          <RadioBtn class="comp-radioBtn" name="mode-view-sidebar" id="mode-view-sidebar-3" title="Main-container not static"/>
        </div> -->

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
    sidebarLinks () {
      return this.$store.state.sidebarLayoutChellanges.sidebarLinks
    }
  },
  methods: {
    handleClickSidebar: function(event) {
      console.log('click on Sidebar', event.target)
      const sideBar = document.querySelector('.sidebar')
      if (event.target.className === 'radio-btn__input') {
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
      }
      if (event.target.className === 'sidebar-toggle_static') {

      }
    }
  }
}
</script>

<style lang="sass">
.sidebar
  position: relative
  white-space: nowrap

  // общее
  &-header,
  &-main
    position: absolute
    left: 0
    right: 0
    bottom: 0
    width: 100%

  &-header
    top: 0
    height: $height-header
    overflow: hidden
  &-main
    top: $height-header
    height: calc(100% - #{$height-header})
    overflow-x: hidden

  // header
  &-header
    .sidebar-toggle
      display: flex
      justify-content: center
      align-items: center
      box-sizing: border-box
      height: 100%
      width: 10rem
      padding: 0 1rem
      background-color: transparent
      border: none
      font-size: 1.4rem
      white-space: nowrap // запрет переноса строк
      span
        padding-left: 1rem


  .sidebar-settings
    padding: 1rem 2.4rem
    display: block !important
    white-space: normal


</style>
