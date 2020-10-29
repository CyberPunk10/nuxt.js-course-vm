import mongodb from '../api/mongodb'

export default function () {
  this.nuxt.hook('render:setupMiddleware', async () => {
    await mongodb.connect()
    console.log('MongoDB connected...')
  })
}
