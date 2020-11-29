<template>
  <div style="position: relative" class="bg">
    <div class="container">
      <div class="menu">
        <a href="/challenges/">Главная</a>
        <a href="/challenges/create">Создать ch</a>
        <a href="/challenges/addprogress">Добавить прогресс</a>
      </div>
      <Nuxt />
    </div>
    <TeleportMenu/>
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
$height-header: 5.1rem

// .bg
//   @include backgroundShorthandWithExternalVar('challenges/kaspar-allenbach-w9QgdJ3lAPU-unsplash.jpg', center)

.container
  padding-top: calc(#{$height-header} + 3rem)
.menu
  position: fixed
  z-index: 9999
  top: 0
  left: 0
  right: 0
  height: $height-header
  background-color: #fff
  border-bottom: 1px solid #e6e6e6
  display: flex
  justify-content: center
  align-items: center
  a
    color: #909399
    height: $height-header
    line-height: $height-header
    padding: 0 1.5rem
    &:hover
      border-bottom: 2px solid #409EFF

</style>
