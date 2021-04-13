// import { plugin } from "mongoose"

export default function ({ $axios, redirect, store }) {
  $axios.interceptors.request.use(request => {

    // Добавление заголовка с токеном для backend (так как axios не доступен при SSR)
    // если есть права админа
    if (store.getters['authStore/isAuthenticated'] && !request.headers.common['Authorization']) {
      const token = store.getters['authStore/token']
      request.headers.common['Authorization'] = `Bearer ${token}`
    }
    console.log('[request.headers.common]: ', request.headers.common)
    console.log('plugin/axios.js - Добавление заголовка с токеном для backend (т.к. axios не доступен при SSR)')
    return request
  })

  $axios.onError(error => {
    if (error.response) {
      if (error.response.status === 401) {
        redirect('/challenges/login?message=session')
        store.dispatch('authStore/logout')
      }
      if (error.response.status === 500) {
        console.log('Server 500 error')
      }
    }
  })
}
