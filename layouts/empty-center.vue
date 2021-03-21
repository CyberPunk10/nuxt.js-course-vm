<template>
  <div style="position: relative">
    <div class="empty-center-layout">
      <Nuxt class="container" />
    </div>
    <TeleportMenu />
  </div>
</template>

<script>
export default {
  name: 'empty-center', // Иначе ошибка: [Vue warn]: Invalid component name: "layouts/layout-main-challenges.vue". Component names should conform to valid custom element name in html5 specification.
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

<style lang="sass" scoped>
.empty-center-layout
  height: 100vh
  display: flex
  justify-content: center
  align-items: center
  width: 100%
</style>
