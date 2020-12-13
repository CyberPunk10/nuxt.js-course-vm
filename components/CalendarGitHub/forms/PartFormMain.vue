<template>
  <!-- <div class="form-sport-main"></div> -->
  <div class="form-sport-main">
    <div class="cell-input cell-descr cell-descr-name">{{ name }}</div>
    <div class="cell-input"><input type="number" value="21"></div>
    <div class="cell-input"><input type="text" value="281"></div>
    <div class="cell-input"><input type="number" value="21"></div>
    <div class="cell-input"><input type="number" value="21"></div>
    <div class="cell-input cell-plus"></div>
  </div>
</template>

<script>
export default {
  props: {
    // countCol: {
    //   type: Number,
    //   require: true
    // },
    name: {
      type: String,
      require: true
    }
  },

  data() {
    return {

    }
  }
}

// export default {
//   props: {
//     countCol: {
//       type: Number,
//       require: true
//     },
//     players: {
//       type: Array,
//       require: true
//     }
//   },

//   data() {
//     return {

//     }
//   },

//   async mounted() {
//     const $el = document.querySelector('.form-sport-main')

//     const players = this.players
//     const countPlayers = players.length
//     const countCol = this.countCol

//     $el.style.grid = `repeat(${ countPlayers }, 4rem)/70px repeat(${ countCol + 1 }, 1fr)`

//     // const calendarGraph = this.calendarGraph

//     let resultHtml = ``


//     createRow()

//     function createRow() {
//       for (let i = 0; i < countPlayers; i++) {
//         resultHtml += `
//           <div class="cell-input cell-descr cell-descr-name">${players[i].name}</div>
//           ${ createInputs() }
//           <div class="cell-input cell-plus"></div>
//         `
//       }
//     }
//     function createInputs() {
//       let html = ''
//       for (let i = 0; i < countCol; i++) {
//         html += `
//           <div class="cell-input"><input type="text" value=""></div>
//         `
//       }
//       return html
//     }

//     $el.innerHTML = resultHtml
//   }
// }
</script>

<style lang="sass">
.form-sport-main
  grid: repeat(1, 4rem)/$width-first-column-grid repeat(5, 1fr) // row/col
  padding-bottom: .5rem
  input
    max-width: 5.5rem

.form-sport-main-2stroke
  grid: repeat(2, 3rem)/$width-first-column-grid repeat(5, 1fr) // row/col
  padding-bottom: .5rem
  padding-top: .5rem
  input
    max-width: 5.5rem
  .name-1
    grid-column: 1/2
    grid-row: 1/3
  .name-2
    grid-column: 1/2
    grid-row: 3/5
  .name-3
    grid-column: 1/2
    grid-row: 5/7

.form-sport-main-2stroke.last-2stroke
  padding-bottom: 1rem
</style>
