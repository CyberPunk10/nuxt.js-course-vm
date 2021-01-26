// import Vue from 'vue'

export const state = () => ({
  navLinks: [
    // challenges
    {
      name: 'Главная',
      icon: 'fas fa-home',
      url: '/challenges',
    },
    {
      name: 'Мой профиль',
      icon: 'far fa-user',
      url: '/challenges/my-profile',
      onHeader: true,
      onFooter: true
    },
    {
      name: 'Мои челленджи',
      icon: 'fas fa-chart-pie',
      url: '/challenges/settings',
      onFooter: true,
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
      icon: 'fas fa-check',
      url: '/challenges/create'
    },
    {
      name: 'Добавить прогресс',
      icon: 'far fa-user',
      url: '/challenges/addprogress',
      onHeader: true,
      onFooter: true
    },
    {
      name: 'Тренировка',
      icon: 'far fa-heart',
      url: '/challenges/settings',
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
      icon: 'fas fa-home',
      url: '/layout-main-challenges'
    },
    {
      name: 'Tаблицы',
      icon: 'far fa-chart-bar',
      url: '/challenges/table',
      onFooter: true
    },
    {
      name: 'Статистика',
      icon: 'fas fa-chevron-right',
      url: '/challenges/statistics',
      onFooter: true
    },
    {
      name: 'Настройки',
      icon: 'fas fa-angle-right',
      url: '/challenges/settings'
    }
  ]
})

export const mutations = {

}

export const actions = {

}

export const getters = {
  // navLinks: state => state.navLinks
}


// local functions


// Что можно улучшить:

// 1.

