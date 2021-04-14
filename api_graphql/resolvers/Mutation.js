const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt-nodejs')
// const lodash = require('lodash')
// const { sendConfirmationEmail } = require('./services/EmailService')

// require('dotenv').config()
const { Push_ups, validatePush_ups } = require('../model/Push_ups')
const { User, validateUser } = require('../model/User')

const Mutation = {
  addPush_ups(_, payload) {
    // const { value, error } = validatePush_ups(payload, { abortEarly: false })
    // if (error) {
    //   throw new UserInputError('Failed to create Push_ups due to validation errors', {
    //     validationError: error.details
    //   })
    // }
    // return Push_ups.create(value)
    return Push_ups.create(payload)
  },

  async signup(_, { user }) {
    // const { value, error } = validateUser(user, { abortEarly: false })
    // if (error) {
    //   throw new UserInputError('Failed to signup due to validation errors', {
    //     validationError: error.details
    //   })
    // }
    const password = await bcrypt.hash(user.password, 10)
    const registerUser = await User.create({
      // ...value,
      ...user,
      password // перезаписывает значение у ключа password (поэтому порядок важен)
    })

    // sendConfirmationEmail(registerUser)

    const token = await jwt.sign({
      _id: registerUser._id
    }, 'topSecret')
    // }, process.env.JWT_SECRET_KEY)

    return {
      token,
      user: registerUser
      // user: lodash.pick(registerUser, ['id', 'name', 'email'])
    }
  }
}

module.exports = Mutation
