const mongoose = require('mongoose')
// const Joi = require('joi')

const schema = mongoose.Schema({
  login: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 50,
    unique: true
  },
  email: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 255,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 1024,
  },
  name: {
    type: String,
    minLength: 1,
    maxLength: 50,

  },
  emailVerified: {
    type: Boolean,
    default: false
  }
})

const User = mongoose.model('Userrrr', schema)

// const validateUser = (user) => {
//   return Joi.object({
//     login: Joi.string().alphanum().min(1).max(50).required(),
//     email: Joi.string().required().email(),
//     password: Joi.string().min(1).max(1024).required(),
//     name: Joi.string().alphanum().min(1).max(50),
//   }).validate(user)
// }

exports.User = User
// exports.validateUser = validateUser
