<template>
  <div class="wrap">
    <div class="container-mobile">

      <IndexFormSport
        v-for="(formSport, index) in allFormsSport" :key="index"
        :formSport="formSport"
        :indexForm="index"
        class="form-sport-component"
      />

      <p style="color: #2a2424">Статистика, Свой комментарий к форме, Настройки, Подсказки</p>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },

  computed: {
    allFormsSport () {
      return this.$store.state.challengeForms.allFormsSport
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
