<template>
  <article class="post">
    <header class="post-header">
      <div class="post-title">
        <h1>{{post.title}}</h1>
        <nuxt-link to="/">
          <i class="el-icon-back"></i>
        </nuxt-link>
      </div>
      <div class="post-info">
        <small>
          <i class="el-icon-time"></i>
          {{post.date | date}}
        </small>
        <small>
          <i class="el-icon-view"></i>
          {{post.views}}
        </small>
      </div>
      <div class="post-image">
        <img
          :src="post.imageUrl"
          alt="Post image"
          class="post-img"
        >
      </div>
    </header>
    <main class="post-content">
      <vue-markdown>{{post.text}}</vue-markdown>
    </main>
    <footer>
      <AppCommentForm
        v-if="canAddComment"
        @created="crateCommentHandler"
        :postId="post._id"
      />
      <div class="comments" v-if="true">
        <AppComment
          v-for="comment in post.comments"
          :key="comment._id"
          :comment="comment"
        />
      </div>
      <p class="text-center" v-else>
        Комментариев нет
      </p>
    </footer>
  </article>
</template>

<script>
export default {
  head() {
    return {
      title: `${this.post.title} | ${process.env.appName}`
    }
  },

  async asyncData({ store, params }) {
    const post = await store.dispatch('post/fetchById', params.id)
    await store.dispatch('post/addView', post)
    return {
      post: {...post, views: ++post.views}
    }
  },
  data() {
    return {
      canAddComment: true
    }
  },
  validate({params}) {
    return Boolean(params.id)
  },
  methods: {
    crateCommentHandler(comment) {
      this.post.comments.unshift(comment)
      this.canAddComment = false
    }
  }
}
</script>

<style lang="sass" scoped>
.post
  max-width: 600px
  margin: 0 auto
  &-title
    display: flex
    justify-content: space-between
    align-items: center
    margin-bottom: 1rem

  &-info
    display: flex
    justify-content: space-between
    align-items: center
    margin-bottom: 0.5rem

  &-image img
    width: 100%
    height: auto
  &-header
    margin-bottom: 1.5rem
  &-content
    margin-bottom: 2rem
</style>
