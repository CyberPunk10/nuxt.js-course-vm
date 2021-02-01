// import Vue from 'vue'

export const state = () => ({
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
      children: [
        {
          name: 'Статистика',
          // icon: 'far fa-chart-bar',
          url: '/challenges/statistics'
        },
      ]
    },
    {
      name: 'Друзья',
      icon: 'fas fa-user-friends',
      url: '/challenges/statistics',
      onSidenav: true,
      onFooterMobile: true
    },
    {
      name: 'Мои челленджи',
      icon: 'fas fa-chart-pie',
      url: '/challenges/settings',
      onSidenav: true,
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
      name: 'layoutMainChallenges',
      icon: 'far fa-heart',
      url: '/layout-main-challenges',
      onSidenav: true
    },
    {
      name: 'Tаблицы',
      // icon: 'fas fa-chevron-right',
      icon: 'fas fa-heart',
      url: '/challenges/table',
      onSidenav: true,
      onFooterMobile: true
    },
    {
      name: 'Настройки',
      // icon: 'fas fa-angle-right',
      icon: 'fas fa-heart',
      url: '/challenges/settings',
      onSidenav: true
    }
  ]
})

export const mutations = {

}

export const actions = {

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
  }
}



// local functions


// Что можно улучшить:

// 1.

