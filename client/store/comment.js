export const actions = {
  async create({commit}, data) {
    try {
      return await this.$axios.$post('/api/comment', data)
    } catch (error) {
      commit('setError', error, {root: true})
      throw error
    }
  }
}
