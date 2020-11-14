<template>
  <el-row type="flex" justify="center">
    <el-col :xs="24" :sm="18" :md="12" :lg="10">
      <AppPost
        v-for="post in posts"
        :key="post._id"
        :post="post"
      />
    </el-col>
  </el-row>
</template>

<script>
export default {
  head: {
    title: `Главная | ${process.env.appName}`
  },

  async asyncData({ store }) {
    const posts = await store.dispatch('post/fetch')
    return { posts }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
}
</style>
