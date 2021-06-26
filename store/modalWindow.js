export const state = () => ({
  modalWindowActive: false
})

export const mutations = {
  closeModal(state) {
    state.modalWindowActive = false
  },

  showModal(state) {
    state.modalWindowActive = true
  }
}

export const getters = {
  getStateModalWindow: state => state.modalWindowActive
}
