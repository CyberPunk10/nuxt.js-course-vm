const Post = require('../models/post.model')


module.exports.create = async (req, res) => {
  const post = new Post({
    title: req.body.title,
    text: req.body.text,
    imageUrl: `/${req.file.filename}`
  })

  try {
    await post.save()
    res.status(201).json(post)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports.getAll = async (req, res) => { // без удаленных
  try {
    const posts = await Post
      .find({ removedDate: null })
      .sort({ date: -1 })
    res.json(posts)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports.getAllRemoved = async (req, res) => { // only удаленные
  try {
    const posts = await Post
      .find({ removedDate: { $ne: null } })
      .sort({ date: -1 })
    res.json(posts)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports.getById = async (req, res) => {
  try {
    await Post.findById(req.params.id).populate('comments').exec((error, post) => {
      res.json(post)
    })
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports.update = async (req, res) => {
  try {
    const $set = {
      text: req.body.text,
    }
    const post = await Post.findOneAndUpdate({ _id: req.params.id }, { $set }, { new: true })
    res.json(post)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports.removeOrRecovery = async (req, res) => {
  try {
    const $set = {
      removedDate: req.body.removedDate
    }
    const post = await Post.findOneAndUpdate({ _id: req.params.id }, { $set }, { new: true })
    res.json(post)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports.delete = async (req, res) => {
  try {
    await Post.deleteOne({ _id: req.params.id })
    res.json({ message: 'Пост удален' })
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports.addView = async (req, res) => {
  const $set = {
    views: ++req.body.views
  }
  try {
    await Post.findOneAndUpdate({ _id: req.params.id }, { $set })
    res.status(204).json({})
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports.getAnalytics = async (req, res) => {
  try {
    const posts = await Post.find()
    const labels = posts.map(post => post.title)
    const json = {
      comments: {
        labels,
        data: posts.map(post => post.comments.length)
      },
      views: {
        labels,
        data: posts.map(post => post.views)
      }
    }
    res.json(json)
  } catch (error) {
    res.status(500).json(error)
  }
}
