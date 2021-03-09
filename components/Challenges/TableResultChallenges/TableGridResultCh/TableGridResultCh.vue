<template>
  <div class="wrap-card-content">
    <div class="table-fixed-cols">
      <div class="table-fixed-cols-grid"
        @mouseover="mouseoverRows"
        @mouseout ="mouseoutRows"
        ref="table"
      >

        <!-- first-col -->
        <div class="first-col"
          :class="{'shadow-active': shadowLeftActive}"
        >
          <div class="v-table__header">
            <p @click="sortById" class="row">Имя
              <i class="material-icons">unfold_more</i>
            </p>
          </div>

          <div class="v-table__body"
            :style="styleGridTemplateRows"
          >
            <TableRowGridResultCh
              v-for="(row, index) in paginatedUsers"
              :key="row.id"
              :row_data="row"
              renderCol="first-col"
              :data-row="index"
              :class="{'hover-active': currentElem == index}"
            />
          </div>
        </div>

        <!-- center-cols -->
        <div class="center-cols layout-cell-light-gray-border layout-scrollbar-light-gray-border layout-swipe-ignore"
          @scroll="scrollCenterCols"
        >
          <div class="v-table__header"
            :style="gridNestingCols"
          >
            <p @click="sortByName">Имя
              <i class="material-icons">unfold_more</i>
            </p>
            <p @click="sortById">Id
              <i class="material-icons">unfold_more</i>
            </p>
            <p @click="sortByName">Имя
              <i class="material-icons">unfold_more</i>
            </p>
          </div>

          <div class="v-table__body"
            :style="styleGridTemplateRows"
          >
            <TableRowGridResultCh
              v-for="(row, index) in paginatedUsers"
              :key="row.id"
              :row_data="row"
              renderCol="center-cols"
              :gridNestingCols="gridNestingCols"
              :data-row="index"
              :class="{'hover-active': currentElem == index}"
            />
          </div>
        </div>

        <!-- last-col -->
        <div class="last-col"
          :class="{'shadow-active': shadowRightActive}"
        >
          <div class="v-table__header">
            <p @click="sortByResultAll" class="row">Общий
              <i class="material-icons">unfold_more</i>
            </p>
          </div>

          <div class="v-table__body"
            :style="styleGridTemplateRows"
          >
            <TableRowGridResultCh
              v-for="(row, index) in paginatedUsers"
              :key="row.id"
              :row_data="row"
              renderCol="last-col"
              :data-row="index"
              :class="{'hover-active': currentElem == index}"
            />
          </div>
        </div>

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
      pageNumber: 1,
      shadowLeftActive: false,
      shadowRightActive: false,
      currentElem: null // for @mouseover="mouseoverRows"
    }
  },

  computed: {
    styleGridTemplateRows() {
      return {
        gridTemplateRows: `repeat(${this.paginatedUsers.length}, minmax(4rem, 1fr))`
      }
    },
    gridNestingCols() {
      const countCol = Object.keys(this.users_data[0]).length - 2 // вычетаем первый и последний столбцы (они фиксрованные)
      return {
        gridTemplateColumns: `repeat(${countCol}, minmax(15rem, 1fr))`
      }
    },

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

    scrollCenterCols(e) {
      this.shadowLeftActive = e.target.scrollLeft == 0 ? false : true
      // при масштабе экрана 125% появляется погрешность, которую попробуем учесть,
      // предполагая, что погрешность не составляет больше 1px
      // исходный вариант был такой: e.target.scrollWidth - e.target.scrollLeft == e.target.offsetWidth
      const resultValue = e.target.scrollWidth - e.target.scrollLeft - e.target.offsetWidth
      this.shadowRightActive = (resultValue < 1) ? false : true
    },

    // hover row
    mouseoverRows(e) {
      console.log('[mouseoverRows]')
      // инфа про Делегирование событий (learn.javascript.ru) отсюда:
      // https://learn.javascript.ru/mousemove-mouseover-mouseout-mouseenter-mouseleave

      // перед тем, как войти на следующий элемент, курсор всегда покидает предыдущий
      // если currentElem есть, то мы ещё не ушли с предыдущего div[data-row],
      // это переход внутри - игнорируем такое событие
      if (this.currentElem) return
      let target = e.target.closest('div[data-row]')

      // переход не на div[data-row] - игнорировать
      if (!target) return

      // переход на div[data-row], но вне нашей таблицы (возможно при вложенных таблицах)
      // игнорировать
      const $table = this.$refs.table
      if(!$table) return // при переходе по ссылке этот компонент может быть уничтожен на момент выполнения этого кода, если это так, то выходим
      if (!$table.contains(target)) return

      // ура, мы зашли на новый div[data-row]
      this.currentElem = target.dataset.row
      // target.style.background = 'pink'
    },
    mouseoutRows(e) {
      console.log('[mouseoutRows]')
      // если мы вне div[data-row], то игнорируем уход мыши
      // это какой-то переход внутри таблицы, но вне div[data-row]
      if (!this.currentElem) return

      // мы покидаем элемент – но куда? Возможно, на потомка?
      let relatedTarget = e.relatedTarget

      while (relatedTarget) {
        // поднимаемся по дереву элементов и проверяем – внутри ли мы currentElem или нет
        // если да, то это переход внутри элемента – игнорируем
        if (relatedTarget == this.currentElem) return

        relatedTarget = relatedTarget.parentNode
      }

      // мы действительно покинули элемент
      // this.currentElem.style.background = ''
      this.currentElem = null
    }
  }
}
</script>

<style lang="sass">
.table-fixed-cols
  .table-fixed-cols-grid
    display: grid
    grid: auto / minmax(11rem, 1fr) minmax(auto, 100%) minmax(11rem, 1fr) // row/col
    border-radius: $borderRadius
    overflow: hidden // прячет лишнюю тень (.shadow-active)

    // .first-col,
    // .center-cols,
    // .last-col
    //   padding: 1.5rem

    .v-table__body,
    .center-cols .v-table__header
      display: grid

    .v-table__header
      p
        border-bottom: 1px solid #e7e7e7
        padding: 1rem 1.6rem 1.2rem
        flex-basis: 20%
        display: flex
        align-items: center

    .first-col,
    .last-col
      z-index: 1 // чтобы central-cols при наведении были тоже под тенью
      // background-color: $color-opacity-test
      // background-color: $color-light-blue3
      // background-color: $theme-color-yellow
      // border-radius: $borderRadius


    .shadow-active
      box-shadow: 0 0 10px rgba(0,0,0,.12)

    .first-col
      border-right: 1px solid #f7f7f7
      // border-right: 1px solid #e7e7e7
      &.shadow-active
        border-right: 1px solid transparent
      &:hover
        &.shadow-active
          border-right: 1px solid #f7f7f7


    .last-col
      border-left: 1px solid #f7f7f7
      // border-left: 1px solid #e7e7e7
      &.shadow-active
        border-left: 1px solid transparent
      &:hover
        &.shadow-active
          border-left: 1px solid #f7f7f7

  .v-table__pagination
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
