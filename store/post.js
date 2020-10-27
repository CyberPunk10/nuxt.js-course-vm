const posts = [
  {title: 'Post1', date: new Date(), views: 22, comments: [1,2], _id: '1'},
  {title: 'Post2', date: new Date(), views: 22, comments: [1,2], _id: '2'},
  {title: 'Post3', date: new Date(), views: 22, comments: [1,2], _id: '3'}
]

export const actions = {
  async fetchAdmin({}) {
    return await new Promise(resolve => {
      setTimeout(() => {
        resolve(posts)
      }, 500)
    })
  },

  async create({commit}, {title, text, image}) {
    try {
      const fd = new FormData()

      fd.append('title', title)
      fd.append('text', text)
      fd.append('image', image, image.name)

      return await new Promise(resolve => {
        setTimeout(() => {
          resolve()
        }, 500)
      })
    } catch (error) {
      commit('setError', error, {root: true})
      throw error
    }
  },

  async update({}, {id, text}) {

  },

  async remove({}, id) {

  },

  async fetchAdminById({}, id) {
    return await new Promise(resolve => {
      setTimeout(() => {
        resolve(posts.find(p => p._id === id))
      }, 500)
    })
  }
}
