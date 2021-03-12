<template>
  <div class="wrap-card-content">
    <div class="table-fixed-cols-grid"
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
        <p class="cell__header row"
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
        <!-- header cells -->
        <template v-for="cell in namesColsForRowRender">
          <p class="cell__header"
            :key="cell"
            @click="`sortBy_${cell}`"
          >{{ cell }}
            <i class="material-icons">unfold_more</i>
          </p>
        </template>

        <!-- other cells -->
        <template v-for="(row, indexRow) in paginatedUsers">
          <div class="cell"
            v-for="cell in namesColsForRowRender"
            :key="`${row.id}__${cell}`"
            :data-row="indexRow"
            :class="{'hover-active': currentElem == indexRow}"
          >
            {{row[cell]}}
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
        <p class="cell__header row"
          @click="`sortBy_${fixed_last_col}`"
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
      return {
        gridTemplateRows: `5rem repeat(${this.paginatedUsers.length}, 4rem)`
        // т.к. этот шаблон применяется в разных столбцах отдельных грядов,
        // использовать minmax(4rem, 1fr) не приемлимо - в случае переноса строк строки будут иметь разную высоту
      }
    },
    gridNestingCols() {
      let countFixedCol = 0
      countFixedCol = this.fixed_first_col ? ++countFixedCol : countFixedCol
      countFixedCol = this.fixed_last_col  ? ++countFixedCol : countFixedCol

      const countCol = Object.keys(this.users_data[0]).length - countFixedCol // вычетаем первый и последний столбцы (if они фиксрованные)
      return {
        gridTemplateColumns: `repeat(${countCol}, minmax(min-content, 1fr))`
      }
    },

    // pagination
    pages() {
      return Math.ceil(this.users_data.length / 10)
    },
    paginatedUsers() {
      let from = (this.pageNumber - 1) * this.userPerPages
      let to = from + this.userPerPages
      return this.users_data.slice(from, to)
    },

    // for .shadov-active при изменении ширины экрана
    currentWidthWindow() {
      return this.$store.getters['layoutChallenge/getCurrentWidthWindow']
    },

    namesColsForRowRender() {
      const arrAllValue = Object.keys(this.users_data[0]) // например было 5
      let filteredArrStep1 = arrAllValue.filter(e => e !== this.fixed_first_col) // стало 4
      let filteredArrStep2 = filteredArrStep1.filter(e => e !== this.fixed_last_col) // стало 3
      return filteredArrStep2
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
.table-fixed-cols-grid
  display: grid
  border-radius: $borderRadius
  overflow: hidden // прячет лишнюю тень (.shadow-active)

  .first-col,
  .center-cols,
  .last-col
    display: grid

  .cell__header
    display: flex
    align-items: center
    border-bottom: 1px solid #e7e7e7
    padding: 1rem 1.6rem 1.2rem

  .first-col,
  .last-col
    z-index: 1 // чтобы central-cols при наведении были тоже под тенью
    // background-color: $color-opacity-test
    // background-color: $color-light-blue3
    // background-color: $theme-color-yellow

  .first-col
    border-right: 1px solid #e7e7e7
  .last-col
    border-left: 1px solid #e7e7e7

  .shadow-active
    box-shadow: 0 0 10px rgba(0,0,0,.12)

  .cell
    padding: 8px 16px
    text-align: left
    display: flex
    align-items: center
    white-space: nowrap // ОБЯЗАТЕЛЕН, иначе всё поедет (запрет переноса строк)
    border-bottom: 1px solid #f7f7f7
    transition: $transitionDefaultHover

    // js hover (@mouseoverRows, @mouseoutRows)
    &.hover-active
      background-color: #f7f7f7
    &[data-first-col].hover-active
      border-top-left-radius: $borderRadius
      border-bottom-left-radius: $borderRadius
    &[data-last-col].hover-active
      border-top-right-radius: $borderRadius
      border-bottom-right-radius: $borderRadius

// pagination
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
