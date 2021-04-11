import { Schema, model } from 'mongoose'

const commentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  postId: {
    ref: 'Post',
    // ref: 'posts', // или так правильно (?)
    type: Schema.Types.ObjectId,
  }
})

module.exports = model('Comment', commentSchema)
