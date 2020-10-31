import { Strategy, ExtractJwt } from 'passport-jwt'
import { model } from 'mongoose'
import keys from '../keys'

const User = model('users')

// Autherization: Baerer TOKEN
const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: keys.JWT
}

module.exports = new Strategy(options, async (payload, done) => {
  try {
    const candidate = await (await User.findById(payload.userId)).isSelected('id')

    if (candidate) {
      done(null, candidate)
    } else {
      done(null, false)
    }
  } catch (error) {
    console.error(error)
  }
})



