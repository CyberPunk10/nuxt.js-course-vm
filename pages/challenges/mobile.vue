<template>
  <div class="container-yellow">

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
    layout: 'layout-main-challenges',
    computed: {
      allFormsSport () {
        return this.$store.getters['challengeForms/allFormsSport']
      }
    },

    // вместо этого проверять какой роут в layout и там подставлять класс
    mounted(){
      // custom body color
      document.body.classList.add('custom-bgcolor')
      const $mainContent = document.querySelector('.layout-wrapper>.main-container>.main-content')
      $mainContent.classList.add('layout-scrollbar-yellow-container', 'layout-cell-yellow-container')
      $mainContent.classList.remove('layout-scrollbar', 'layout-cell')
    },
    beforeDestroy() {
      // return default body color
      document.body.classList.remove('custom-bgcolor')
      const $mainContent = document.querySelector('.layout-wrapper>.main-container>.main-content')
      $mainContent.classList.add('layout-scrollbar', 'layout-cell')
      $mainContent.classList.remove('layout-scrollbar-yellow-container', 'layout-cell-yellow-container')
    }

  }
</script>


<style lang="sass">
body.custom-bgcolor
  background-color: var(--theme-color-yellow)
  .layout-wrapper>.main-container
    background-color: transparent
    @media screen and (max-width: calc(#{$phoneWidth} - 1px)) // < 480px
      background-color: var(--theme-color-yellow)

.container-yellow
  color: #e6e6e6

.form-sport-component
  margin-bottom: 5rem

</style>
