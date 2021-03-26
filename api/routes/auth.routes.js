import passport from 'passport'
import { Router } from 'express'
const { login, createUser, updateUserPasword } = require('../controllers/auth.controller')
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

// /api/auth/admin/update-user-password
router.post(
  '/admin/update-user-password',
  passport.authenticate('jwt', {session: false}), // без авторизации к этой странице не будет доступа
  updateUserPasword
)

module.exports = router
