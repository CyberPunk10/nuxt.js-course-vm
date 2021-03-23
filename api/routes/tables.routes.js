import passport from 'passport'
import { Router } from 'express'
const ctr = require('../controllers/tables.controller') // контроллер с методами
const router = Router()

// Admin

// /api/tables/admin/users
router.get(
  '/admin/users',
  passport.authenticate('jwt', {session: false}),
  ctr.getUsers
)

module.exports = router
