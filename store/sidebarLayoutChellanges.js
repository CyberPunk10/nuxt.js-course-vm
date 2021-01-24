// import Vue from 'vue'

export const state = () => ({
  sidebarLinks: [
    // challenges
    {
      name: 'Главная',
      icon: 'ni ni-compass-04',
      url: '/challenges',
      onHeader: true
    },
    {
      name: 'Мой профиль',
      icon: 'ni ni-user-run',
      url: '/challenges/my-profile',
      onHeader: true
    },
    {
      name: 'Мои челленджи',
      icon: 'ni ni-align-left-2',
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
      icon: 'ni ni-controller',
      url: '/challenges/create'
    },
    {
      name: 'Добавить прогресс',
      icon: 'ni ni-fat-add',
      url: '/challenges/addprogress',
      onHeader: true
    },
    {
      name: 'Тренировка',
      icon: 'ni ni-camera-compact',
      url: '/challenges/mobile',
      onHeader: true
    },
    {
      name: 'layoutMainChallenges',
      icon: 'ni ni-ruler-pencil',
      url: '/layout-main-challenges'
    },
    {
      name: 'Tаблицы',
      icon: 'ni ni-box-2',
      url: '/challenges/table'
    },
    {
      name: 'Настройки',
      icon: 'ni ni-settings',
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

