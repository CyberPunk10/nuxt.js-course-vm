import { model, Schema } from 'mongoose'

const userSchema = new Schema({
  // _id: mongoose.Schema.Types.ObjectId,
  login: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 6,
  },
  emailVerified: {
    type: Boolean,
    default: false
  },

  isDeveloper: Boolean,
  isChallenges: Boolean,
  isMockupAdmin: Boolean,

  name: {
    firstName: String,
    lastName: String
  },
  lastActiveAt: Date,
  created: {
    type: Date,
    default: Date.now
  }
})

module.exports = model('User', userSchema)
