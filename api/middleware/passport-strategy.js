import { Strategy, ExtractJwt } from 'passport-jwt'
// import { model } from 'mongoose'
const keys = require('../keys')
const User = require('../models/user.model')

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: keys.JWT
}

module.exports = new Strategy(options, async (payload, done) => {
  try {
    console.log('passport-strategy.js')
    const candidate = await User.findById(payload.userId).select('id')

    if (candidate) {
      done(null, true)
    } else {
      done(null, false)
    }
  } catch (error) {
    console.log('passport-strategy.js: ', error)
  }
})
