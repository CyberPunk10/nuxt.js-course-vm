// import Vue from 'vue'

export const state = () => ({
  isSidebarActive: false,
  navLinks: [
    // challenges
    {
      name: 'Главная',
      icon: 'fas fa-home',
      url: '/challenges',
      onSidenav: true,
      onFooterMobile: true
    },
    {
      name: 'Мой профиль',
      icon: 'far fa-user',
      url: '/challenges/my-profile',
      onSidenav: true,
      onHeader: true,
      onFooterMobile: true,
      onHeaderUserAvatarMenu: true,
      // isMenuExpanded: true,
      children: [
        {
          name: 'Статистика',
          // icon: 'far fa-chart-bar',
          url: '/challenges/statistics'
        },
      ],
    },
    {
      name: 'Друзья',
      icon: 'fas fa-user-friends',
      url: '/challenges/statistics',
      onSidenav: true,
      onFooterMobile: true
    },
    {
      name: 'page-challenges-test-scroll',
      icon: 'fas fa-user-friends',
      url: '/page-challenges-test-scroll',
      onSidenav: true,
    },
    {
      name: 'Мои челленджи',
      icon: 'fas fa-chart-pie',
      url: '/challenges/table',
      onSidenav: true,
      onFooterMobile: true,
      // isMenuExpanded: true,
      children: [
        {
          name: 'Dashboard',
          url: '/challenges/settings',
        },
        {
          name: 'Alternative',
          url: '/challenges/settings',
        },
      ]
    },
    {
      name: 'Создать челлендж',
      icon: 'far fa-file',
      url: '/challenges/create',
      onSidenav: true
    },
    {
      name: 'Добавить прогресс',
      icon: 'fas fa-plus',
      url: '/challenges/addprogress',
      onSidenav: true,
      onHeader: true,
      onFooterMobile: true
    },
    {
      name: 'Тренировка',
      icon: 'far fa-heart',
      url: '/challenges/mobile',
      onSidenav: true,
      // isMenuExpanded: false,
      children: [
        {
          name: 'Dashboard',
          url: '/challenges/mobile',
        },
        {
          name: 'Alternative',
          url: '/challenges/settings',
        },
      ]
    },
    {
      name: 'Настройки',
      // icon: 'fas fa-angle-right',
      icon: 'fas fa-heart',
      url: '/challenges/settings',
      onSidenav: true,
      onHeaderUserAvatarMenu: true,
    }
  ]
})

// icon: 'fas fa-chevron-right'

export const mutations = {
  toggleSidebar(state) { state.isSidebarActive = !state.isSidebarActive },
  closeSidebar(state) { state.isSidebarActive = false },
  openSidebar(state) { state.isSidebarActive = true },
}

export const actions = {
  toggleSidebar({commit}) { commit('toggleSidebar') },
  closeSidebar({commit}) { commit('closeSidebar') },
  openSidebar({commit}) { commit('openSidebar') },
}

export const getters = {
  sidenavLinks: state => {
    const sidenavLinks = state.navLinks.filter( el => el.onSidenav )
    return sidenavLinks
  },
  headerLinks: state => {
    const headerLinks = state.navLinks.filter( el => el.onHeader )
    return headerLinks
  },
  headerUserAvatarMenuLinks: state => {
    const headerLinks = state.navLinks.filter( el => el.onHeaderUserAvatarMenu )
    return headerLinks
  },
  footerMobileLinks: state => {
    const tempFooterMobileLinks = state.navLinks.filter( el => el.onFooterMobile )

    // меняем порядок
    let footerMobileLinks = []
    let linksOther = []
    const countLinks = tempFooterMobileLinks.length

    tempFooterMobileLinks.forEach(el => {
      switch (el.name) {
        case 'Мой профиль':
          footerMobileLinks[countLinks - 1] = el
          break
        case 'Tаблицы':
          footerMobileLinks[countLinks - 2] = el
          break
        case 'Добавить прогресс':
          footerMobileLinks[countLinks - 3] = el
          break
        case 'Статистика':
          footerMobileLinks[countLinks - 4] = el
          break
        case 'Мои челленджи':
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
  },

  isSidebarActive: state => state.isSidebarActive
}



// local functions


// Что можно улучшить:

// 1.
