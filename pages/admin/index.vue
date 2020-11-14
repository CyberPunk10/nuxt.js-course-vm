<template>
  <div>
    <h1>Аналитика по постам</h1>
    <span>{{message}}</span>
    <el-button @click.prevent="sayGoodbay">
      Result
    </el-button>
    <hr>
    <AnalyticsChart
      title="Количество просмотров"
      :labels="views.labels"
      :data="views.data"
    />
    <AnalyticsChart
      title="Количество комментариев"
      :labels="comments.labels"
      :data="comments.data"
    />
  </div>
</template>

<script>
export default {
  head: {
    title: `Аналитика | ${process.env.appName}`
  },
  layout: 'admin',
  middleware: ['admin-auth'],

  async asyncData({store}) {
    const { views, comments } = await store.dispatch('post/getAnalytics')
    return { views, comments }
  },

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
