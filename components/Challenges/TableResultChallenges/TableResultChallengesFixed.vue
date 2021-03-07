<template>
  <div class="wrap-card-content">
    <div class="table-fixed-cols">

      <!-- start-col -->
      <div class="start-col">
        <div class="v-table__header">
          <p @click="sortById" class="row">Имя
            <i class="material-icons">unfold_more</i>
          </p>
        </div>
        <div class="v-table__body">
          <TableResultRowFixedStart
            v-for="row in paginatedUsers"
            :key="row.id"
            :row_data="row"
          />
        </div>
      </div>

      <!-- center-cols -->
      <div class="all-cols layout-cell-light-gray-border layout-scrollbar-light-gray-border layout-swipe-ignore"
      >
        <div class="v-table__header">
          <p @click="sortByName" class="row">Имя
            <i class="material-icons">unfold_more</i>
          </p>
          <p @click="sortById" class="row">Id
            <i class="material-icons">unfold_more</i>
          </p>
          <p @click="sortByName" class="row">Имя
            <i class="material-icons">unfold_more</i>
          </p>
          <p @click="sortByResultAll" class="row">Общий
            <i class="material-icons">unfold_more</i>
          </p>
          <p @click="sortById" class="row">Id
            <i class="material-icons">unfold_more</i>
          </p>
          <p @click="sortByName" class="row">Имя
            <i class="material-icons">unfold_more</i>
          </p>
          <p @click="sortByResultAll" class="row">Общий
            <i class="material-icons">unfold_more</i>
          </p>
        </div>
        <div class="v-table__body">
          <TableResultRowFixedChallenges
            v-for="row in paginatedUsers"
            :key="row.id"
            :row_data="row"
          />
        </div>
      </div>

      <!-- end-col -->
      <div class="end-col">
        <div class="v-table__header">
          <p @click="sortByResultAll" class="row">Общий
            <i class="material-icons">unfold_more</i>
          </p>
        </div>
        <div class="v-table__body">
          <TableResultRowFixedEnd
            v-for="row in paginatedUsers"
            :key="row.id"
            :row_data="row"
          />
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  props: {
    users_data: {
      type: Array,
      default: () => {
        return []
      }
    }
  },

  data() {
    return {
      userPerPages: 10,
      pageNumber: 1
    }
  },

  computed: {
    pages() {
      return Math.ceil(this.users_data.length / 10)
    },
    paginatedUsers() {
      let from = (this.pageNumber - 1) * this.userPerPages
      let to = from + this.userPerPages
      return this.users_data.slice(from, to)
    }
  },

  methods: {
    pageClick(page) {
      this.pageNumber = page
    },

    sortByName() {
      this.$store.dispatch('tableGoFrontend/sortByName')
    },
    sortById() {
      this.$store.dispatch('tableGoFrontend/sortById')
    },
    sortByResultAll() {
      this.$store.dispatch('tableGoFrontend/sortByResultAll')
    },
  }
}
</script>

<style lang="sass">
.table-fixed-cols
  //   // vars
  //   // $heightRowTopLabel: 2rem
  //   // $heightRowTypical: 4rem
  //   // $heightRowTypicalMode2: 3rem
  //   // $heightRowTypicalMode2ForNameCol: calc(#{$heightRowTypicalMode2} * 2)

  //   // display: grid
  //   // grid: repeat(1, auto)/1fr auto 1fr // row/col
  position: relative
  .start-col,
  .end-col
    position: absolute
    top: 0
    background-color: $color-opacity-test
    pointer-events: none

  .start-col
    left: 0

  .all-cols
    background-color: $color-green
    .row
      min-width: 10rem
      max-width: 10rem
      borer-bottom: 2px solid black !important

  .end-col
    right: 0
    min-width: 10rem
    max-width: 10rem
    margin: 0

</style>
