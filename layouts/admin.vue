<template>
  <el-container class="admin-layout-wrap">
    <el-aside width="200px">
      <AppAside />
    </el-aside>
    <el-main>
      <Nuxt />
    </el-main>
  </el-container>
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>
.admin-layout-wrap
  height: 100vh
</style>
