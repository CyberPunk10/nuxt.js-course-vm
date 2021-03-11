<template>
  <div v-if="renderCol === 'center-cols'" class="v-table-row" data-center-cols
    :class="{'hover-active': hoverActive === true}"
    :style="gridNestingCols"
  >
    <div class="cell row__name">{{row_data[`${testttt}`]}}</div>
    <div class="cell row__id">{{row_data.id}}</div>
    <div class="cell row__name">{{row_data.name}}</div>
  </div>

  <div v-else-if="renderCol === 'first-col'" class="v-table-row" data-first-col
    :class="{'hover-active': hoverActive === true}"
  >
    <div class="cell row__name">{{row_data.name}}</div>
  </div>

  <div v-else-if="renderCol === 'last-col'" class="v-table-row" data-last-col
    :class="{'hover-active': hoverActive === true}"
  >
    <div class="cell row__name">{{row_data.name}}</div>
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
    },
    renderCol: {
      type: String,
      default: 'all-cols'
    },
    gridNestingCols: {
      type: Object
    }
  },

  data() {
    return {
      hoverActive: false,
      testttt: 'name'
    }
  },

}
</script>

<style lang="sass">
.table-fixed-cols-grid
  .v-table-row
    border-bottom: 1px solid #f7f7f7
    transition: $transitionDefaultHover
    &[data-center-cols]
      display: grid
    .cell
      padding: 8px 16px
      text-align: left
      display: flex
      align-items: center

    // js hover (@mouseoverRows, @mouseoutRows)
    &.hover-active
      background-color: #f7f7f7
    &[data-first-col].hover-active
      border-top-left-radius: $borderRadius
      border-bottom-left-radius: $borderRadius
    &[data-last-col].hover-active
      border-top-right-radius: $borderRadius
      border-bottom-right-radius: $borderRadius

</style>
