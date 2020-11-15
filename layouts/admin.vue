<template>
  <div>
    <el-container class="admin-layout-wrap">
      <el-aside width="200px">
        <AppAside />
      </el-aside>
      <el-main>
        <Nuxt />
      </el-main>
    </el-container>
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
.admin-layout-wrap
  height: 100vh
</style>
