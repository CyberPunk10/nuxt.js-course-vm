<template>
  <div>
    <div class="container-flex-blog">
      <AppPost
        v-for="post in posts"
        :key="post._id"
        :post="post"
        class="container-elem"
      />
    </div>
    <NuxtLink
      to="/mockup/create"
      class="create-new-post link-typical"
    >Создать новый пост</NuxtLink>
  </div>
</template>

<script>
export default {
  head: {
    title: `Главная | ${process.env.appName}`
  },
  layout: 'layout-main-challenges',

  async asyncData({ store }) {
    const posts = await store.dispatch('post.actions/fetch')
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
.create-new-post
  display: flex
  justify-content: center
</style>
