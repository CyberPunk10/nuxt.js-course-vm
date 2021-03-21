import passport from 'passport'
import { Router } from 'express'
const { login, createUser } = require('../controllers/auth.controller')
const router = Router()

// /api/auth/admin/login
router.post('/admin/login', login)

// /api/auth/admin/create-free
router.post('/admin/create-free', createUser)

// /api/auth/admin/create
router.post(
  '/admin/create',
  passport.authenticate('jwt', {session: false}), // без авторизации к этой странице не будет доступа
  createUser
)

module.exports = router
