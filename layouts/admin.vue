<template>
  <div>
    <el-container class="admin-layout-wrap">
      <el-aside width="200px">
        <AppAside />
      </el-aside>
      <el-main class="layout-scrollbar layout-cell">
        <Nuxt />
      </el-main>
    </el-container>
    <TeleportMenu />
  </div>
</template>

<script>
import AppAside from '@/assets/admin/AppAside.vue'

export default {
  name: 'admin', // Иначе ошибка: [Vue warn]: Invalid component name: "layouts/layout-main-challenges.vue". Component names should conform to valid custom element name in html5 specification.

  components: { AppAside },

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

  mounted() {
    /* Работа со скоролом */
    // взято отсюда: https://habr.com/ru/company/ruvds/blog/468405/
    // легкий простой код на проверку фиксированные ли scroll-ы у пользователя или нет
    // Scrollbar Width Test
    // Adds `layout-scrollbar-obtrusive` class to body if scrollbars use up screen real estate
    const parent = document.createElement("div")
    parent.setAttribute("style", "width:30px; height:30px;")
    parent.classList.add('scrollbar-test')

    const child = document.createElement("div")
    child.setAttribute("style", "width:100%; height:40px")
    parent.appendChild(child)
    document.body.appendChild(parent)

    // Measure the child element, if it is not
    // 30px wide the scrollbars are obtrusive.
    const scrollbarWidth = 30 - parent.firstChild.clientWidth
    if (scrollbarWidth) {
      document.body.classList.add("layout-scrollbar-obtrusive")
    }
    document.body.removeChild(parent)

  }
}
</script>

<style lang="sass" scoped>
.admin-layout-wrap
  height: 100vh
</style>
