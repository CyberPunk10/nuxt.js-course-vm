<template>
  <el-row type="flex" justify="center">
    <el-col :xs="24" :sm="18" :md="12" :lg="10">
      <AppPost
        v-for="post in 3" :key="post"
      />
    </el-col>
  </el-row>
</template>

<script>
export default {
  head: {
    title: 'Main'
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
}
</style>
