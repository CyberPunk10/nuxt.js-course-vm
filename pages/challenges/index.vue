<template>
  <div class="">
    <CalendarGitHub />

    <div class="test-sidebar-grid">
      <div class="icon"><i class="ni ni-align-left-2"></i></div>
      <div class="text"><p>text</p></div>
      <div class="icon"><i class="ni ni-align-left-2"></i></div>
      <div class="text"><p>text</p></div>
      <div class="icon"><i class="ni ni-align-left-2"></i></div>
      <div class="text"><p>text</p></div>
      <div class="icon"><i class="ni ni-align-left-2"></i></div>
      <div class="text"><p>text</p></div>
      <div class="icon"><i class="ni ni-align-left-2"></i></div>
      <div class="text"><p>text</p></div>
    </div>
    <div class="test-sidebar-grid grid2">
      <div class="icon"><i class="ni ni-align-left-2"></i></div>
      <div class="text"><p>text</p></div>
    </div>
    <div class="test-sidebar-grid grid2">
      <div class="icon"><i class="ni ni-align-left-2"></i></div>
      <div class="text"><p>text</p></div>
    </div>
    <div class="test-sidebar-grid grid2">
      <div class="icon"><i class="ni ni-align-left-2"></i></div>
      <div class="text"><p>text</p></div>
    </div>
    <div class="test-sidebar-grid grid2">
      <div class="icon"><i class="ni ni-align-left-2"></i></div>
      <div class="text"><p>text</p></div>
    </div>

    <div
      class="btn-toggle"
      data-toggle="test-sidebar-grid"
      @click="toggleSidebarGrid"
    >$toggleSidebarGrid</div>
  </div>
</template>

<script>
export default {
  head: {
    title: `Challenges | ${process.env.appName}`
  },
  layout: 'layoutMainChallenges',
  methods: {
    toggleSidebarGrid(event) {
      const $toggleSidebarGrid = document.querySelectorAll(`.${event.target.dataset.toggle}`)
      $toggleSidebarGrid.forEach(item => item.classList.toggle('test-collapse'))
    }
  }
}
</script>

<style lang="sass">
.test-sidebar-grid
  margin-top: 30px
  margin-bottom: 20px
  display: grid
  grid: repeat(5, 5rem) / 6rem 1fr // row/col
  grid-gap: 1px
  background-color: #e2e2e2
  border: 1px solid #e2e2e2
  width: 100%
  transition: all 1s ease
  overflow-x: hidden
  .icon,
  .text
    background-color: #fff
    display: flex
    align-items: center
  .icon
    justify-content: center
  .text
    padding-left: 2rem

.test-sidebar-grid.test-collapse
  width: 6rem

.test-sidebar-grid.grid2
  margin: 0
  grid: 5rem / 6rem 1fr // row/col



</style>
