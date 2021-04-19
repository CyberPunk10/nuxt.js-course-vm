<template>
  <el-card
    shadow="hover"
    :body-style="{padding: 0}"
    class="post"
  >
    <header class="post-header">
      <h2>{{post.title}}</h2>
      <span>
        <i class="el-icon-time"></i>
        {{post.date | date('date')}}
      </span>
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

    &-header,
    &-footer
      display: flex
      justify-content: space-between
      align-items: center
      padding: 1rem
      h2
        font-size: 1.1em
      span
        font-size: .9em
        white-space: nowrap // запрет переноса строк

      @media screen and (max-width: calc(#{$smPhoneWidth} - 1px)) // < 320px
        padding: .5rem

      @media screen and (min-width: $phoneWidth) // >= 480px
        padding: 2rem
        h2
          font-size: 1.4em
        span
          font-size: 1em

    img
      width: 100%
      height: auto



</style>
