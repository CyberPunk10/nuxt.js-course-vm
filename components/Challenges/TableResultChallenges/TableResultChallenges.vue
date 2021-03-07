<template>
  <div class="v-table">
    <div class="v-table__header">
      <p @click="sortById" class="row">Id
        <i class="material-icons">unfold_more</i>
      </p>
      <p @click="sortByName" class="row">Имя
        <i class="material-icons">unfold_more</i>
      </p>
      <p @click="sortByResultAll" class="row">Общий результат
        <i class="material-icons">unfold_more</i>
      </p>
      <p @click="sortByResult" class="row">Массив result
        <i class="material-icons">unfold_more</i>
      </p>
      <p @click="sortByResult2" class="row">Массив result 2
        <i class="material-icons">unfold_more</i>
      </p>
    </div>
    <div class="v-table__body">
      <TableResultRowChallenges
        v-for="row in paginatedUsers"
        :key="row.id"
        :row_data="row"
      />
    </div>
    <div class="v-table__pagination">
      <div class="page"
        v-for="page in pages"
        :key="page"
        @click="pageClick(page)"
        :class="{'page_selected': page === pageNumber}"
      >{{ page }}
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
      // this.users_data.sort((a,b) => a.name.localeCompare(b.name))
      this.$store.dispatch('tableGoFrontend/sortByName')
    },
    sortById() {
      // this.users_data.sort((a,b) => a.id - b.id)
      this.$store.dispatch('tableGoFrontend/sortById')
    },
    sortByResultAll() {
      // this.users_data.sort((a,b) => a.resultAll - b.resultAll)
      this.$store.dispatch('tableGoFrontend/sortByResultAll')
    },
    sortByResult() {
      // тут пытаемся сортировать массивы
      // this.users_data.sort((a,b) => a.result.localeCompare(b.result))
    },
    sortByResult2() {
      // тут пытаемся сортировать массивы
      // this.users_data.sort((a,b) => a.result2.localeCompare(b.result2))
    },
  }
}
</script>

<style lang="sass">
.v-table
  max-width: 100%
  background-color: #fff
  padding: 2rem 1.5rem
  border-radius: $borderRadius
  box-shadow: $borderShadow
  transition: $transitionDefaultHover
  &:hover
    box-shadow: $borderShadowHover
  &__header
    display: flex
    // justify-content: space-around
    border-bottom: 1px solid #e7e7e7
    .row
      padding: .8rem 1.6rem
      flex-basis: 20%
      display: flex
      align-items: center
  &__pagination
    display: flex
    justify-content: center
    margin: 3rem 0 1rem
    .page
      height: 3.5rem
      line-height: 3.3rem
      width: 3.5rem
      border-radius: $borderRadius
      text-align: center
      border: 1px solid #e7e7e7
      margin-right: 1rem
      cursor: pointer
      transition: $transitionDefaultHover
      &:hover
        background-color: $color-purple
        color: #fff
        border: 1px solid $color-purple
    .page_selected
      background-color: $color-purple
      color: #fff
      border: 1px solid $color-purple


</style>
