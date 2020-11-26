import { Router } from 'express'
import { createChallenge } from '../controllers/challenge.controllers'
const router = Router()

// /api/challenge/create
router.post('/create', createChallenge)


module.exports = router
