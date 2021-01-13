<template>
  <div class="header-wrapper">
    <button class="sidebar-toggle" data-btn="sidebar-toggle">Меню</button>

    <div class="menu">
      <NuxtLink
        v-for="link in links" :key="link.url"
        :to="link.url"
      >
        {{ link.title }}
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {title: 'Главная', url: '/challenges/'},
        {title: 'Создать ch', url: '/challenges/create'},
        {title: 'Добавить прогресс', url: '/challenges/addprogress'},
        {title: 'Mobile', url: '/challenges/mobile'},
        {title: 'layout-main', url: '/layout-main'},
        {title: 'Table', url: '/challenges/table'}
      ]
    }
  }
}
</script>

<style lang="sass">
.header-wrapper
  top: 0
  height: $height-header
  display: flex
  justify-content: space-between
  background-color: #fff
  .sidebar-toggle
    margin: .5rem
    padding: 1rem
  .menu
    height: $height-header
    width: 100%
    border-bottom: 1px solid #e6e6e6
    display: flex
    justify-content: center
    align-items: center
    @media screen and (max-width: $tableWidth)
      font-size: 6px
    a
      color: #909399
      height: $height-header
      line-height: $height-header
      padding: 0 1.5rem
      &:hover
        border-bottom: 2px solid #409EFF
</style>
