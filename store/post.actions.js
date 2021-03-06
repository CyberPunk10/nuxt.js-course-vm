const posts = [
  { title: 'Post1', date: new Date(), views: 22, comments: [1, 2], _id: '1' },
  { title: 'Post2', date: new Date(), views: 22, comments: [1, 2], _id: '2' },
  { title: 'Post3', date: new Date(), views: 22, comments: [1, 2], _id: '3' }
]

export const actions = {

  // admin
  async fetchAdmin({ commit }) {
    try {
      return await this.$axios.$get('/api/post/admin/list')
    } catch (error) {
      commit('setError', error, { root: true })
      throw error
    }
    // return await new Promise(resolve => {
    //   setTimeout(() => {
    //     resolve(posts)
    //   }, 500)
    // })
  },
  async fetchAdminRemovedPosts({ commit }) {
    try {
      return await this.$axios.$get('/api/post/admin/list-removed')
    } catch (error) {
      commit('setError', error, { root: true })
      throw error
    }
  },

  async create({ commit }, { title, text, image }) {
    try {
      const fd = new FormData()

      fd.append('title', title)
      fd.append('text', text)
      fd.append('image', image, image.name)

      return await this.$axios.$post('/api/post/admin/create', fd)
      // return await new Promise(resolve => {
      //   setTimeout(() => {
      //     resolve()
      //   }, 500)
      // })
    } catch (error) {
      commit('setError', error, { root: true })
      throw error
    }
  },

  async update({ commit }, { id, text }) {
    try {
      return await this.$axios.$put(`/api/post/admin/${id}`, { text })
    } catch (error) {
      commit('setError', error, { root: true })
      throw error
    }
  },

  async remove({ commit }, id) {
    try {
      return await this.$axios.$put(`/api/post/admin/${id}/remove-or-recovery`, { removedDate: Date.now() })
    } catch (error) {
      commit('setError', error, { root: true })
      throw error
    }
  },

  async recovery({ commit }, id) {
    try {
      return await this.$axios.$put(`/api/post/admin/${id}/remove-or-recovery`, { removedDate: null })
    } catch (error) {
      commit('setError', error, { root: true })
      throw error
    }
  },

  async delete({ commit }, id) {
    try {
      return await this.$axios.$delete(`/api/post/admin/${id}`) // сразу удаляет
    } catch (error) {
      commit('setError', error, { root: true })
      throw error
    }
  },

  async fetchAdminById({ commit }, id) {
    try {
      return await this.$axios.$get(`/api/post/admin/${id}`)
    } catch (error) {
      commit('setError', error, { root: true })
      throw error
    }
    // return await new Promise(resolve => {
    //   setTimeout(() => {
    //     resolve(posts.find(p => p._id === id))
    //   }, 500)
    // })
  },

  async getAnalytics({ commit }) {
    try {
      return await this.$axios.$get('/api/post/admin/get/analytics')
    } catch (error) {
      commit('setError', error, { root: true })
      throw error
    }
  },

  // other
  async fetchById({ commit }, id) {
    try {
      return await this.$axios.$get(`/api/post/${id}`)
    } catch (error) {
      commit('setError', error, { root: true })
      throw error
    }
  },

  async fetch({ commit }) {
    try {
      return await this.$axios.$get('/api/post/list')
    } catch (error) {
      commit('setError', error, { root: true })
      throw error
    }
  },

  async addView({ commit }, { _id, views }) {
    try {
      console.log('store/post.js. ПОХОЖЕ ТУТ НУЖНО ДОБАВИТЬ views +1')
      return await this.$axios.$put(`/api/post/add/view/${_id}`, { views })
    } catch (error) {
      commit('setError', error, { root: true })
      throw error
    }
  }
}
