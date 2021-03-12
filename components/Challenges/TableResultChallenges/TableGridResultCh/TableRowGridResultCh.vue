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
  },

  data() {
    return {
      hoverActive: false,
    }
  },

}
</script>

<style lang="sass">


</style>
