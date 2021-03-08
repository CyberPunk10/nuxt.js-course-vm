<template>
  <div class="v-table-row-start">
    <div class="row row__name">{{row_data.name}}</div>
  </div>
</template>

<script>
export default {
  props: {
    row_data: {
      type: Object,
      default: () => {
        return {}
      }
    }
  }
}
</script>

<style lang="sass">
.table-fixed-cols
  .v-table-row-start
    .row
      padding: 8px 16px
      text-align: left
      display: flex
      align-items: center
      min-width: 10rem
      max-width: 10rem
</style>
