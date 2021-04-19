import { Schema, model } from 'mongoose'

const progressChallengeSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  color: {
    type: String,
    required: true
  },
  count: {
    type: Number,
    default: 0
  },
  date: {
    type: Date,
    default: Date.now
  },
  challengeId: {
    ref: 'Challenge',
    type: Schema.Types.ObjectId,
  }
})

module.exports = model('progressChallenge', progressChallengeSchema)
