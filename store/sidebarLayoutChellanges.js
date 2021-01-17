// import Vue from 'vue'

export const state = () => ({
  sidebarLinks: [
    {
      name: 'Dashboards',
      icon: 'ni ni-shop text-primary',
      isMain: true,
      // isCollapse: 'collapse',
      children: [
        {
          name: 'Dashboard',
          icon: 'ni ni-shop text-primary',
          path: '/dashboard'
        },
        {
          name: 'Alternative',
          icon: 'ni ni-shop text-primary',
          path: '/alternative'
        },
      ]
    },

    {
      name: 'Examples',
      icon: 'ni ni-shop text-primary',
    },
    {
      name: 'Components',
      icon: 'ni ni-shop',
      children: [
        {
          name: 'Buttons',
          icon: 'ni ni-shop text-primary',
          path: '/Buttons'
        },
        {
          name: 'Cards',
          icon: 'ni ni-shop text-primary',
          path: '/Cards'
        },
        {
          name: 'Notifications',
          icon: 'ni ni-shop text-primary',
          path: '/Notifications'
        },
        {
          name: 'Grid',
          icon: 'ni ni-shop text-primary',
          path: '/Grid'
        },
        {
          name: 'Icons',
          icon: 'ni ni-shop text-primary',
          path: '/Icons'
        },
      ]
    },
    {
      name: 'Typography',
      icon: 'ni ni-shop text-primary',
      children: [
        {
          name: 'Notifications',
          icon: 'ni ni-shop text-primary',
          path: '/Notifications'
        },
        {
          name: 'Grid',
          icon: 'ni ni-shop text-primary',
          path: '/Grid'
        },
        {
          name: 'Icons',
          icon: 'ni ni-shop text-primary',
          path: '/Icons'
        },
      ]
    },
    {
      name: 'Icons',
      icon: 'ni ni-align-left-2',
      path: '/Icons'
    },

    // challenges
    {
      name: 'Мой профиль',
      icon: 'ni ni-user-run',
      path: '/challenges/my-profile'
    },
    {
      name: 'Мои челленджи',
      icon: 'ni ni-shop',
      path: '/challenges/my-profile',
      isMain: true,
      children: [
        {
          name: 'Dashboard',
          icon: 'ni ni-shop text-primary',
          path: '/dashboard',
        },
        {
          name: 'Alternative',
          icon: 'ni ni-shop text-primary',
          path: '/alternative',
        },
      ]
    },
    {
      name: 'Создать челлендж',
      icon: 'ni ni-controller',
      path: '/challenges/my-profile'
    },
    {
      name: 'Добавить результат',
      icon: 'ni ni-save',
      path: '/challenges/my-profile'
    }
  ]
})

export const mutations = {

}

export const actions = {

}

export const getters = {
  sidebarLinks: state => state.sidebarLinks
}


// local functions


// Что можно улучшить:

// 1.

