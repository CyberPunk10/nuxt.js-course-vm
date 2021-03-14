<template>
  <div class="wrap-card-content">
    <div class="table-fixed-cols-grid-header-2row"
      :style="gridMainColumns"
      @mouseover="mouseoverRows"
      @mouseout ="mouseoutRows"
      ref="table"
    >
      <!-- first-col -->
      <div class="first-col"
        v-if="fixed_first_col"
        :class="{'shadow-active': shadowLeftActive}"
        :style="{ gridTemplateRows: `6rem repeat(${this.paginatedUsers.length}, 4rem)` }"
      >
        <!-- header cell -->
        <p class="cell-header row"
          @click="`sortBy_${fixed_first_col}`"
        >{{ fixed_first_col }}
          <i class="material-icons">unfold_more</i>
        </p>

        <!-- other cells -->
        <div class="cell" data-first-col
          v-for="(row, index) in paginatedUsers"
          :key="row.id"
          :class="{'hover-active': currentElem == index}"
          :data-row="index"
        >
          {{ row[fixed_first_col] }}
        </div>
      </div>

      <!-- center-cols -->
      <div class="center-cols layout-cell-light-gray-border layout-scrollbar-light-gray-border layout-swipe-ignore"
        @scroll="scrollCenterCols"
        ref="centerCols"
        :style="[gridNestingRows, gridNestingCols]"
      >
        <!-- header cells (only 1/2 от 1 row, for months) -->
        <div class="cell-header cell-header__month"
          v-for="(month, indexMonth) in users_data.datesForHeader"
          :key="indexMonth"
        >{{ month.month }}
        </div>

        <div class="center-cols-nesting-grid-2 border-left"
          v-for="(month, indexMonth) in users_data.datesForHeader"
          :key="`${month.month}__${indexMonth}`"
          :style="[gridNestingRowsLevel2, {
            gridTemplateColumns: `repeat(${month.days.length}, minmax(min-content, 1fr))`
          }]"
        >
          <!-- cell-header (only 2/2 от 1 row, for count months)  -->
          <div class="cell-header"
            v-for="(cell, index) in month.days"
            :key="index"
            data-jc='center'
          >{{ cell }}
          </div>

          <!-- other cells -->
          <!-- <template v-for="(row, indexRow) in paginatedUsers">
            <div class="cell border-right"
              v-for="(cell, index) in users_data.players[indexRow].result.month.days.length"
              :key="`${indexRow}__${index}`"
              data-jc='center'
              :data-row="indexRow"
            > -->
            <!-- {{cell}} -->
            <!-- 21
            </div>
          </template> -->
        </div>
      </div>

      <!-- last-col -->
      <!-- <div class="last-col"
        v-if="fixed_last_col"
        :class="{'shadow-active': shadowRightActive}"
        :style="gridNestingRows"
      > -->
        <!-- header cell -->
        <!-- <p class="cell-header row"
          @click="`sortBy_${fixed_last_col}`"
        >{{ fixed_last_col }}
          <i class="material-icons">unfold_more</i>
        </p> -->

        <!-- other cells -->
        <!-- <div class="cell" data-last-col
          v-for="(row, index) in paginatedUsers"
          :key="row.id"
          :data-row="index"
          :class="{'hover-active': currentElem == index}"
        >
          {{ row[fixed_last_col] }}
        </div>
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
    users_data: {
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
      const countRowHeader = this.users_data.datesForHeader ? '3rem' : '5rem' // 1 or 2 row in header (for month)
      return {
        gridTemplateRows: `${countRowHeader} auto`
      }
    },
    gridNestingCols() {
      const countCol = this.users_data.datesForHeader.length
      return {
        gridTemplateColumns: `repeat(${countCol}, minmax(min-content, 1fr))`
      }
    },
    gridNestingRowsLevel2() {
      return {
        gridTemplateRows: `3rem repeat(${this.paginatedUsers.length}, 4rem)`
        // т.к. этот шаблон применяется в разных столбцах отдельных грядов,
        // использовать minmax(4rem, 1fr) не приемлимо - в случае переноса строк строки будут иметь разную высоту
      }
    },

    // pagination
    pages() {
      return Math.ceil(this.users_data.players.length / 10)
    },
    paginatedUsers() {
      let from = (this.pageNumber - 1) * this.userPerPages
      let to = from + this.userPerPages
      return this.users_data.players.slice(from, to)
    },

    // for .shadov-active при изменении ширины экрана
    currentWidthWindow() {
      return this.$store.getters['layoutChallenge/getCurrentWidthWindow']
    },

    arrStartGridColumnMonths() {
      const arr = []
      this.users_data.datesForHeader.forEach( el => {
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

    cellHandler(value) {
      console.log(value)
      return value
    }

  }
}
</script>

<style lang="sass">
.table-fixed-cols-grid-header-2row
  display: grid
  border-radius: $borderRadius
  overflow: hidden // прячет лишнюю тень (.shadow-active)

  .test-block-green,
  .test-block-blue
    height: 100%

  .test-block-green
    background-color: $color-green
  .test-block-blue
    background-color: $color-light-blue

  .first-col,
  .center-cols,
  .center-cols-nesting-grid-2,
  .last-col
    display: grid

  .first-col,
  .last-col
    z-index: 1 // чтобы central-cols при наведении были тоже под тенью
    // background-color: $theme-color-yellow

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
      padding: 1rem 1rem
    @media screen and (min-width: $tableWidth)
      padding: 1rem 1.2rem
    @media screen and (min-width: $smDesktopWidth)
      padding: 1.2rem 1.4rem 1rem
    @media screen and (min-width: $desktopWidth)
      padding: 1.5rem 1.6rem 1.2rem

    i
      font-size: 1.6rem
      @media screen and (min-width: $smDesktopWidth)
        font-size: 1.8rem

    &__month
      // background-color: $color-purple
      border-left: 1px solid #e7e7e7
      border-bottom: 1px solid #f7f7f7
      border-bottom: none
      display: flex
      justify-content: center
      &.border-left-none
        border-left: none


  // other cell
  .cell
    border-bottom: 1px solid #f7f7f7
    @media screen and (min-width: $phoneWidth) // >= 480px
      padding: 1rem 1rem
      &[data-first-col].hover-active
        border-top-left-radius: $borderRadius
        border-bottom-left-radius: $borderRadius
      &[data-last-col].hover-active
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
