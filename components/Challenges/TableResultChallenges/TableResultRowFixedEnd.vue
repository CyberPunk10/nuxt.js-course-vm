<template>
  <div class="v-table-row-end">
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

<style lang="sass" scoped>
.table-fixed-cols
  .v-table-row-end
    .row
      padding: 8px 16px
      text-align: left
      display: flex
      align-items: center
      min-width: 10rem
      max-width: 10rem

</style>
