import { Router } from 'express'
import { createComment, editComment } from '../controllers/comment.controller'
const router = Router()

// /api/comment/create
router.post('/', createComment)

// /api/comment/admin/edit
router.post('/admin/edit', editComment)

module.exports = router
