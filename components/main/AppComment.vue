<template>
  <el-card shadow="hover" class="comment">
    <div class="comment-header">
      <small>{{comment.name}}</small>
      <small>
        <i class="el-icon-time"></i>
        {{comment.date | date}}
      </small>
    </div>
    <p class="comment-text">{{comment.text}}</p>
  </el-card>
</template>

<script>
export default {
  props: {
    comment: {
      type: Object,
      required: true
    }
  }
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

