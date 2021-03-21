<template>
  <div class="page-admin">
    <h1>Аналитика по постам</h1>
    <div class="wrap-card-content">
      <AnalyticsChart
        title="Количество просмотров"
        :labels="views.labels"
        :data="views.data"

      />
    </div>
    <AnalyticsChart
      title="Количество комментариев"
      :labels="comments.labels"
      :data="comments.data"
    />
  </div>
</template>

<script>
import AnalyticsChart from '@/assets/admin/AnalyticsChart.vue'

export default {
  head: {
    title: `Аналитика | ${process.env.appName}`
  },
  layout: 'admin',
  middleware: ['admin-auth'],
  components: { AnalyticsChart },

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

<style lang="sass">
.page-admin
  .wrap-card-content
    margin-top: 4rem
    margin-bottom: 4rem
</style>
