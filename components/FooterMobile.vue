<template>
  <div class="footer-mobile"
    @click="clickFooterMobile"
  >
    <template
      v-for="(link, index) in navLinks"
    >
      <NuxtLink :to="link.url" class="navbar-brand"
        :key="index"
      >
        <i :class="link.icon"></i>
      </NuxtLink>
    </template>
  </div>
</template>

<script>
export default {
  computed: {
    navLinks () {
      return this.$store.getters['sidebarLayoutChellanges/footerMobileLinks']
    }
  },
  methods: {
    clickFooterMobile: function(event) {
      const layout = document.querySelector('.layout-wrapper')

      layout.dataset.sidebarActive = 'false'
    }
  }
}
</script>

<style lang="sass">
.footer-mobile
  display: flex
  justify-content: space-around
  align-items: center
  // border-top: 1px solid $color-border-default
  box-shadow: 0 0 2px rgba(88,88,88,.15)
  @media screen and (max-width: calc(#{$phoneWidth} - 1px)) // < 480px
    border-top-left-radius: $borderRadiusBig
    border-top-right-radius: $borderRadiusBig
    box-shadow: 0 0 4px rgba(88,88,88,.15)
  .navbar-brand
    line-height: $header-height
    text-align: center
    font-weight: bold
    font-size: 2rem
    color: $color-purple
    color: $color-text-grey
    width: 100%
  .nuxt-link-exact-active
    i, span
      color: #30a14e
      color: $color-purple
      color: $theme-color-main
      color: lighten($theme-color-main, 15%)

      // color: #FF0000

</style>
