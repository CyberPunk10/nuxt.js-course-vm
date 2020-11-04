import bodyParser from 'body-parser'
import passport from 'passport'

const passportStrategy  = require('./middleware/passport-strategy')

const app = require('express')()

const authRoutes = require('./routes/auth.routes')
const postRoutes = require('./routes/post.routes')
const commentRoutes = require('./routes/comment.routes')

app.use(passport.initialize())
passport.use(passportStrategy)

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use('/auth', authRoutes)
app.use('/post', postRoutes)
app.use('/comment', commentRoutes)

// for test
app.get('/echo/:what', (req, res) => {
  res.json(req.params)
})

module.exports = {
   path: '/api',
   handler: app
}
