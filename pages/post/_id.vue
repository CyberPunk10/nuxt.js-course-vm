<template>
  <article class="post">
    <header class="post-header">
      <div class="post-title">
        <h1>Post title</h1>
        <nuxt-link to="/">
          <i class="el-icon-back"></i>
        </nuxt-link>
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
    <main class="post-content">
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque tempore voluptate eos numquam ratione exercitationem perferendis vel tempora cumque eligendi! Facilis iure nemo placeat amet delectus nobis magni veritatis quidem sint, at, in tempora similique repellendus odio odit! Repellendus tempora odit autem iure modi quam impedit fugiat porro iusto. Amet.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ducimus dolorem saepe aliquid, dolorum in veniam delectus numquam vero, adipisci, ipsum quia sequi earum dicta dignissimos officiis magnam cum hic reiciendis est? Veritatis odio saepe temporibus doloribus nostrum dicta laborum.</p>
    </main>
    <footer>
      <AppCommentForm
        v-if="canAddComment"
        @created="crateCommentHandler"
      />
      <div class="comments" v-if="true">
        <AppComment
          v-for="comment in 3"
          :key="comment"
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
  data() {
    return {
      canAddComment: true
    }
  },
  validate({params}) {
    return Boolean(params.id)
  },
  methods: {
    crateCommentHandler() {
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
