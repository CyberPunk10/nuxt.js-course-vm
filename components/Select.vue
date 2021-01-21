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
        <div class="select__backselect" data-type="backselect"></div>
        <div class="select__input" data-type="input">
          <span class="dropdown__btn-span" data-type="value">${title}</span>
          <i class="material-icons" data-type="input">expand_more</i>
        </div>
        <div class="select__dropdown layout-scrollbar layout-cell">
          <ul class="select__list">
            ${items.join('')}
          </ul>
        </div>
      `
    }
  },

  methods: {
    selectClick(event) {
      const $el = document.getElementById(this.id)
      const { type } = event.target.dataset

      if (type === 'input' || type === 'value') this.toggle($el)
      else if (type === 'item')
        this.select($el, event.target)
      else if (type === 'backselect')
        this.close($el)

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

    toggle ($el) { $el.classList.toggle('open') },
    open   ($el) { $el.classList.add('open') },
    close  ($el) { $el.classList.remove('open') }
  }
}
</script>

<style lang="sass">
.select
  $height: 4.6rem
  z-index: 101

  position: relative

  &.open

    .select__input
      border-bottom-left-radius: 0
      border-bottom-right-radius: 0
      .material-icons
        transform: rotate(180deg)

    .select__dropdown,
    .select__backselect
      display: block

  &__input
    border: 1px solid $color-dark-shade-25
    border-radius: 4px
    box-sizing: border-box
    height: $height
    display: flex
    align-items: center
    justify-content: space-between
    padding: 0 1rem
    cursor: pointer
    user-select: none

  &__dropdown
    display: none
    position: absolute
    top: $height
    left: 0
    right: 0
    max-height: calc(3 * #{$height})
    overflow-y: auto
    border: 1px solid $color-dark-shade-25
    border-bottom-left-radius: 4px
    border-bottom-right-radius: 4px
    border-top: none
    box-sizing: border-box
    box-shadow: 0px 10px 20px $color-dark-shade-5

  &__item
    height: $height
    display: flex
    align-items: center
    padding: 0 1rem
    // border-bottom: 1px solid $color-dark-shade-25
    background-color: #fff

    &:last-child
      border-bottom: none

    &:hover
      background-color: #ebebeb
      cursor: pointer
      transition: .15s background-color ease-in

    &_selected
      background-color: #efefef

  &__backselect
    position: fixed
    display: none
    z-index: -1
    top: 0
    left: 0
    right: 0
    bottom: 0
    background-color: transparent

</style>
