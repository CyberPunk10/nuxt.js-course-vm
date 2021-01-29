<template>
  <div class="footer-mobile">
    <template
      v-for="(link, index) in navLinks"
    >
      <NuxtLink :to="link.url" class="navbar-brand"
        :key="link.name + index"
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
}
</script>

<style lang="sass">
.footer-mobile
  display: flex
  justify-content: space-around
  align-items: center
  .navbar-brand
    line-height: $height-header
    text-align: center
    font-weight: bold
    font-size: 2rem
    color: $color-purple
    width: 100%

</style>
