// import Vue from 'vue'

export const state = () => ({
  isHeaderOut: false,

})

export const mutations = {
  toggleHeader(state) { state.isHeaderOut = !state.isHeaderOut },
  closeHeader(state) { state.isHeaderOut = false },
  openHeader(state) { state.isHeaderOut = true }
}

export const actions = {
  toggleHeader({commit}) { commit('toggleHeader') },
  closeHeader({commit}) { commit('closeHeader') },
  openHeader({commit}) { commit('openHeader') }
}

export const getters = {
  isHeaderOut: state => state.isHeaderOut
}



// local functions


// Что можно улучшить:

// 1.

