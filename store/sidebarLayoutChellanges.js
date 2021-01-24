// import Vue from 'vue'

export const state = () => ({
  sidebarLinks: [
    // challenges
    {
      name: 'Главная',
      icon: 'fas fa-home',
      url: '/challenges',
      onHeader: true
    },
    {
      name: 'Статистика',
      icon: 'fas fa-chevron-right',
      url: '/challenges',
      onHeader: true
    },
    {
      name: 'Мой профиль',
      icon: 'far fa-user',
      url: '/challenges/my-profile',
      onHeader: true
    },
    {
      name: 'Мои челленджи',
      icon: 'fas fa-chart-pie',
      children: [
        {
          name: 'Dashboard',
          url: '/dashboard',
        },
        {
          name: 'Alternative',
          url: '/alternative',
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
      onHeader: true
    },
    {
      name: 'Тренировка',
      icon: 'far fa-heart',
      url: '/challenges/mobile',
      onHeader: true
    },
    {
      name: 'layoutMainChallenges',
      icon: 'fas fa-home',
      url: '/layout-main-challenges'
    },
    {
      name: 'Tаблицы',
      icon: 'far fa-chart-bar',
      url: '/challenges/table'
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
  // sidebarLinks: state => state.sidebarLinks
}


// local functions


// Что можно улучшить:

// 1.

