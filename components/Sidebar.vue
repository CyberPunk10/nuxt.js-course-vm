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

        <div class="separator"></div>

        <SidenavItemOnlyLink
          v-for="(link, index) in navLinks"
          :key="link.name + index"
          :link="link"
        />
      </div>

      <div
        class="separator"
        v-if="isDeveloper"
      >
      </div>

      <div
        class="sidenav__nav-item-wrap"
        v-if="isDeveloper"
      >
        <p class="sidenav__nav-item">
          <i class="fa heart"></i>
          <span class="sidenav__nav-item-text">Current route: {{ bodyClass }}</span>
        </p>
      </div>

      <!-- <div>
        <i class="fas fa-download mr-2"></i>
        <i class="fas fa-file-alt"></i>
        <i class="fas fa-gift"></i>
        <i class="fab fa-github"></i>
      </div>

      <div class="separator"></div> -->

      <div
        class="reklamaF"
        v-if="isDeveloper"
      >
        <div class="content">
          <!-- <p>Здесь может быть ваша реклама</p>
          <p>Реклама челленджей</p> -->
        </div>
      </div>

    </div>

  </aside>
</template>

<script>
export default {
  computed: {
    navLinks() {
      return this.$store.getters['sidebarLayoutChallenges/sidenavLinks']
    },

    bodyClass() {
      return this.$store.getters['class/bodyClassCurrent']
    },

    isDeveloper() {
      return this.$store.getters['authStore/isDeveloper']
    }
  },

  methods: {
    handleClickSidebar: function (event) {
      // console.log('click on Sidebar', event.target)
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

      switch (className) {
        case 'radio-btn__input':
          // console.log(event.target.id)
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

        case 'sidebar-toggle':
          console.log('sidebar-toggle')
          break
      }

      // $tabletWidth 768px
      // console.log(document.documentElement.clientWidth)
      if (document.documentElement.clientWidth < 768) {
        if (event.target.closest('a')) {
          this.$store.dispatch('sidebarLayoutChallenges/closeSidebar')
        }
      }

    }
  }
}
</script>

<style lang="sass">
.sidebar
  position: relative
  white-space: nowrap
  user-select: none
  // background-color: $color-bg-sidebar

  // общее
  &-main
    position: absolute
    top: 0
    left: 0
    right: 4px // for box-shadow
    bottom: 0
    overflow-x: hidden
    padding-top: 1.7rem

    background-color: #fff
    // background-color: $color-bg-body
    // @include linear-gradient($direction: 200deg, $fromColor: #a4adf0, $toColor: #787fc5)
    border-radius: $borderRadius
    // border-radius: 1.2rem
    // border: 1px solid $color-border-default
    // border-left: none
    box-shadow: 0 0 2px rgba(88,88,88,.15)
    transition: $transitionDefault
    // &:hover
    //   background-color: #fff

    @media screen and (min-width: $phoneWidth)
      border-top-left-radius: 0
      border-bottom-left-radius: 0

    .separator
      padding-top: 1rem
      margin: 1rem $sidebar-marginItem 0
      width: calc(100% - 2 * #{$sidebar-marginItem})
      border-top: 1px solid $color-border-default
      // border-top: 1px solid transparent

    .sidenav
      transition: $transitionDefault
      .separator
        display: none
    //     padding-top: 0
    //     margin-top: 0
    //     width: 100%
    //     border-top: 1px solid transparent
        transition: $transitionDefault

    .reklamaF
      display: flex
      align-items: center
      // justify-content: center
      min-height: 10rem
      margin: $sidebar-marginItem
      padding: 1rem
      overflow: hidden
      border: 1px solid $color-border-default
      border-radius: $borderRadius

    @media screen and (min-width: $tabletWidth)
      .sidenav
        margin-top: 1.8rem
        .separator
          display: block

// show
// .layout-wrapper[data-sidebar-active="true"]
//   .sidebar-main
    // border-top-right-radius: 0
    // border-top: none
    // margin-top: 0
    // padding-top: 2.5rem
    // height: calc(100% - .5rem - 2px)
</style>
