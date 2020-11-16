<template>
  <div>
    <h1>Аналитика по постам</h1>
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

    }
  },

  methods: {

  }
}
</script>

<style lang="sass" scoped>

</style>
