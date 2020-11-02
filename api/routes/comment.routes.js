import { Router } from 'express'
import { createComment } from '../controllers/comment.controllers'

const router = Router()

// /api/comment/create
router.post('/', createComment)

// /api/comment/admin/edit
router.post('/admin/edit', editComment)

module.exports = router
