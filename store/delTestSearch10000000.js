export const state = () => ({
  arrStrings: null,
})

export const getters = {
  getArrStrings: state => {
    const arrStrings = state.arrStrings !== null ? state.arrStrings : generateArrStrings()
    return arrStrings
  }
}


// local functions

function generateArrStrings() {
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
  return arr
}
