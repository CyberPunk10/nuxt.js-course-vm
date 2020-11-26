import { model, Schema } from 'mongoose'

const userSchema = new Schema({
  login: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  }
})

module.exports = model('User', userSchema)
