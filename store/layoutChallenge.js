export const state = () => ({
  currentWidthWindow: 0,
})

export const mutations = {
  updateCurrentWidthWindow(state, value) { state.currentWidthWindow = value },
}

export const actions = {
  updateCurrentWidthWindow({commit}, value) { commit('updateCurrentWidthWindow', value) },
}

export const getters = {
  getCurrentWidthWindow: state => state.currentWidthWindow
}



// local functions


// Что можно улучшить:

// 1.

