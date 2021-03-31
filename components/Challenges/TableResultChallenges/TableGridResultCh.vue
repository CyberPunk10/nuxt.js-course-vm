<template>
  <div class="wrap-card-content mb2 padding-0"
    ref="tableGrid"
  >
    <div class="table-fixed-cols-grid"
      :style="gridMainColumns"
      @mouseover="mouseoverRows"
      @mouseout ="mouseoutRows"
      ref="table"
    >
      <!-- first-col -->
      <div class="first-col"
        v-if="showFixedFirstCol"
        :class="{'shadow-active': shadowLeftActive}"
        :style="gridNestingRows"
      >
        <!-- header cell -->
        <div v-if="fixed_first_col.sort" class="cell__header row"
          @click="sortBy( $event, fixed_first_col.sort, fixed_first_col.key )"
          :style="widthCellFirstCol"
        >
          <div class="text-truncation-many-lines">
            {{ fixed_first_col.title || fixed_first_col.key }}
            <i class="material-icons">unfold_more</i>
          </div>
        </div>
        <div v-else class="cell__header row"
          :style="widthCellFirstCol"
        >
          <div class="text-truncation-many-lines">
            {{ fixed_first_col.title || fixed_first_col.key }}
          </div>
        </div>

        <!-- other cells -->
        <div class="cell" data-first-col
          v-for="(row, indexRow) in paginatedUsers"
          :key="row.id"
          :class="{'hover-active': currentElem == indexRow}"
          :style="widthCellFirstCol"
          :data-row="indexRow"
        >
          <div class="text-truncation-many-lines">
            {{ row[fixed_first_col.key] }}
          </div>
        </div>
      </div>

      <!-- center-cols -->
      <div class="center-cols layout-cell-light-gray-border layout-scrollbar-light-gray-border layout-swipe-ignore"
        @scroll="scrollCenterCols"
        ref="centerCols"
        :style="[gridNestingRows, gridNestingCols]"
      >
        <!-- header cells -->
        <template v-for="(cell, indexCol) in namesColsForRowRender">
          <p v-if="cell.sort" class="cell__header"
            :key="indexCol"
            @click="sortBy( $event, cell.sort, cell.key )"
            :class="{jcc: cell.align === 'center'}"
          >{{ cell.title || cell }}
            <i class="material-icons">unfold_more</i>
          </p>
          <p v-else class="cell__header"
            :key="indexCol"
            :class="{jcc: cell.align === 'center'}"
          >{{ cell.title || cell }}
          </p>
        </template>

        <!-- other cells -->
            <!-- :key="`${row.id || row._id}__${cell.key || cell}`" -->
        <template v-for="(row, indexRow) in paginatedUsers">
          <div class="cell"
            v-for="(cell, indexCol) in namesColsForRowRender"
            :key="`${indexRow}__${indexCol}`"
            :data-row="indexRow"
            :data-col="indexCol"
            :class="{'hover-active': currentElem == indexRow, jcc: cell.align === 'center'}"
          >
            <slot v-if="!row[cell.key || cell]"
              name="operations"
              :row_id="row._id"
            ></slot>
            <slot v-else :name="(cell.key || cell)"
              :cell="row[cell.key || cell]"
            >{{ row[cell.key || cell] }}</slot>
          </div>
        </template>
      </div>

      <!-- last-col -->
      <div class="last-col"
        v-if="showFixedLastCol"
        :class="{'shadow-active': shadowRightActive}"
        :style="gridNestingRows"
      >
        <!-- header cell -->
        <div v-if="fixed_last_col.sort" class="cell__header row"
          @click="sortBy( $event, fixed_last_col.sort, fixed_last_col.key )"
          :class="{jcc: fixed_last_col.align === 'center'}"
        >
          {{ fixed_last_col.title || fixed_last_col.key }}
          <i class="material-icons">unfold_more</i>
        </div>
        <div v-else class="cell__header row"
          :class="{jcc: fixed_last_col.align === 'center'}"
        >{{ fixed_last_col.title || fixed_last_col.key }}
        </div>

        <!-- other cells -->
        <div class="cell" data-last-col
          v-for="(row, indexRow) in paginatedUsers"
          :key="row.id"
          :data-row="indexRow"
          :class="{'hover-active': currentElem == indexRow, jcc: fixed_last_col.align === 'center'}"
        >
          <slot v-if="!fixed_last_col.key"
            name="operations"
            :row_id="row._id"
          ></slot>
          <template v-else>
            {{ row[fixed_last_col.key] }}
          </template>
        </div>
      </div>

    </div>

    <!-- footer -->
    <div v-if="data_tables.length > 10" class="footer-table">
      <div class="footer-table-left-block"></div>
      <div v-if="data_tables.length > userPerPages" class="v-table__pagination">
        <div class="page"
          v-for="page in pages"
          :key="page"
          @click="pageClick(page)"
          :class="{'page_selected': page === pageNumber}"
        >{{ page }}
        </div>
      </div>
      <p class="count-row"
        @click="changeCountRow"
      >Показывать строк по:
        <span :class="{'count-row_selected': 10 === userPerPages}"
          data-count-row="10"
        >10</span>
        <span :class="{'count-row_selected': 20 === userPerPages}"
          data-count-row="20"
        >20</span>
        <span :class="{'count-row_selected': 50 === userPerPages}"
          data-count-row="50"
        >50</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data_tables: {
      type: Array,
      default: () => {
        return []
      }
    },
    fixed_first_col: {
      type: [Object, Boolean],
      default: false
    },
    fixed_last_col: {
      type: [Object, Boolean],
      default: false
    },
    onlyNeedCenterCols: {
      type: [String, Array, Boolean],
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
      currentWidthTable: 0, // текущая ширина таблицы (для изменения ширины колонок)
    }
  },

  computed: {
    // for .shadow-active & change width cols table при изменении ширины экрана
    currentWidthWindow() {
      return this.$store.getters['layoutChallenge/getCurrentWidthWindow']
    },

    // показываем фиксированные столбцы и есть ли они?
    showFixedFirstCol() {
      return this.isShowFixedCol(this.fixed_first_col)
    },
    showFixedLastCol(){
      return this.isShowFixedCol(this.fixed_last_col)
    },

    // grid styles
    gridMainColumns() {
      const width = this.currentWidthTable
      // console.log('[WIDTH TABLE]: ', this.currentWidthTable)

      let firstCol = this.showFixedFirstCol ? getMaxWidthCol(this.fixed_first_col) : ''
      let lastCol = this.showFixedLastCol ? getMaxWidthCol(this.fixed_last_col) : ''

      function getMaxWidthCol(col) {
        if (width > 0 && width < 480) return `minmax(auto, ${col.maxWidthSmPhone || '7rem'})`
        else if (width >= 480 && width < 768) return `minmax(auto, ${col.maxWidthPhone || '10rem'})`
        else if (width >= 768 && width < 980) return `minmax(auto, ${col.maxWidthTablet || '15rem'})`
        else if (width >= 980 && width < 1280) return `minmax(auto, ${col.maxWidthSmDesktop || '20rem'})`
        else if (width >= 1280) return `minmax(auto, ${col.maxWidthDesktop || '1fr'})`
        else if (width <= 0) return 'minmax(min-content, 1fr)' // при mounted width === 0, также на практике в момент загрузки бывает width < 0 , поэтому смотрим и на меньше чем 0
      }

      const centerCols = width < 1280 ? 'minmax(auto, 100%)' : 'auto' // если здесь меняеть значение, то надо его менять и в widthCellFirstCol()

      return { gridTemplateColumns: `${firstCol} ${centerCols} ${lastCol}` }
    },
    gridNestingRows() {
      return {
        gridTemplateRows: `5rem repeat(${this.paginatedUsers.length}, 5.3rem)`
        // т.к. этот шаблон применяется в разных столбцах отдельных грядов,
        // использовать minmax(4rem, 1fr) не приемлимо - в случае переноса строк строки будут иметь разную высоту
      }
    },
    gridNestingCols() {
      if (this.onlyNeedCenterCols) {
        return {
          gridTemplateColumns: `repeat(${this.namesColsForRowRender.length}, minmax(min-content, 1fr))`
        }
      } else {
        // узнаем сколько фиксированных столбцов
        let countFixedCol = 0
        countFixedCol = this.showFixedFirstCol ? ++countFixedCol : countFixedCol
        countFixedCol = this.showFixedLastCol  ? ++countFixedCol : countFixedCol

        const countCol = Object.keys(this.data_tables[0]).length - countFixedCol // вычетаем первый и последний столбцы (if они фиксрованные)
        return {
          gridTemplateColumns: `repeat(${countCol}, minmax(min-content, 1fr))`
        }
      }
    },
    widthCellFirstCol() {
      const width = this.currentWidthTable
      if (width !== 0 && width < 480) return { maxWidth: this.fixed_first_col.maxWidthSmPhone || '7rem' }
      else if (width >= 480 && width < 768) return { maxWidth: this.fixed_first_col.maxWidthPhone || '10rem' }
      else if (width >= 768 && width < 980) return { maxWidth: this.fixed_first_col.maxWidthTablet || '15rem' }
      else if (width >= 980 && width < 1280) return { maxWidth: this.fixed_first_col.maxWidthSmDesktop || '20rem' }
      else if (width >= 1280) return  { maxWidth: 'none' } // здесь сбрасываем max-width (при этом в gridMainColumns() пользуемся 'maxWidthDesktop' если оно есть)
      else if (width === 0) return {}
    },

    namesColsForRowRender() {
      const firstCol = this.fixed_first_col
      const lastCol = this.fixed_last_col
      let resultCenterCols = this.onlyNeedCenterCols

      if (this.onlyNeedCenterCols) {
        // добавляем firstCol в начало centerCols
        // если передан фиксированный firstCol И фиксирования нет И если firstCol ещё нет в CenterCols,
        if (firstCol) {
          if (this.isUnfixed(firstCol)) {
            if (this.currentWidthTable !== 0 && (resultCenterCols[0].key !== firstCol.key)) {
              resultCenterCols.unshift(firstCol)
            }
          } else {
            resultCenterCols = resultCenterCols.filter(el => el.key != firstCol.key)
          }
        }

        // добавляем lastCol в конец centerCols
        // если передан фиксированный lastCol И фиксирования нет при определённой ширине таблицы,
        if (lastCol) {
          if (this.isUnfixed(lastCol)) {
            if (resultCenterCols[resultCenterCols.length - 1].key !== lastCol.key) {
              resultCenterCols.push(lastCol)
            }
          } else {
            resultCenterCols = resultCenterCols.filter(el => el.key != lastCol.key)
          }
        }

        return resultCenterCols

      } else {

        const arrAllValue = Object.keys(this.data_tables[0]) // массив с ключами, например было 5
        let filteredArrStep1 = []
        let filteredArrStep2 = []

        filteredArrStep1 = (firstCol && this.isUnfixed(firstCol))
          ? arrAllValue
          : arrAllValue.filter(item => item !== firstCol.key) // стало 4

        filteredArrStep2 = (lastCol && this.isUnfixed(lastCol))
          ? filteredArrStep1
          : filteredArrStep1.filter(item => item !== lastCol.key) // стало 3

        return filteredArrStep2
      }
    },

    // pagination
    pages() {
      return Math.ceil(this.data_tables.length / this.userPerPages)
    },
    paginatedUsers() {
      let from = (this.pageNumber - 1) * this.userPerPages
      let to = from + this.userPerPages
      return this.data_tables.slice(from, to)
    },
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

      // обновляем значение ширины таблицы
      this.currentWidthTable = this.$refs.tableGrid.offsetWidth
    }
  },

  mounted() {
    // определяем первоначальную ширину таблицы. очередность важна, сначала ширину таблицы, потом остальное.
    // далее будем следить за изменением ширины экрана и записывать в эту же переменную
    // также надо следить за открытием/закрытием sidebar, чтобы пересчитывать ширину таблицы
    this.currentWidthTable = this.$refs.tableGrid.offsetWidth

    // if center-cols имеет прокручиваемую область, то add .shadow-active к last-col
    // выставляем задержку, чтобы всё успело зарендериться (иначе resultValue = 0 и тень не появляется)
    this.$nextTick(function () {
      const $centerCols = this.$refs.centerCols // эта строка должна быть внутри $nextTick, иначе последующие вычисления неверны
      // ниже строка не нужна, так как мы по умолчанию имеем таблицу со scrollLeft == 0 (таблица не прокручена от начала)
      // this.shadowLeftActive = $centerCols.scrollLeft == 0 ? false : true
      // при масштабе экрана 125% появляется погрешность, которую попробуем учесть,
      // предполагая, что погрешность не составляет больше 1px
      // исходный вариант был такой: e.target.scrollWidth - e.target.scrollLeft == e.target.offsetWidth
      const resultValue = $centerCols.scrollWidth - $centerCols.scrollLeft - $centerCols.offsetWidth
      this.shadowRightActive = (resultValue < 1) ? false : true
    })
  },

  methods: {
    isShowFixedCol(col) {
      // если передан объект fixed_first_col/last_first_col
      // тогда проверяем дальше, иначе возвращаем false
      if (col) {
        // проверка нужно ли отменить фиксирование col при каком-либо размере таблицы
        return !this.isUnfixed(col)
      }
      return false
    },
    // проверка нужно ли отменить фиксирование col при каком-то размере таблицы
    isUnfixed(col) {
      const width = this.currentWidthTable
      if ( col.phoneUnfixed && width < 480
        || col.tabletUnfixed && width < 768
        || col.smDesktopUnfixed && width < 980
        || col.desktopUnfixed && width < 1280
      ) return true

      return false
    },

    // pagination
    pageClick(page) {
      this.pageNumber = page
    },
    changeCountRow(event) {
      if (event.target.dataset.countRow) {
        this.userPerPages = +event.target.dataset.countRow
      }
    },

    // sort
    sortBy( event, type, key ) {
      if (!type) return

      let directionSort = event.currentTarget.dataset.sort
      // если список в первичном рандомном или обратном порядке
      if (!directionSort || directionSort === 'reversed' ) {
        // то сортируем по возрастанию
        switch (type) {
          case 'text':
            this.data_tables.sort((a,b) => a[`${key}`].localeCompare(b[`${key}`]))
            break
          case 'numbers':
            this.data_tables.sort((a,b) => a[`${key}`] - b[`${key}`])
            break
        case 'numbers-length':
          this.data_tables.sort((a,b) => a[`${key}`].length - b[`${key}`].length)
          break
        }
        event.currentTarget.dataset.sort = 'abc' // может возникнуть желание заменить эту строку на такую: "directionSort = 'abc'" - это не сработает
      } else {
        // иначе сортируем по убыванию
        switch (type) {
          case 'text':
            this.data_tables.sort((a,b) => b[`${key}`].localeCompare(a[`${key}`]))
            break
          case 'numbers':
            this.data_tables.sort((a,b) => b[`${key}`] - a[`${key}`])
            break
          case 'numbers-length':
            this.data_tables.sort((a,b) => b[`${key}`].length - a[`${key}`].length)
            break

          // default:
          //   break
        }
        event.currentTarget.dataset.sort = 'reversed'
      }
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
      // console.log('[mouseoverRows]')
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
      // console.log('[mouseoutRows]')
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

  .first-col,
  .last-col
    z-index: 1 // чтобы central-cols при наведении были тоже под тенью
    overflow: hidden
    // background-color: $theme-color-yellow
  .center-cols
    .cell
      white-space: nowrap // ОБЯЗАТЕЛЕН, иначе всё поедет (запрет переноса строк)

  .first-col
    border-right: 1px solid #e7e7e7
  .last-col
    border-left: 1px solid #e7e7e7

  .shadow-active
    box-shadow: 0 0 10px rgba(0,0,0,.12)

  .cell__header
    white-space: nowrap // ОБЯЗАТЕЛЕН, иначе всё поедет (запрет переноса строк)
    display: flex
    align-items: center
    border-bottom: 1px solid #e7e7e7
    cursor: pointer
    font-weight: 600
    // color: #909399
    color: $color-light-purple2
    // color: $neutral-secondary
    padding: 1rem .8rem

    @media screen and (min-width: $phoneWidth)
      padding: 1rem 1rem
    @media screen and (min-width: $tabletWidth)
      padding: 1rem 1.2rem
      font-size: 1.5rem
    @media screen and (min-width: $smDesktopWidth)
      padding: 1.2rem 1.4rem 1rem
    @media screen and (min-width: $desktopWidth)
      padding: 1.5rem 1.6rem 1.2rem

    i
      font-size: 1.6rem
      vertical-align: middle
      @media screen and (min-width: $smDesktopWidth)
        font-size: 1.8rem

  .cell
    padding: 1rem .8rem
    // text-align: left
    color: #61617e
    display: flex
    align-items: center
    border-bottom: 1px solid #EBEEF5
    transition: $transitionDefaultHover

    @media screen and (min-width: $phoneWidth) // >= 480px
      padding: 1rem 1rem
      // &[data-first-col].hover-active
      //   border-top-left-radius: $borderRadius
      //   border-bottom-left-radius: $borderRadius
      // &[data-last-col].hover-active
      //   border-top-right-radius: $borderRadius
      //   border-bottom-right-radius: $borderRadius
    @media screen and (min-width: $tabletWidth) // >= 768px
      padding: 1rem 1.2rem
      font-size: 1.5rem
    @media screen and (min-width: $smDesktopWidth) // >= 980px
      padding: 1.2rem 1.4rem
    @media screen and (min-width: $desktopWidth) // >= 1280px
      padding: 1.5rem 1.6rem

    // js hover (@mouseoverRows, @mouseoutRows)
    &.hover-active
      background-color: #f7f7f7
      // background-color: $color-light-purple
    &.text-truncation-many-lines
      line-height: calc(5.3rem - 1rem * 2) // связать вместе с js, сделать динамичным
      @media screen and (min-width: $smDesktopWidth) // >= 980px
        line-height: calc(5.3rem - 1.2rem * 2)
      @media screen and (min-width: $desktopWidth) // >= 1280px
        line-height: calc(5.3rem - 1.5rem * 2)

.footer-table
  display: flex
  justify-content: space-between
  align-items: center
  margin: 1.5rem 1rem
  @media screen and (min-width: $tabletWidth) // >= 768px
    margin: 2rem 1rem 1.5rem
  @media screen and (min-width: $smDesktopWidth) // >= 980px
    margin: 2rem 1rem 1rem

  // pagination
  .v-table__pagination
    display: flex
    justify-content: center
    transition: $transitionDefaultHover
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

  // блок, по сколько строк выводить
  .count-row
    &>span
      display: inline-block
      margin: 0.5rem
      width: 3rem
      line-height: 3rem
      height: 3rem
      text-align: center
      background-color: #efefef
      border-radius: $borderRadius
      cursor: pointer
      transition: $transitionDefaultHover
      &:hover
        background-color: $color-purple
        color: #fff
        border: 1px solid $color-purple
      &.count-row_selected
        background-color: $color-purple
        color: #fff
        border: 1px solid $color-purple
</style>
