import passport from 'passport'
import { Router } from 'express'
const ctr = require('../controllers/post.controllers')
const upload = require('../middleware/upload')
const router = Router()

// Admin
// /api/post/admin/create
router.post(
  '/admin/create',
  passport.authenticate('jwt', {session: false}),
  upload.single('image'), // 'image' должно совпадать с store/post > formData
  ctr.create
)

// /api/post/admin/list
router.get(
  '/admin/list',
  passport.authenticate('jwt', {session: false}),
  ctr.getAll
)

// /api/post/admin/:id
router.get(
  '/admin/:id',
  passport.authenticate('jwt', {session: false}),
  ctr.getById
)

// /api/post/admin/:id
router.put(
  '/admin/:id',
  passport.authenticate('jwt', {session: false}),
  ctr.update
)

// /api/post/admin/:id
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
