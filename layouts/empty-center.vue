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
