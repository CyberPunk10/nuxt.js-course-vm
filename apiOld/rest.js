import bodyParser from 'body-parser'
const app = require('express')()
// import passport from 'passport'
// import passportStrategy from './middleware/passport-strategy'

// import {Router} from 'express'
// const router = Router()

// import authRoutes from './routes/auth.routes'
// import postRoutes from './routes/post.routes'
// import keys from './keys'

app.use(bodyParser.json())
app.all("/getJSON", (req, res) => {
  res.json({ data: "data" })
})

// Require API routes
// const users = require('./routes/users')
// const test = require('./routes/test')

// Import API Routes
// app.use('/api/auth', authRoutes)
// app.use('/api/post', postRoutes)
// app.use(users)
// app.use(test)


// app.use(router.get('/', (req, res, next) => {
//   res.json({'klasfjasld': 'flasdk;fja'})
// }))

module.exports = app
