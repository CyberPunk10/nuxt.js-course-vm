<template>

  <!-- if first-col -->
  <div v-if="fixed_first_col" class="v-table-row" data-first-col
    :class="{'hover-active': hoverActive === true}"
  >
    <div class="cell">{{row_data[fixed_first_col]}}</div>
  </div>

  <!-- if last-col -->
  <div v-else-if="fixed_last_col" class="v-table-row" data-last-col
    :class="{'hover-active': hoverActive === true}"
  >
    <div class="cell">{{row_data[fixed_last_col]}}</div>
  </div>

  <!-- center-cols / all cols -->
  <div v-else class="v-table-row" data-center-cols
    :class="{'hover-active': hoverActive === true}"
    :style="gridNestingCols"
  >
    <div class="cell"
      v-for="(col, index) in namesColsForRowRender"
      :key="index"
    >{{row_data[namesColsForRowRender[index]]}}</div>
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
    fixed_first_col: {
      type: [String, Boolean],
      default: false
    },
    fixed_last_col: {
      type: [String, Boolean],
      default: false
    },
    gridNestingCols: {
      type: Object,
      default: () => {
        return {}
      }
    },
    namesColsForRowRender: {
      type: Array,
      default: () => {
        return []
      }
    }
  },

  data() {
    return {
      hoverActive: false,
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
      white-space: nowrap // ОБЯЗАТЕЛЕН, иначе всё поедет (запрет переноса строк)

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
