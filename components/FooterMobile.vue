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
  border-top: 1px solid $color-border-default
  .navbar-brand
    line-height: $height-header
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
      // color: #FF0000

</style>
