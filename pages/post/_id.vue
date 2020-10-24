<template>
  <article class="post">
    <header class="post-header">
      <div class="post-title">
        <h1>Post title</h1>
      </div>
      <div class="post-info">
        <small>
          <i class="el-icon-time"></i>
          {{new Date().toLocaleString()}}
        </small>
        <small>
          <i class="el-icon-view"></i>
          42
        </small>
      </div>
      <div class="post-image">
        <img
          src="https://img-s1.onedio.com/id-5b979e50e18b36f32143ba30/rev-0/raw/s-7a3af757103396c79d519de4c7db9ff06627c421.jpg"
          alt="Post image"
          class="post-img"
        >
      </div>
    </header>
  </article>
</template>

<script>
export default {
  validate({params}) {
    return Boolean(params.id)
  }
}
</script>

<style lang="sass" scoped>

</style>
