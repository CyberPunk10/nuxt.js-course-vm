// const { login, createUser } = require('../controllers/auth.controllers')
import { Router } from 'express'
const { login, createUser } = require('../controllers/auth.controllers')

const router = Router()

// /api/auth/admin/login
router.post('/admin/login', login)

// /api/auth/admin/create
router.post('/admin/create', createUser)

module.exports = router
