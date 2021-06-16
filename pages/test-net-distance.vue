<template>
  <div class="wrap-net-distance">

    <h2>Search substr in 10 000 000 strings</h2>

    <el-input
      placeholder="Please input"
      v-model="input"
      class="input-search"
    ></el-input>
    <el-button
      type="primary"
      icon="el-icon-search"
      @click="searchMethod"
    >Search</el-button>
    <el-tag
      v-if="resultSearch !== ''"
      type="success"
      effect="plain"
    >
      {{ resultSearch }}
    </el-tag>

    <AboutMe :links="links" />

    <h2>Drag and Drop</h2>

    <div
      class="drop-zone"
      @drop="onDrop($event, 1)"
      @dragenter.prevent
      @dragover.prevent
    >
      <div
        v-for="item in getList(1)"
        :key="item.id"
        @dragstart="startDrag($event, item)"
        class="drag-el"
        draggable="true"
      >{{item.title}}</div>
    </div>

    <div
      class="drop-zone"
      @drop="onDrop($event, 2)"
      @dragenter.prevent
      @dragover.prevent
    >
      <div
        v-for="item in getList(2)"
        :key="item.id"
        @dragstart="startDrag($event, item)"
        class="drag-el"
        draggable="true"
      >{{item.title}}</div>
    </div>

  </div>
</template>

<script>
export default {
  head: {
    title: `test-NetDistance | ${process.env.appName}`
  },

  layout: 'layout-main-challenges',

  data() {
    return {
      // Search substr in 10 000 000 strings
      input: '',
      resultSearch: '',

      // Drag and Drop
      items: [
        { id: 0, title: 'Item A', list: 1 },
        { id: 1, title: 'Item B', list: 1 },
        { id: 2, title: 'Item C', list: 2 },
      ],

      // Other
      links: [
        { title: 'Вакансия', url: 'https://career.habr.com/vacancies/1000069398' },
      ]
    }
  },

  computed: {
    arrStrings() {
      return this.$store.getters['delTestSearch10000000/getArrStrings']
    },
  },

  methods: {
    // Search substr in 10 000 000 strings
    searchMethod() {
      this.$store.dispatch('delTestSearch10000000/setArrStrings')

      if (this.input === '') {
        this.resultSearch = ''
        return
      }
      let count = 0
      this.arrStrings.forEach(el => {
        if (el.startsWith(this.input)) count++
      })
      this.resultSearch = count ? count : 0
    },

    // Drag and Drop
    getList(list) {
      return this.items.filter(item => item.list === list)
    },
    startDrag(event, item) {
      event.dataTransfer.dropEffect = 'move'
      event.dataTransfer.effectAllowed = 'move'
      event.dataTransfer.setData('itemID', item.id)
    },
    onDrop(event, list) {
      const itemID = event.dataTransfer.getData('itemID')
      const item = this.items.find(item => item.id == itemID)
      item.list = list
    }
  }
}
</script>

<style lang="sass">
.wrap-net-distance
  h2
    margin-top: 3rem
    margin-bottom: 1rem
    &:first-child
      margin-top: 0

  .input-search
    max-width: 21rem
  .drop-zone
    width: 50%
    margin: 1rem auto
    background-color: #ecf0f1
    border: 2px dashed #dbe0e0
    padding: 1rem
    min-height: 1rem
  .drag-el
    background-color: #3498db
    color: #fff
    padding: .5rem
    margin-bottom: 1rem
    &:nth-last-of-type(1)
      margin-bottom: 0
</style>










