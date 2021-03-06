<template>
  <header
    @click="clickHeader"
  >
    <div class="header-for-sidebar">
      <button class="sidebar-toggle" data-btn="sidebar-toggle">
        <svg class="btn-open-sidebar" data-btn="sidebar-toggle" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <rect data-btn="sidebar-toggle" y="9" width="20" height="2"></rect>
          <rect data-btn="sidebar-toggle" y="3" width="20" height="2"></rect>
          <rect data-btn="sidebar-toggle" y="15" width="20" height="2"></rect>
        </svg>
        <svg class="btn-close-sidebar" data-btn="sidebar-toggle" width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
          <path data-btn="sidebar-toggle" d="M231.6 256l130.1-130.1c4.7-4.7 4.7-12.3 0-17l-22.6-22.6c-4.7-4.7-12.3-4.7-17 0L192 216.4 61.9 86.3c-4.7-4.7-12.3-4.7-17 0l-22.6 22.6c-4.7 4.7-4.7 12.3 0 17L152.4 256 22.3 386.1c-4.7 4.7-4.7 12.3 0 17l22.6 22.6c4.7 4.7 12.3 4.7 17 0L192 295.6l130.1 130.1c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17L231.6 256z"></path>
        </svg>
        <i class="fas fa-arrow-right" data-btn="sidebar-toggle"></i>
        <i class="fas fa-arrow-left" data-btn="sidebar-toggle"></i>
      </button>
    </div>

    <div class="header-main">
      <NuxtLink to="/challenges" class="navbar-brand">
        <svg viewBox="0 0 200 60" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope ytd-topbar-logo-renderer" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g viewBox="0 0 200 60" preserveAspectRatio="xMidYMid meet" class="style-scope ytd-topbar-logo-renderer"><g class="style-scope ytd-topbar-logo-renderer"><path fill="#FF0000" d="M63,14.87c-0.72-2.7-2.85-4.83-5.56-5.56C52.54,8,32.88,8,32.88,8S13.23,8,8.32,9.31 c-2.7,0.72-4.83,2.85-5.56,5.56C1.45,19.77,1.45,30,1.45,30s0,10.23,1.31,15.13c0.72,2.7,2.85,4.83,5.56,5.56 C13.23,52,32.88,52,32.88,52s19.66,0,24.56-1.31c2.7-0.72,4.83-2.85,5.56-5.56C64.31,40.23,64.31,30,64.31,30 S64.31,19.77,63,14.87z" class="style-scope ytd-topbar-logo-renderer"></path><polygon fill="#FFFFFF" points="26.6,39.43 42.93,30 26.6,20.57" class="style-scope ytd-topbar-logo-renderer"></polygon></g><g class="style-scope ytd-topbar-logo-renderer"><g id="youtube-paths" class="style-scope ytd-topbar-logo-renderer"><path fill="#282828" d="M92.69,48.03c-1.24-0.84-2.13-2.14-2.65-3.91c-0.52-1.77-0.79-4.12-0.79-7.06v-4 c0-2.97,0.3-5.35,0.9-7.15c0.6-1.8,1.54-3.11,2.81-3.93c1.27-0.82,2.94-1.24,5.01-1.24c2.04,0,3.67,0.42,4.9,1.26 c1.23,0.84,2.13,2.15,2.7,3.93c0.57,1.78,0.85,4.16,0.85,7.12v4c0,2.94-0.28,5.3-0.83,7.08c-0.55,1.78-1.45,3.09-2.7,3.91 c-1.24,0.82-2.93,1.24-5.06,1.24C95.65,49.29,93.93,48.87,92.69,48.03z M99.66,43.71c0.34-0.9,0.52-2.37,0.52-4.4v-8.59 c0-1.98-0.17-3.42-0.52-4.34c-0.34-0.91-0.95-1.37-1.82-1.37c-0.84,0-1.43,0.46-1.78,1.37c-0.34,0.91-0.52,2.36-0.52,4.34v8.59 c0,2.04,0.16,3.51,0.49,4.4c0.33,0.9,0.93,1.35,1.8,1.35C98.71,45.06,99.31,44.61,99.66,43.71z" class="style-scope ytd-topbar-logo-renderer"></path><path fill="#282828" d="M188.16,37.13v1.39c0,1.77,0.05,3.09,0.16,3.98c0.1,0.88,0.32,1.53,0.65,1.93 c0.33,0.4,0.84,0.61,1.53,0.61c0.93,0,1.57-0.36,1.91-1.08c0.34-0.72,0.53-1.92,0.56-3.6l5.35,0.31 c0.03,0.24,0.04,0.57,0.04,0.99c0,2.55-0.7,4.45-2.09,5.71c-1.39,1.26-3.36,1.89-5.91,1.89c-3.06,0-5.2-0.96-6.43-2.88 c-1.23-1.92-1.84-4.88-1.84-8.9v-4.81c0-4.14,0.64-7.15,1.91-9.06c1.27-1.9,3.45-2.85,6.54-2.85c2.13,0,3.76,0.39,4.9,1.17 c1.14,0.78,1.94,1.99,2.41,3.64c0.46,1.65,0.7,3.93,0.7,6.83v4.72H188.16z M188.95,25.53c-0.31,0.39-0.52,1.03-0.63,1.91 c-0.11,0.88-0.16,2.23-0.16,4.02v1.98h4.54v-1.98c0-1.77-0.06-3.11-0.18-4.02c-0.12-0.91-0.34-1.56-0.65-1.93 c-0.31-0.37-0.8-0.56-1.46-0.56C189.75,24.94,189.26,25.14,188.95,25.53z" class="style-scope ytd-topbar-logo-renderer"></path><path fill="#282828" d="M77.59,36.61l-7.06-25.49h6.16l2.47,11.55c0.63,2.85,1.09,5.27,1.39,7.28h0.18 c0.21-1.44,0.67-3.85,1.39-7.24l2.56-11.6h6.16L83.7,36.61v12.23h-6.11V36.61z" class="style-scope ytd-topbar-logo-renderer"></path><path fill="#282828" d="M126.45,21.28v27.55h-4.85l-0.54-3.37h-0.13c-1.32,2.55-3.3,3.82-5.93,3.82c-1.83,0-3.18-0.6-4.05-1.8 c-0.87-1.2-1.3-3.07-1.3-5.62V21.28h6.2v20.23c0,1.23,0.13,2.11,0.4,2.63c0.27,0.52,0.72,0.79,1.35,0.79 c0.54,0,1.06-0.16,1.55-0.49c0.49-0.33,0.86-0.75,1.1-1.26V21.28H126.45z" class="style-scope ytd-topbar-logo-renderer"></path><path fill="#282828" d="M158.27,21.28v27.55h-4.85l-0.54-3.37h-0.13c-1.32,2.55-3.3,3.82-5.93,3.82c-1.83,0-3.18-0.6-4.05-1.8 c-0.87-1.2-1.3-3.07-1.3-5.62V21.28h6.2v20.23c0,1.23,0.13,2.11,0.4,2.63c0.27,0.52,0.72,0.79,1.35,0.79 c0.54,0,1.06-0.16,1.55-0.49c0.49-0.33,0.86-0.75,1.1-1.26V21.28H158.27z" class="style-scope ytd-topbar-logo-renderer"></path><path fill="#282828" d="M143.31,16.11h-6.16v32.72h-6.07V16.11h-6.16v-4.99h18.38V16.11z" class="style-scope ytd-topbar-logo-renderer"></path><path fill="#282828" d="M178.8,25.69c-0.38-1.74-0.98-3-1.82-3.78c-0.84-0.78-1.99-1.17-3.46-1.17c-1.14,0-2.2,0.32-3.19,0.97 c-0.99,0.64-1.75,1.49-2.29,2.54h-0.05l0-14.52h-5.98v39.11h5.12l0.63-2.61h0.13c0.48,0.93,1.2,1.66,2.16,2.2 c0.96,0.54,2.02,0.81,3.19,0.81c2.1,0,3.64-0.97,4.63-2.9c0.99-1.93,1.48-4.95,1.48-9.06v-4.36 C179.36,29.84,179.17,27.43,178.8,25.69z M173.11,36.93c0,2.01-0.08,3.58-0.25,4.72c-0.16,1.14-0.44,1.95-0.83,2.43 c-0.39,0.48-0.91,0.72-1.57,0.72c-0.51,0-0.98-0.12-1.42-0.36c-0.43-0.24-0.79-0.6-1.06-1.08V27.71 c0.21-0.75,0.57-1.36,1.08-1.84c0.51-0.48,1.06-0.72,1.66-0.72c0.63,0,1.12,0.25,1.46,0.74c0.34,0.49,0.58,1.33,0.72,2.49 c0.13,1.17,0.2,2.83,0.2,4.99V36.93z" class="style-scope ytd-topbar-logo-renderer"></path></g></g></g></svg>
      </NuxtLink>

      <div class="header-user-block"
        data-header-user-block-menu-active="false"
        @click="clickHeaderUserBlock"
      >
        <NuxtLink v-if="!isAuthTest" to="/challenges/login" class="btn btn-link">
          Войти
        </NuxtLink>
        <NuxtLink v-if="!isAuthTest" to="/challenges/register-user" class="btn btn-link mobile-hidden">
          Регистрация
        </NuxtLink>

        <button v-if="isAuthTest" class="btn-avatar button-default-style-none">
          <span class="btn btn-link mobile-hidden">
            Cyberpunk10
          </span>
          <div class="user-avatar-wrap" >
            <img id="user-avatar" class="user-avatar" alt="Фото профиля" height="32" width="32" src="https://avatars.githubusercontent.com/u/59876378?s=60&v=4">
          </div>
        </button>

        <div class="header-user-block-menu">
          <SidenavItemOnlyLink
            v-for="(link, index) in headerUserAvatarMenuLinks"
            :key="link.name + index"
            :link="link"
          />
          <div v-if="isAuthTest"
            class="sidenav__nav-item-wrap"
            data-btn-logout="true"
          >
            <div class="sidenav__nav-item" data-btn-logout="true">
              <i class="fas fa-sign-in-alt" data-btn-logout="true"></i>
              <span class="sidenav__nav-item-text" data-btn-logout="true">Выйти</span>
            </div>
          </div>

          <div class="separator"></div>

          <div v-if="isAuthTest"
            class="sidenav__nav-item-wrap"
            data-btn-logout="true"
          >
            <div class="sidenav__nav-item" data-btn-logout="true">
              <i class="fas fa-sign-in-alt" data-btn-logout="true"></i>
              <span class="sidenav__nav-item-text" data-btn-logout="true">Темная тема</span>
            </div>
          </div>
          <div v-if="isAuthTest"
            class="sidenav__nav-item-wrap"
            data-btn-logout="true"
          >
            <div class="sidenav__nav-item" data-btn-logout="true">
              <i class="fas fa-sign-in-alt" data-btn-logout="true"></i>
              <span class="sidenav__nav-item-text" data-btn-logout="true">Темная тема</span>
            </div>
          </div>

        </div>

      </div>
    </div>

  </header>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  computed: {
    headerUserAvatarMenuLinks () {
      return this.$store.getters['sidebarLayoutChellanges/headerUserAvatarMenuLinks']
    },
    isAuthTest() {
      return this.$store.getters['auth/isAuthenticated']
    }
  },
  methods: {
    clickHeader: function(event) {
      const layout = document.querySelector('.layout-wrapper')
      const dataAttr = event.target.dataset

      if (dataAttr.btn === 'sidebar-toggle') {
        // if (layout.dataset.sidebarActive === 'true') layout.dataset.sidebarActive = 'false'
        // else layout.dataset.sidebarActive = 'true'
        this.$store.dispatch('sidebarLayoutChellanges/toggleSidebar')
        return
      }

      if (!event.target.matches('.header-for-sidebar')) {
        // layout.dataset.sidebarActive = 'false'
        this.$store.dispatch('sidebarLayoutChellanges/closeSidebar')
      }

      if (dataAttr.btnLogout === 'true') {
        this.$store.dispatch('auth/logout')
        // this.$router.push('/admin/login?message=logout')
        this.$router.push('/challenges/login?message=logout')
      }
    },

    // можно убрать эту работающую функцию и сотавить только hover
    clickHeaderUserBlock(event) {
    //   const userBlock = event.target.closest('.header-user-block')
    //   if (userBlock) {
    //     if (userBlock.dataset.headerUserBlockMenuActive === 'true') userBlock.dataset.headerUserBlockMenuActive = 'false'
    //     else userBlock.dataset.headerUserBlockMenuActive = 'true'
    //   }
    }
  }
}
</script>

