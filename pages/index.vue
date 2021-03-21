<template>
  <div class="container-flex-blog">
    <AppPost
      v-for="post in posts"
      :key="post._id"
      :post="post"
      class="container-elem"
    />
  </div>
</template>

<script>
export default {
  head: {
    title: `Главная | ${process.env.appName}`
  },
  layout: 'layout-main-challenges',

  async asyncData({ store }) {
    const posts = await store.dispatch('post/fetch')
    return { posts }
  }
}
</script>

<style lang="sass">
.container-flex-blog
  display: flex
  flex-wrap: wrap
  justify-content: space-around
  .container-elem
    max-width: 50rem
    width: 100%


</style>
