export const state = () => ({
  jokes: [],
  searchValue: null,
  enough: false,
  idJokesLiked: [],
  countRequest: 0,
  countRequestMax: null,
  pageSize: 10,
  totalCountJokes: null,
  allJokesSavedLocal: false
})

export const mutations = {
  setJokes(state, data) {
    // проверка существуют ли дубликаты
    // if true, то их не добавляем в общмй список
    state.jokes.forEach(elState => {
      data.jokes.forEach((elData, index, object) => {
        if (elState.id === elData.id) {
          object.splice(index, 1)
        }
      })
    })
    state.jokes = state.jokes.concat(data.jokes)
  },
  setEnough(state, data) {
    state.enough = data
  },
  setFromLocalstorageLikedJokes(state) {
    state.idJokesLiked = storage('data-liked-jokes')
  },
  toggleLikedJoke(state, data) {
    const isFound = state.idJokesLiked.indexOf(data)
    if (isFound === -1) state.idJokesLiked.push(data)
    else state.idJokesLiked.splice(isFound, 1)
    storage('data-liked-jokes', state.idJokesLiked)
  },
  searchJokeByValue(state, value) {
    const valueOld = state.searchValue

    if (value?.length < valueOld?.length) { // remove symbol
      state.countRequest = 0
    } else if (value?.length === valueOld?.length) { // replase symbol
      if (!valueOld.startsWith(value)) {
        state.countRequest = 0
      }
    }

    state.searchValue = value ? value : null

    state.jokes = state.jokes.filter(el => {
      return el?.joke?.includes(value) || el?.setup?.includes(value)
    })
  },
  updateCountRequest(state) {
    state.countRequest++
  },
  setCountRequestMax(state, value) {
    state.countRequestMax = value
  },
  setTotalCountJokes(state, value) {
    state.totalCountJokes = value
  },
  updateDownloadAllJokes(state, value) {
    state.allJokesSavedLocal = value
  },
}

export const actions = {
  async getData({ commit, state }) {
    // get total count jokes
    if (!state.totalCountJokes) {
      try {
        const data = await this.$axios.$get('/info')
        if (!data.error) {
          commit('setTotalCountJokes', data.jokes.totalCount)
          commit('setCountRequestMax', Math.ceil(state.totalCountJokes / state.pageSize))
        } else {
          commit('setError', data, { root: true })
        }
      } catch (error) {
        commit('setError', error, { root: true })
      }
    }

    // We send requests only if not all jokes are saved locally yet
    if (state.countRequest < state.countRequestMax) {
      commit('updateDownloadAllJokes', false)

      const countRequest = state.countRequest
      const pageSize = state.pageSize
      const params = {
        amount: pageSize,
        idRange: `${countRequest * pageSize}-${countRequest * pageSize + pageSize}`
      }

      // наглядно запросы в консоле:
      // console.log(`${countRequest * pageSize}-${countRequest * pageSize + pageSize}`)

      if (state.searchValue) {
        params.contains = state.searchValue
      }

      commit('updateCountRequest')

      try {
        const data = await this.$axios.$get('/joke/Any', { params })
        if (!data.error) {
          commit('setJokes', data)
          if (state.searchValue) {
            commit('searchJokeByValue', state.searchValue)
          }
        } else {
          commit('setError', data, { root: true })
        }
      } catch (error) {
        commit('setError', error, { root: true })
      }
    } else {
      // console.log('С сервера загружены все доступные jokes')
      commit('updateDownloadAllJokes', true)
    }
  },

  toggleLikedJoke({ commit }, data) {
    commit('toggleLikedJoke', data)
  },
  searchJokeByValue({ commit }, value) {
    commit('searchJokeByValue', value)
  },
}

export const getters = {
  getTotalCountJokes: state => state.totalCountJokes,
  getJokes: state => state.jokes,
  getEnough: state => state.enough,
  getLikedJokes: state => state.idJokesLiked,
  getAllJokesSavedLocal: state => state.allJokesSavedLocal
}


// local functions
function storage(key, data = null) {
  if (!data) {
    return JSON.parse(localStorage.getItem(key))
  }
  localStorage.setItem(key, JSON.stringify(data))
}
