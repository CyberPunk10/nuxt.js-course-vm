<template>
  <div class="landing-layout">

    <el-menu :default-active="activeIndex" class="el-menu-demo hidden-xs-only" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">Галерея</el-menu-item>
      <el-menu-item index="2">Сборки</el-menu-item>
      <el-menu-item index="3"><a href="/landing/sborki">Аккумуляторы</a></el-menu-item>
      <el-menu-item index="4">BMS платы</el-menu-item>
      <el-menu-item index="5"><a href="/landing/calendar-github">Кастом</a></el-menu-item>
      <el-menu-item index="8"><i class="el-icon-shopping-cart-2"></i>Корзина</el-menu-item>
      <!-- <el-submenu index="6">
        <template slot="title"><a href="/landing/sborki">Аккумуляторы</a></template>
        <el-menu-item index="6-1">item one</el-menu-item>
        <el-menu-item index="6-2">item two</el-menu-item>
        <el-menu-item index="6-3">item three</el-menu-item>
      </el-submenu> -->
      <!-- <el-submenu index="7">
        <template slot="title">Сборки</template>
        <el-menu-item index="7-1">item one</el-menu-item>
        <el-menu-item index="7-2">item two</el-menu-item>
        <el-menu-item index="7-3">item three</el-menu-item>
      </el-submenu> -->
    </el-menu>

    <Nuxt />
    <TeleportMenu/>
  </div>
</template>

<script>
export default {
  computed: {
    error() {
      return this.$store.getters.error
    }
  },
  watch: {
    error(value) {
      this.$message.error(value.response.data.message)
    }
  },

  data() {
    return {
      activeIndex: '1'
    };
  },
  // camputed: {
  //   activeIndex: this.route.name
  // },
  // watch: {
  //   activeIndex() {
  //     const activeIndex = document.querySelector('activeIndex').dataset
  //     return
  //   }
  // },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style lang="sass" scoped>
.langing-layout
  display: flex
  justify-content: center
  align-items: center
  width: 100%
  padding-top: 5rem
.el-menu-demo
  display: flex
  justify-content: center
</style>
