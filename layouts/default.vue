<template>
  <div>
    <el-container>
      <el-header>
        <AppNavigation />
      </el-header>

      <el-main>
        <Nuxt />
      </el-main>

      <el-footer />
    </el-container>
    <TeleportMenu/>
  </div>
</template>

<style lang="sass" scoped>
.el-header
  padding: 0
  border-bottom: 1px solid #e6e6e6
  box-sizing: content-box

</style>
