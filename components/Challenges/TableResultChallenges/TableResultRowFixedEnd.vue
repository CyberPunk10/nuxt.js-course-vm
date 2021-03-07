<template>
  <div class="v-table-row">
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
  .v-table-row
    display: flex
    border-radius: $borderRadius
    transition: $transitionDefaultHover
    &:hover
      background-color: #f7f7f7
    .row
      padding: 8px 16px
      text-align: left
      display: flex
      align-items: center

</style>
