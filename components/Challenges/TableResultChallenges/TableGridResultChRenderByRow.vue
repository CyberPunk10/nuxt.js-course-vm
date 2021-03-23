<template>
  <div class="wrap-card-content">
    <div class="table-fixed-cols-grid-render-by-row"
      :style="gridMainColumns"
      @mouseover="mouseoverRows"
      @mouseout ="mouseoutRows"
      ref="table"
    >
      <!-- first-col -->
      <div class="first-col"
        v-if="fixed_first_col"
        :class="{'shadow-active': shadowLeftActive}"
        :style="gridNestingRows"
      >
        <!-- header cell -->
        <p class="cell-header row"
          @click="`sortBy_${fixed_first_col.key}`"
          :style="[{gridColumn: '1/2'}, {gridRow: '1/3'}]"
        >{{ fixed_first_col.title || fixed_first_col.key}}
          <i class="material-icons">unfold_more</i>
        </p>

        <!-- other cells -->
        <div class="cell" data-first-col
          v-for="(row, index) in paginatedUsers"
          :key="row.id"
          :class="{'hover-active': currentElem == index}"
          :data-row="index"
        >
          {{ row[fixed_first_col.key] }}
        </div>
      </div>

      <!-- center-cols -->
      <div class="center-cols layout-cell-light-gray-border layout-scrollbar-light-gray-border layout-swipe-ignore"
        @scroll="scrollCenterCols"
        :style="[gridNestingRows, gridNestingCols]"
        ref="centerCols"
      >
        <!-- header cells months-->
        <div class="cell-header cell-header__month"
          v-for="(month, indexMonth) in data_tables.datesForHeader"
          :key="`${month.month}__${indexMonth}`"
          :style="{
            gridColumn: `${indexMonth == 0 ? 1 : arrStartGridColumnMonths[indexMonth - 1]}/${indexMonth == 0 ? (month.days.length + 1) : (arrStartGridColumnMonths[indexMonth])}`
          }"
        >{{ month.month }}</div>

        <!-- header cells days-->
        <div class="cell-header"
          v-for="(day, index) in data_tables.dates"
          :key="index"
          :class="{'border-left': arrStartGridColumnMonths.includes(index + 1)}"
          data-jc='center'
        >{{ day }}
        </div>

        <!-- other cells -->
        <template v-for="(row, indexRow) in paginatedUsers">
          <div class="cell border-right"
            v-for="(cell, index) in row.result"
            :key="`${row.id}__${index}`"
            :data-row="indexRow"
            data-jc='center'
            :class="[{'hover-active': currentElem == indexRow},
              {'border-left': arrStartGridColumnMonths.includes(index + 1)},
              {'border-right-radius': !fixed_last_col && index == row.result.length - 1}
            ]"
          >
            {{cell}}
          </div>
        </template>
      </div>

      <!-- last-col -->
      <div class="last-col"
        v-if="fixed_last_col"
        :class="{'shadow-active': shadowRightActive}"
        :style="gridNestingRows"
      >
        <!-- header cell -->
        <p class="cell-header row"
          @click="`sortBy_${fixed_last_col}`"
          :style="[{gridColumn: '1/2'}, {gridRow: '1/3'}]"
        >{{ fixed_last_col }}
          <i class="material-icons">unfold_more</i>
        </p>

        <!-- other cells -->
        <div class="cell" data-last-col
          v-for="(row, index) in paginatedUsers"
          :key="row.id"
          :data-row="index"
          :class="{'hover-active': currentElem == index}"
        >
          {{ row[fixed_last_col] }}
        </div>
      </div>

      <!-- <div class="last-col-empty"
        v-else
        :class="{'shadow-active': shadowRightActive}"
        :style="gridNestingRows"
      >

      </div> -->

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
    data_tables: {
      type: Object,
      default: () => {
        return {}
      }
    },
    fixed_first_col: {
      type: [Object, Boolean],
      default: false
    },
    fixed_last_col: {
      type: [Object, Boolean],
      default: false
    }
  },

  data() {
    return {
      userPerPages: 10, // по сколько записей выводить
      pageNumber: 1, // с какой страницы отсчитывать вывод данных
      shadowLeftActive: false,
      shadowRightActive: false,
      currentElem: null, // for @mouseover="mouseoverRows" hover
    }
  },

  computed: {
    // grid styles
    gridMainColumns() {
      const firstCol = this.fixed_first_col ? 'minmax(min-content, 1fr)' : ''
      const lastCol = this.fixed_last_col ? 'minmax(min-content, 1fr)' : ''
      return {
        gridTemplateColumns: `${firstCol} minmax(auto, 100%) ${lastCol}`
      }
    },
    gridNestingRows() {
      const countRowHeader = this.data_tables.datesForHeader ? '3rem 3rem' : '5rem' // 1 or 2 row in header (for month)
      return {
        gridTemplateRows: `${countRowHeader} repeat(${this.paginatedUsers.length}, 4rem)`
        // т.к. этот шаблон применяется в разных столбцах отдельных грядов,
        // использовать minmax(4rem, 1fr) не приемлимо - в случае переноса строк строки будут иметь разную высоту
      }
    },
    gridNestingCols() {
      const countCol = this.data_tables.dates.length
      return {
        gridTemplateColumns: `repeat(${countCol}, minmax(min-content, 1fr))`
      }
    },

    // pagination
    pages() {
      return Math.ceil(this.data_tables.players.length / 10)
    },
    paginatedUsers() {
      let from = (this.pageNumber - 1) * this.userPerPages
      let to = from + this.userPerPages
      return this.data_tables.players.slice(from, to)
    },

    // for .shadow-active при изменении ширины экрана
    currentWidthWindow() {
      return this.$store.getters['layoutChallenge/getCurrentWidthWindow']
    },

    arrStartGridColumnMonths() {
      const arr = []
      this.data_tables.datesForHeader.forEach( el => {
        arr.push(el.days.length + (arr.length == 0 ? 1 : arr[arr.length - 1]))
      })
      console.log(arr)
      return arr
    }
  },

  watch: {
    // наблюдаем за изменением computed свойством currentWidthWindow и при изменении выполняем нужную нам логику
    currentWidthWindow() {
      // if center-cols имеет прокручиваемую область, то add .shadow-active к last-col
      const $centerCols = this.$refs.centerCols
      // при масштабе экрана 125% появляется погрешность, которую попробуем учесть,
      // предполагая, что погрешность не составляет больше 1px
      // исходный вариант был такой: e.target.scrollWidth - e.target.scrollLeft == e.target.offsetWidth
      const resultValue = $centerCols.scrollWidth - $centerCols.scrollLeft - $centerCols.offsetWidth
      this.shadowRightActive = (resultValue < 1) ? false : true
    }
  },

  mounted() {
    // if center-cols имеет прокручиваемую область, то add .shadow-active к last-col
    const $centerCols = this.$refs.centerCols
    // ниже строка не нужна, так как мы по умолчанию имеем таблицу со scrollLeft == 0
    // this.shadowLeftActive = $centerCols.scrollLeft == 0 ? false : true
    // при масштабе экрана 125% появляется погрешность, которую попробуем учесть,
    // предполагая, что погрешность не составляет больше 1px
    // исходный вариант был такой: e.target.scrollWidth - e.target.scrollLeft == e.target.offsetWidth
    const resultValue = $centerCols.scrollWidth - $centerCols.scrollLeft - $centerCols.offsetWidth
    this.shadowRightActive = (resultValue < 1) ? false : true

    // промотать таблицу вправо при загрузке
    $centerCols.scrollLeft =  $centerCols.scrollWidth
  },

  methods: {
    // pagination
    pageClick(page) {
      this.pageNumber = page
    },

    // sort
    sortBy_name() {
      this.$store.dispatch('tableGoFrontend/sortByName')
    },
    sortBy_id() {
      this.$store.dispatch('tableGoFrontend/sortById')
    },
    sortBy_resultAll() {
      this.$store.dispatch('tableGoFrontend/sortByResultAll')
    },

    // add shadow cols by scroll
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
    },

  }
}
</script>

