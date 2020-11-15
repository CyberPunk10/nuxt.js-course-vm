<template>
  <div class="landing-layout">

    <el-menu :default-active="activeIndex" class="el-menu-demo hidden-xs-only" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">Галерея</el-menu-item>
      <el-submenu index="2">
        <template slot="title">Сборки</template>
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item>
      </el-submenu>
      <el-menu-item index="5"><a href="/landing/sborki">Аккумуляторы</a></el-menu-item>
      <el-submenu index="3">
        <template slot="title"><a href="/landing/sborki">Аккумуляторы</a></template>
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item>
      </el-submenu>
      <el-menu-item index="3">BMS платы</el-menu-item>
      <el-menu-item index="4"><i class="el-icon-shopping-cart-2"></i>Корзина</el-menu-item>
    </el-menu>

    <!-- <el-row class="tac hidden-sm-and-up">
      <el-col :span="24">
        <el-menu
          default-active="1-3"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>Меню</span>
            </template>

            <el-menu-item index="1-1">Галерея</el-menu-item>
            <el-menu-item index="1-2">Сборки</el-menu-item>
            <el-menu-item index="1-3">Аккумуляторы</el-menu-item>

            <el-menu-item-group title="Group Two">
              <el-menu-item index="1-4">item three</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

        </el-menu>
      </el-col>

    </el-row> -->

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
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
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
