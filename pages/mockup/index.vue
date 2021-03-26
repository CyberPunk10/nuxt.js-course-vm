<template>
  <div class="page-admin">
    <h1>Аналитика по постам</h1>
    <div class="df jcsa fwrap">
      <div class="wrap-card-content width-50">
        <AnalyticsChart
          title="Количество просмотров"
          :labels="sliceLabel"
          :data="views.data"

        />
      </div>

      <div class="wrap-card-content width-50">
        <AnalyticsChart
          title="Количество комментариев"
          :labels="sliceLabel"
          :data="comments.data"
        />
      </div>
    </div>
  </div>
</template>

<script>
import AnalyticsChart from '@/assets/admin/AnalyticsChart.vue'

export default {
  head: {
    title: `Аналитика | ${process.env.appName}`
  },
  layout: 'layout-main-challenges',
  middleware: ['admin-auth'],
  components: { AnalyticsChart },

  async asyncData({store}) {
    const { views, comments } = await store.dispatch('post/getAnalytics')
    const sliceLabel = comments.labels.map(item => item.slice(0, 5))
    return { views, comments, sliceLabel }
  }
}
</script>

<style lang="sass">
.page-admin
  .wrap-card-content
    margin-top: 4rem
    margin-bottom: 4rem
    min-width: 30rem
</style>
