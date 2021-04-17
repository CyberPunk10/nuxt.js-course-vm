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
      onFooterMobile: true,
      isChallenges: true,
      isDev: true,
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
      isChallenges: true,
      isDev: true,
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
      onFooterMobile: true,
      isDev: true
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
      ],
      isDev: true
    },
    {
      name: 'Создать челлендж',
      icon: 'far fa-file',
      url: '/challenges/create',
      onSidenav: true,
      isChallenges: false,
      isDev: true
    },
    {
      name: 'Добавить прогресс',
      icon: 'fas fa-plus',
      url: '/challenges/addprogress',
      onSidenav: true,
      onHeader: true,
      onFooterMobile: true,
      isDev: true
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
      ],
      isDev: true
    },
    {
      name: 'Настройки',
      // icon: 'fas fa-angle-right',
      icon: 'fas fa-heart',
      url: '/challenges/settings',
      onSidenav: true,
      onHeaderUserAvatarMenu: true,
      isDev: true
    },
    {
      name: 'Админ',
      // icon: 'fas fa-angle-right',
      icon: 'fas fa-heart',
      url: '/admin',
      onSidenav: true,
      onHeaderUserAvatarMenu: true,
      isDev: true
    },


    // mockup
    {
      name: 'Главная',
      icon: 'fas fa-home',
      url: '/',
      onSidenav: true,
      onFooterMobile: true,
      isMockup: true
    },
    {
      name: 'Страница для scroll-a',
      icon: 'fas fa-user-friends',
      url: '/page-challenges-test-scroll',
      onSidenav: true,
      isDev: true,
      isMockup: true
    },

    // mockupAdmin
    {
      name: 'Аналитика, графики',
      icon: 'fas fa-chart-pie',
      url: '/mockup',
      onSidenav: true,
      isMockupAdmin: true,
      onFooterMobile: true,
    },
    {
      name: 'Создать пост',
      icon: 'fas fa-plus',
      url: '/mockup/create',
      onSidenav: true,
      isMockupAdmin: true,
      onFooterMobile: true,
    },
    {
      name: 'Таблица с постами',
      icon: 'fas fa-heart',
      url: '/mockup/list',
      onSidenav: true,
      isDev: true,
      isMockupAdmin: true,
      onFooterMobile: true,
    },
    {
      name: 'Пользователи',
      icon: 'fas fa-user-friends',
      url: '/mockup/users',
      onSidenav: true,
      isDev: true,
      isMockupAdmin: true,
      onFooterMobile: true,
    },
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
    const footerMobileLinks = state.navLinks.filter( el => el.onFooterMobile )
    return footerMobileLinks
  },

  isSidebarActive: state => state.isSidebarActive
}



// local functions


// Что можно улучшить:

// 1.

