<template>
  <div class="empty-layout">
    <Nuxt />
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
.empty-layout
  display: flex
  justify-content: center
  align-items: center
  width: 100%
  padding-top: 5rem
</style>
