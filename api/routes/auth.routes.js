// const { login, createUser } = require('../controllers/auth.controllers')
import { login, createUser } from '../controllers/auth.controllers'
const { Router } = require('express')

const router = Router()

// /api/auth/admin/login
router.post('/admin/login', login)

// /api/auth/admin/create
router.post('/admin/create', createUser)

module.exports = router
