import { model, Schema } from 'mongoose'

const userSchema = new Schema({
  login: {
    type: String,
    unique: true,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  nickname: {
    type: String,
    unique: true,
    defuaul: 123
  }
})

module.exports = model('User', userSchema)
