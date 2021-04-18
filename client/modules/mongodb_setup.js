import mongoose from 'mongoose'
require('dotenv').config()

// для hmr serverMiddleware (опция позволяет перезаписывать модели mongoose не выкидывая ошибку)
// https://github.com/Automattic/mongoose/issues/9406
mongoose.set('overwriteModels', true)

export default function () {
  this.nuxt.hook('render:setupMiddleware', () => {
    mongoose
      .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      })
      .then(console.log('MongoDB connected (for rest api)...'))
      .catch(error => console.error('MongoDB disconnected (for rest api)...', error))
  })
}
