import passport from 'passport'
import { Router } from 'express'
import { login, createUser } from '../controllers/auth.controllers'
// возможно такой импорт не сработает
import ctr from '../controllers/post.controllers'
const upload = require('../middleware/upload')

const router = Router()

// Admin
// /api/post/admin
router.post(
  '/admin/',
  passport.authenticate('jwt', {session: false}),
  upload.single('image'), // 'image' должно совпадать с store/post > formData
  ctr.create
)

router.get(
  '/admin/',
  passport.authenticate('jwt', {session: false}),
  ctr.getAll
)

router.get(
  '/admin/:id',
  passport.authenticate('jwt', {session: false}),
  ctr.getById
)

router.put(
  '/admin/:id',
  passport.authenticate('jwt', {session: false}),
  ctr.update
)

router.delete(
  '/admin/:id',
  passport.authenticate('jwt', {session: false}),
  ctr.remove
)


// /api/post
// Base
router.get('/', ctr.getAll)
router.get('/:id', ctr.getById)
router.put('/:id', ctr.addView)


module.exports = router
