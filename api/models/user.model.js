import { model, Schema } from 'mongoose'

const userSchema = new Schema({
  // _id: mongoose.Schema.Types.ObjectId,
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
  },
  isDeveloper: {
    type: Boolean
  }
  // name: {
  //   firstName: String,
  //   lastName: String
  // },
  // lastActiveAt: Date,
  // created: {
  //   type: Date,
  //   default: Date.now
  // }
})

module.exports = model('User', userSchema)
