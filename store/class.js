export const state = () => ({
  bodyClass: ''
})

export const mutations = {
  SetClass (state, bodyClass) {
    state.bodyClass = bodyClass
  }
}

export const getters = {
  bodyClassCurrent: state => state.bodyClass
}
