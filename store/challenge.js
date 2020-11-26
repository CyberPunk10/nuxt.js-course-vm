export const actions = {

  async create({commit}, fd) {
  // async create({commit}, {title, date, color, count}) {
    try {
      // const fd = new FormData()

      // fd.append('title', title)
      // fd.append('date', date)
      // fd.append('color', color)
      // fd.append('count', count)

      // return await this.$axios.$post('/api/post/admin/create', fd)
      return await this.$axios.$post('/api/challenge/create', fd)
    } catch (error) {
      commit('setError', error, {root: true})
      throw error
    }
  },

}