<style lang="sass">
header
  position: relative
  height: $header-height
  user-select: none
  background-color: #fff
  // border-bottom: 1px solid $color-border-default
  box-shadow: 0 0 2px rgba(88,88,88,.15)
  z-index: 9
  @media screen and (max-width: calc(#{$phoneWidth} - 1px)) // < 480px
    box-shadow: 0 0 4px rgba(88,88,88,.15)

  .header-for-sidebar,
  .header-main
    position: absolute
    height: 100%
    top: 0
    transition: $transitionDefault

  .header-for-sidebar
    left: 0
    width: $sidebarWidthIcon
    display: flex
    justify-content: space-between
    @media screen and (min-width: $tableWidth)
      top: $header-height
      height: 4rem
      padding-top: .5rem

    .sidebar-toggle
      min-width: $sidebarWidthIcon
      width: $sidebarWidthIcon
      height: 100%
      padding: 0
      background-color: transparent
      border: none
      font-size: 1.4rem
      svg, i
        fill: $color-text-grey
        color: $color-text-grey
        transition: fill .2s ease
        width: 100%
      &:hover
        svg
          fill: $theme-color-main
        i
          color: $color-text-grey
      i, .btn-close-sidebar
        display: none
      svg
        @media screen and (min-width: $tableWidth)
          display: none
      .fa-arrow-right
        @media screen and (min-width: $tableWidth)
          display: block
      i
        color: #ccc
        transition: color .1s ease

  .header-main
    right: 0
    left: $sidebarWidthIcon
    display: grid
    grid: 100% / calc(100% - #{$sidebarWidthIcon}) $sidebarWidthIcon // row/col
    @media screen and (min-width: $phoneWidth)
      grid: 100% / auto max-content // row/col
    @media screen and (min-width: $tableWidth)
      left: 0

    // logo
    .navbar-brand
      line-height: $header-height
      width: 8rem
      margin-left: calc((100% - 8rem) / 2)
      transition: $transitionDefault
      @media screen and (min-width: $phoneWidth)
        margin-left: 1rem
      @media screen and (min-width: $tableWidth)
        margin-left: 2rem
      @media screen and (min-width: $desktopWidth)
        margin-left: 10rem


    // .header-user-block
    .header-user-block
      display: flex
      justify-content: space-between
      align-items: center
      &[data-header-user-block-menu-active="true"],
      &:hover
        .header-user-block-menu
          display: block

      .btn.btn-link
        padding: 0 0.5rem
        margin: 0 .5rem
        height: 100%
        display: flex
        justify-content: space-between
        align-items: center
        font-size: 1.4rem
        text-transform: none // возможно стоит изменить в источнике
        color: $color-dark-shade-75
        &.mobile-hidden
          @media screen and (max-width: calc(#{$phoneWidth} - 1px)) // < 480px
            display: none
        // i
        //   font-size: 20px
        //   padding: 1rem
        //   color: $color-text-grey
          // @media screen and (max-width: calc(#{$phoneWidth} - 1px)) // < 480px
          //   display: none

      .btn-avatar
        display: flex
        justify-content: center
        align-items: center
        height: 100%
        text-align: left
        .btn
          margin: 0
        .user-avatar-wrap
          width: $sidebarWidthIcon
          text-align: center
          .user-avatar
            border-radius: 50%

      .header-user-block-menu
        display: none
        position: absolute
        right: 1.2rem
        top: 4.6rem
        background-color: $color-green
        background-color: #fff
        width: 21rem
        border-radius: $borderRadius
        padding: $sidebar-marginItem 0
        padding-bottom: calc(#{$sidebar-marginItem} - 2px) // last item margin-bottom = 2px
        box-shadow: 1px 1px 8px rgba(88, 88, 88, 0.2)
        .separator
          padding-top: 1rem
          margin: 1rem 1rem 0
          width: calc(100% - 2rem)
          border-top: 1px solid $color-border-default


// if show sidebar:
.layout-wrapper[data-sidebar-active="true"]
  header
    .header-for-sidebar
      .sidebar-toggle .btn-open-sidebar
        display: none
      .sidebar-toggle .btn-close-sidebar
        display: flex
      @media screen and (min-width: $tableWidth)
        width: $sidebarWidth
        .sidebar-toggle .btn-close-sidebar,
        .fa-arrow-right
            display: none
        .fa-arrow-left
            display: block


</style>
