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
      <h3>Post title</h3>
      <small>
        <i class="el-icon-time"></i>
        {{new Date().toLocaleString()}}
      </small>
    </header>

    <div class="post-body">
      <img
        src="https://img-s1.onedio.com/id-5b979e50e18b36f32143ba30/rev-0/raw/s-7a3af757103396c79d519de4c7db9ff06627c421.jpg"
        alt="Post image"
        class="post-img"
      >
    </div>

    <footer class="post-footer">
      <el-button round @click="openPost">Открыть</el-button>

      <span>
        <i class="el-icon-message"></i>
        12
      </span>
    </footer>
  </el-card>
</template>

<script>
export default {
  methods: {
    openPost() {
      const id = 'test-id'
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
