<template>
  <div>
    <p>Внешний вид</p>
    <p>боковая панель</p>
    <p>тема</p>

    <br><hr><br>

    <div class="sidebar-settings">
      <RadioBtn class="comp-radioBtn" name="mode-view-sidebar" id="mode-view-sidebar-1" title="Sidebar not static and top" />
      <RadioBtn class="comp-radioBtn" name="mode-view-sidebar" id="mode-view-sidebar-2" isChecked title="Main-container not static and static Sidebar" />
      <RadioBtn class="comp-radioBtn" name="mode-view-sidebar" id="mode-view-sidebar-3" title="Main-container not static"/>
    </div>

  </div>
</template>

<script>
export default {
  head: {
    title: `Challenges | ${process.env.appName}`
  },
  layout: 'layout-main-challenges',

  methods: {

  }
}
</script>

<style lang="sass">

</style>
