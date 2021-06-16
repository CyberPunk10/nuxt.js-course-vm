export const state = () => ({
  arrStrings: null,
})

export const mutations = {
  setArrStrings(state) {
    let abc = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let arr = []
    while (arr.length < 1000) {
      let rs = ""
      while (rs.length < 100) {
        rs += abc[Math.floor(Math.random() * abc.length)]
      }
      arr.push(rs)
    }
    state.arrStrings = arr
  }
}

export const actions = {
  setArrStrings({ commit }) { commit('setArrStrings') },
}

export const getters = {
  getArrStrings: state => state.arrStrings
}

