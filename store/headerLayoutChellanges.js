// import Vue from 'vue'

export const state = () => ({
  isHeaderOut: false,
})

export const mutations = {
  // toggleHeader(state) { state.isHeaderOut = !state.isHeaderOut },
  addAttrHeaderOut(state) { state.isHeaderOut = true },
  removeAttrHeaderOut(state) { state.isHeaderOut = false }
}

export const actions = {
  // toggleHeader({commit}) { commit('toggleHeader') },
  addAttrHeaderOut({commit}) { commit('addAttrHeaderOut') },
  removeAttrHeaderOut({commit}) { commit('removeAttrHeaderOut') }
}

export const getters = {
  isHeaderOut: state => state.isHeaderOut
}



// local functions


// Что можно улучшить:

// 1.

