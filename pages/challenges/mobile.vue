<template>
  <div class="container-yellow layout-scrollbar-yellow-container layout-cell-yellow-container">

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
    middleware: ['scroll-top-to-start'],
    computed: {
      allFormsSport () {
        return this.$store.getters['challengeForms/allFormsSport']
      }
    },
  }
</script>


<style lang="sass">
$width-first-column-grid: 7rem
.container-yellow
  // border-top: 1px solid $color-dark-shade-10
  // border-left: 1px solid $color-dark-shade-10
  background-color: $theme-color-yellow
  color: #e6e6e6

.form-sport-component
  margin-bottom: 5rem

</style>
