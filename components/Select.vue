<template>
  <div
    v-html="getTemplateSelect"
    class="select"
    :id="id"
    @click="selectClick"
  ></div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      dataArr: [
        { id: '1', value: 'React' },
        { id: '2', value: 'Vue' },
        { id: '3', value: 'React Native' },
        { id: '4', value: 'Next' },
        { id: '5', value: 'Nest' },
        { id: '6', value: 'Angular' },
        { id: '7', value: 'Nuxt' }
      ],
      selectedId: '2',
      placeholder: "Выберите пожалуйста элемент"
    }
  },

  computed: {
    getTemplateSelect () {
      const data = this.dataArr ? this.dataArr : []
      let placeholder = this.placeholder
      let selectedId = this.selectedId
      let title = placeholder ?? "Placeholder по умолчанию"
      const items = data.map(item => {

        let cls = ''

        if (item.id === selectedId) {
          cls = 'select__item_selected'
          title = item.value
        }

        return `
          <li class="select__item ${cls}" data-type="item" data-id="${item.id}">${item.value}</li>
        `
      })

      return `
        <div class="select__container">
          <div class="select__input" data-type="input">
            <span class="dropdown__btn-span" data-type="value">${title}</span>
            <i class="material-icons" data-type="input">expand_more</i>
          </div>
          <div class="select__dropdown layout-scrollbar layout-cell">
            <ul class="select__list">
              ${items.join('')}
            </ul>
          </div>
        </div>
      `
    }
  },

  methods: {
    selectClick(event) {
      const $el = document.getElementById(this.id)
      const { type } = event.target.dataset

      if (type === 'input' || type === 'value') this.toggle($el)
      else if (type === 'item') this.select($el, event.target)
      else if (type === 'underlay') this.close($el)

      // add handle event click on document
      document.addEventListener('click', this.clickOutsideSelect)
    },

    clickOutsideSelect (e) {

      const target = e.target

      console.log(e.target)
      // if click on select
      if (target.closest('.select')) {
        console.log('[clickOutSideSelect]', e.target)
        // handlerDropdown(target.closest('.select'))
      } else {
        // closeOthersDropdowns(target)
      }

      // document.removeEventListener('click', this.clickOutsideSelect)

    },

    current(selectedId) {
      // вернет объект из this.options.data с id item-a, который выбран по клику и сохранен в this.selectedId
      return this.dataArr.find(item => item.id === selectedId)
    },

    select($el, target) {
      const itemId = target.dataset.id
      $el.querySelector('[data-type="value"]').textContent = this.current(itemId).value

      $el.querySelectorAll(`[data-type="item"]`).forEach(el => {
        el.classList.remove('select__item_selected')
      })

      $el.querySelector(`[data-id="${itemId}"]`).classList.add('select__item_selected')

      this.close($el)
    },

    // open   ( $el ) { $el.classList.add('open') },
    close  ( $el ) { $el.classList.remove('open') },
    toggle ( $el ) { $el.classList.toggle('open') }
  }
}
</script>

<style lang="sass">
.select
  $height: 4.6rem
  z-index: 101
  position: relative
  margin-bottom: 2rem
  user-select: none

  &__container
    height: $height
    overflow: hidden
    border: 1px solid $color-dark-shade-25
    border-radius: 4px
    transition: $transitionDefault

  &__input
    border-bottom: 1px solid $color-dark-shade-25
    height: $height
    display: flex
    align-items: center
    justify-content: space-between
    padding: 0 1rem
    background-color: #fff
    cursor: pointer
    .material-icons
      transition: $transitionDefault

  &__dropdown
    height: calc(3 * #{$height})
    overflow-y: auto

  &__item
    height: $height
    display: flex
    align-items: center
    padding: 0 1rem
    background-color: #fff
    // border-bottom: 1px solid $color-dark-shade-25

    // &:last-child
    //   border-bottom: none

    &:hover
      background-color: #ebebeb
      cursor: pointer
      transition: .15s background-color ease-in

    &_selected
      background-color: #efefef


  &.open
    .select__container
      height: calc(4 * #{$height} + 1px)
      box-shadow: 0px 10px 20px $color-dark-shade-5
    .select__input
      .material-icons
        transform: rotate(180deg)


</style>
