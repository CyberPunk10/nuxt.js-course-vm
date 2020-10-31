import mongodb from '../api/mongodb'

export default function () {
  this.nuxt.hook('render:setupMiddleware', () => {
    mongodb.connect()
      .then(console.log('MongoDB connected...'))
      .catch(error => console.error(error))

  })
}
