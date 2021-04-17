const mongoose = require('mongoose')
// const Joi = require('joi')

const schemaPush_ups = mongoose.Schema({
  count: {
    type: [Number, Array],
    required: true,
    trim: true
  },
  // status: {
  //   type: String,
  //   required: true
  // },
  createdDate: {
    type: Date,
    default: Date.now
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
})

const Push_ups = mongoose.model('Push_ups', schemaPush_ups)

// const validatePush_ups = (Push_ups) => {
//   return Joi.object({
//     name: Joi.string().alphanum().min(3).max(30).required(),
//     status: Joi.string().required(),
//     gender: Joi.string().allow(''),
//     image: Joi.string().allow('')
//   }).validate(Push_ups)
// }

exports.Push_ups = Push_ups
// exports.validatePush_ups = validatePush_ups
