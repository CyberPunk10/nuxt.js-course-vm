import { Schema, model } from 'mongoose'

const challengeSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  date: {
    type: Date,
    default: Date.now
  },
  color: {
    type: String,
    required: true,
    default: "green"
  },
  count: {
    type: Number,
    default: 0
  }
})

module.exports = model('Challenge', challengeSchema)
