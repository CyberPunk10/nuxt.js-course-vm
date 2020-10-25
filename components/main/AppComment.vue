<template>
  <el-card class="comment">
    <div class="comment-header">
      <small>Person name</small>
      <small>
        <i class="el-icon-time"></i>
        {{new Date().toLocaleString()}}
      </small>
    </div>
    <p class="comment-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et recusandae atque non molestias nobis facilis sit molestiae, amet illum quisquam?</p>
  </el-card>
</template>

<script>
export default {
  props: ['comment']
}
</script>

<style lang="sass" scoped>
.comment
  margin-bottom: 1rem
  &-header
    display: flex
    justify-content: space-between
    margin-bottom: 0.5rem
  &-text
    white-space: pre-line
</style>

