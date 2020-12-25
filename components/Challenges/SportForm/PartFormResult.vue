<template>
<div class="form-sport-result">
  <div class="cell-input cell-descr">Всего:</div>
    <div class="cells-group"
      v-for="(item, index) in players" :key="index"
    >
      <p>
        <span class="name">{{ players[index].name }}</span><br>
        <span class="">{{ players[index].resultAll ? players[index].resultAll : '-' }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    players: {
      type: Array,
      require: true
    },
  },

  data() {
    return {

    }
  },

  computed: {
    name() {
      return this.players[this.index].name
    }
  }
}
</script>

<style lang="sass">
.form-sport-result
  grid: repeat(1, 5rem)/$width-first-column-grid repeat(3, 1fr) // row/col
  padding-right: 1rem
  // .cell-input
  //   min-width: 3rem
  // .cell-width-x3
  //   min-width: 9.2rem
  .cells-group
    display: flex
    justify-content: center
    align-items: center
    border: 1px solid rgba(255,255,255,.1)
    border-radius: 4px
    user-select: none
    margin-left: 1px
    margin-right: 1px
    &:nth-child(2)
      margin-left: 0
    &:last-child
      margin-right: 0

    p
      text-align: center
      span
        white-space: nowrap // запрет переноса строк
    .name
      color: #aaa
      font-size: 1.2rem
</style>
