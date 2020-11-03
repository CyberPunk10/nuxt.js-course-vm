import passport from 'passport'
import { Router } from 'express'
// const { login, createUser } = require('../controllers/auth.controllers')
const { login, createUser } = require('../controllers/auth.controllers')

const router = Router()

// /api/auth/admin/login
router.post('/admin/login', login)

// /api/auth/admin/create
router.post(
  '/admin/create',
  passport.authenticate('jwt', {session: false}),
  createUser
 )

module.exports = router
