import mongoose from 'mongoose'
const keys = require('../api/keys')

export default function () {
  this.nuxt.hook('render:setupMiddleware', () => {
    mongoose.connect(keys.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true

    }).then(console.log('MongoDB connected...'))
      .catch(error => console.error('MongoDB disconnected...', error))
  })
}
