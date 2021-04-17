<template>
  <div
    class="footer-mobile"
    @click="clickFooterMobile"
  >
    <template v-for="(link, index) in navLinks">
      <NuxtLink
        :to="link.url"
        class="navbar-brand"
        :key="index"
      >
        <i :class="link.icon"></i>
      </NuxtLink>
    </template>
  </div>
</template>

<script>
export default {
  computed: {
    isDeveloper() {
      return this.$store.getters['authStore/isDeveloper']
    },
    isChallenges() {
      return this.$store.getters['authStore/isChallenges']
    },
    isMockupAdmin() {
      return this.$store.getters['authStore/isMockupAdmin']
    },
    navLinks() {
      const allLinksFooterMobile = this.$store.getters['sidebarLayoutChallenges/footerMobileLinks']
      let onlyNeedLinks // сюда отфильтруем только нужные ссылки в зависимости от контекста

      if (this.isDeveloper) {
        onlyNeedLinks = allLinksFooterMobile.filter(el => (el.isDev || el.isChallenges))
      } else if (this.isChallenges) {
        onlyNeedLinks = allLinksFooterMobile.filter(el => el.isChallenges)
      } else if (this.isMockupAdmin) {
        return allLinksFooterMobile.filter(el => (el.isMockup || el.isMockupAdmin))
      } else {
        return allLinksFooterMobile.filter(el => (el.isMockup && !this.isChallenges && !this.isDeveloper && !this.isMockupAdmin))
      }

      // меняем порядок
      let footerMobileLinks = []
      let linksOther = []

      if (this.isDeveloper || this.isChallenges) {
        const countLinks = onlyNeedLinks.length

        onlyNeedLinks.forEach(el => {
          switch (el.name) {
            case 'Мой профиль':
              footerMobileLinks[countLinks - 1] = el
              break
            case 'Мои челленджи':
              footerMobileLinks[countLinks - 2] = el
              break
            case 'Добавить прогресс':
              footerMobileLinks[countLinks - 3] = el
              break
            case 'Друзья':
              footerMobileLinks[countLinks - 4] = el
              break
            case 'Главная':
              footerMobileLinks[countLinks - 5] = el
              break
            default:
              linksOther.push(el)
          }
        })
        footerMobileLinks = linksOther.concat(footerMobileLinks)

        // удаление пустых элементов, которые могут возникнуть после switch
        footerMobileLinks = footerMobileLinks.filter(n => n)

        return footerMobileLinks
      }
    }
  },
  methods: {
    clickFooterMobile() {
      this.$store.dispatch('sidebarLayoutChallenges/closeSidebar')
    }
  }
}
</script>

<style lang="sass">
.footer-mobile
  display: flex
  justify-content: space-around
  align-items: center
  // border-top: 1px solid $color-border-default
  box-shadow: 0 0 2px rgba(88,88,88,.15)
  border-top-left-radius: $borderRadius
  border-top-right-radius: $borderRadius
  // @media screen and (max-width: calc(#{$phoneWidth} - 1px)) // < 480px
  //   box-shadow: 0 0 4px rgba(88,88,88,.15)
  .navbar-brand
    line-height: $header-height
    text-align: center
    font-weight: bold
    font-size: 2rem
    color: $color-purple
    color: $color-text-grey
    width: 100%
  .nuxt-link-exact-active
    i, span
      color: #30a14e
      color: $color-purple
      color: $theme-color-main
      color: lighten($theme-color-main, 15%)

  @media print
    display: none
</style>
