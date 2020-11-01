import bodyParser from 'body-parser'

const authRoutes = require('./routes/auth.routes')
const app = require('express')()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use('/auth', authRoutes)

app.get('/echo/:what', (req, res) => {
    res.json(req.params)
})

module.exports = {
   path: '/api',
   handler: app
}
