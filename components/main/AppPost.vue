<template>
  <el-card
    shadow="hover"
    :body-style="{padding: 0}"
    class="post"
  >
    <header
      slot="header"
      class="post-header"
    >
      <h3>{{post.title}}</h3>
      <small>
        <i class="el-icon-time"></i>
        {{new Date(post.date).toLocaleString()}}
      </small>
    </header>

    <div class="post-body">
      <img
        :src="post.imageUrl"
        alt="Post image"
        class="post-img"
      >
    </div>

    <footer class="post-footer">
      <el-button round @click="openPost">Открыть</el-button>

      <span>
        <i class="el-icon-message"></i>
        {{post.comments.length}}
      </span>
    </footer>
  </el-card>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      requeired: true
    }
  },
  methods: {
    openPost() {
      const id = this.post._id
      this.$router.push(`/post/${id}`)
    }
  }
}
</script>

<style lang="sass" scoped>
  .post
    // height: 200px
    margin-bottom: 1.5rem

    &-header
      display: flex
      justify-content: space-between
      align-items: center

    img
      width: 100%
      height: auto

    &-footer
      padding: 1rem
      display: flex
      justify-content: space-between
      align-items: center


</style>
