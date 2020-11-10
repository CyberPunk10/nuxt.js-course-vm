<template>
  <div class="landing-layout">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">Галерея</el-menu-item>
      <el-submenu index="2">
        <template slot="title">Сборки</template>
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item>
      </el-submenu>
      <el-menu-item index="4"><a href="/landing/sborki">Аккумуляторы</a></el-menu-item>
      <el-submenu index="3">
        <template slot="title"><a href="/landing/sborki">Аккумуляторы</a></template>
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item>
      </el-submenu>
      <el-menu-item index="3">BMS платы</el-menu-item>
    </el-menu>
    <Nuxt />
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
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
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
