const Comment = require('../models/comment.model')
const Post = require('../models/post.model')

module.exports.createComment = async (req, res) => {
 try {
   const { name, text, postId } = req.body
   const comment = new Comment({ name, text, postId })
   await comment.save()

   // сохраняем id комментария в посте
   const post = await Post.findById(postId)
   post.comments.push(comment._id)
   await post.save()

   res.status(201).json(comment)
 } catch (error) {
   res.status(500).json(error)
 }
}

module.exports.editComment = async (req, res) => {
 try {
   const { name, text, postId } = req.body

   res.status(201).json(comment)
 } catch (error) {
   res.status(500).json(error)
 }
}