<style lang="sass">
.table-fixed-cols-grid-render-by-row
  display: grid
  border-radius: $borderRadius
  overflow: hidden // прячет лишнюю тень (.shadow-active)

  .first-col,
  .center-cols,
  .last-col
    display: grid

  .first-col,
  .last-col,
  .last-col-empty
    z-index: 1 // чтобы central-cols при наведении были тоже под тенью
    // background-color: $theme-color-yellow

  .last-col-empty
    height: 100%
    width: 10px

  .first-col,
  .last-col
    .cell-header
      padding: 1rem 1rem 1.1rem
      @media screen and (min-width: $phoneWidth)
        padding: 1rem 1rem 1.2rem
      @media screen and (min-width: $tableWidth)
        padding: 1rem 1.2rem 1.5rem
      @media screen and (min-width: $smDesktopWidth)
        padding: 1rem 1.4rem 1.7rem
      @media screen and (min-width: $desktopWidth)
        padding: 1rem 1.6rem 1.7rem

  .first-col
    border-right: 1px solid #e7e7e7
  .last-col
    border-left: 1px solid #e7e7e7

  .shadow-active
    box-shadow: 0 0 10px rgba(0,0,0,.12)

  .center-cols
    .cell
      min-width: 4.5rem
      // max-width: 21rem // не нравится + влияет на стили первой таблицы
      overflow: hidden // если содержимок не влизает в ячейку, то оно не видно на соседней ячейке

  .cell,
  .cell-header
    display: flex
    align-items: center
    white-space: nowrap // ОБЯЗАТЕЛЕН, иначе всё поедет (запрет переноса строк)
    padding: 1rem .8rem
    transition: $transitionDefaultHover
    &[data-jc="center"]
      justify-content: center
    &[data-jc="right"]
      justify-content: flex-end
    &.border-left
      border-left: 1px solid #e7e7e7


  // cell-header
  .cell-header
    border-bottom: 1px solid #e7e7e7
    font-weight: 500
    @media screen and (min-width: $phoneWidth)
      padding: .5rem 1rem .6rem
    // @media screen and (min-width: $tableWidth)
    //   padding: .9rem 1.2rem 1rem
    // @media screen and (min-width: $smDesktopWidth)
    //   padding: 1.2rem 1.4rem 1.4rem
    // @media screen and (min-width: $desktopWidth)
    //   padding: 1.5rem 1.6rem 1.6rem

    i
      font-size: 1.6rem
      @media screen and (min-width: $smDesktopWidth)
        font-size: 1.8rem

    &__month
      // background-color: $color-purple
      border-left: 1px solid #e7e7e7
      border-bottom: 1px dotted #f7f7f7
      // border-bottom: none
      display: flex
      justify-content: center
      &:first-child
        border-left: none



  // other cell
  .cell
    border-bottom: 1px solid #f7f7f7
    @media screen and (min-width: $phoneWidth) // >= 480px
      padding: 1rem 1rem
      &[data-first-col].hover-active
        border-top-left-radius: $borderRadius
        border-bottom-left-radius: $borderRadius
      &[data-last-col].hover-active,
      &.border-right-radius
        border-top-right-radius: $borderRadius
        border-bottom-right-radius: $borderRadius
    @media screen and (min-width: $tableWidth) // >= 768px
      padding: 1rem 1.2rem
    @media screen and (min-width: $smDesktopWidth) // >= 980px
      padding: 1.2rem 1.4rem
    @media screen and (min-width: $desktopWidth) // >= 1280px
      padding: 1.5rem 1.6rem

    // js hover (@mouseoverRows, @mouseoutRows)
    &.hover-active
      background-color: #f7f7f7



// pagination
.v-table__pagination
  display: flex
  justify-content: center
  margin: 1.5rem 1rem
  transition: $transitionDefaultHover
  @media screen and (min-width: $tableWidth) // >= 768px
    margin: 2rem 1rem 1.5rem
  @media screen and (min-width: $smDesktopWidth) // >= 980px
    margin: 2rem 1rem 1rem
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
