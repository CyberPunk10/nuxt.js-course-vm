<template>
  <div class="wrap">
    <div class="container-mobile">

      <IndexFormSport :formSport="formSport" class="form-sport-component"/>

      <IndexFormSport :formSport="formSport2" class="form-sport-component"/>

      <p style="color: #242626">Статистика, Свой комментарий к форме, Настройки, Подсказки</p>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

      formSport: {
        title: 'Отжимания',
        mode: 1,
        countCol: 4,
        players: [
          {id: 1, name: 'Player 1', result: [null, null, null, null]},
          {id: 2, name: 'Player 2', result: [null, null, null, null]},
          {id: 3, name: 'Player 3', result: [null, null, null, null]}
        ],
      },

      formSport2: {
        title: 'Подтягивания с утяжелением',
        mode: 2,
        countCol: 4,
        players: [
          {id: 1, name: 'Player 1', result: [null, null, null, null]},
          {id: 2, name: 'Player 2', result: [null, null, null, null]},
          {id: 3, name: 'Player 3', result: [null, null, null, null]}
        ],
      }
    }
  },

  // methods: {
  //   addcol(count) {
  //     console.log('count', count)
  //   }
  // }
}
</script>

<style lang="sass">
$width-first-column-grid: 7rem
.wrap
  display: flex
  justify-content: center
  align-items: center
.container-mobile
  // max-width: 320px
  // height: 568px
  // overflow-y: auto
  width: 100%
  border: 1px solid $color-dark-shade-10
  background-color: $theme-color-yellow
  color: #e6e6e6
  padding: 0 1rem 1rem

.form-sport-component
  margin-bottom: 5rem

</style>
