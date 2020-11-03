<template>
  <div>
    <h1>Admin layout</h1>
    <span>{{message}}</span>
    <el-button @click.prevent="sayGoodbay">
      Result
    </el-button>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  middleware: ['admin-auth'],
  data() {
    return {
      message: 'message'
    }
  },
  methods: {
    async sayGoodbay() {
      const result__ = await this.$api.getDate()
      this.message = (await result__.json()).date
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
