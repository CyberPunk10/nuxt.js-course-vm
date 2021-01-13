<template>
  <div class="container-mobile layout-scrollbar layout-cell">

    <IndexFormSport
      v-for="(formSport, index) in allFormsSport" :key="index"
      :formSport="formSport"
      :indexForm="index"
      class="form-sport-component"
    />

    <p style="color: #2a2424">Статистика, Свой комментарий к форме, Настройки, Подсказки</p>

  </div>
</template>

<script>
  export default {
    head: {
      title: `Challenges | ${process.env.appName}`
    },
    layout: 'layoutMainChallenges',
    computed: {
      allFormsSport () {
        return this.$store.state.challengeForms.allFormsSport
      }
    },
  }
</script>


<style lang="sass">
$width-first-column-grid: 7rem
.container-mobile
  width: 100%
  height: calc(100vh - #{$height-header})
  overflow-y: auto
  border: 1px solid $color-dark-shade-10
  background-color: $theme-color-yellow
  color: #e6e6e6
  padding: 0 1rem 1rem

.form-sport-component
  margin-bottom: 5rem

</style>
