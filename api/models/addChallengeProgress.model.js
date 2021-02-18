import { Schema, model } from 'mongoose'

const addChallengeProgressSchema = new Schema({
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
    default: "RED :)"
  },
  count: {
    type: Number,
    default: 0
  },
  idForm: {
    type: Number,
    required: true
  },
  players: {
    type: Object
  }
})

module.exports = model('AddChallengeProgress', addChallengeProgressSchema)
