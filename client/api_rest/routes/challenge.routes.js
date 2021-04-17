import { Router } from 'express'
import { createChallenge, addChallengeProgress } from '../controllers/challenge.controller'
const router = Router()

// /api/challenge/create
router.post('/create', createChallenge)

// /api/challenge/add-challenge-progress
router.post('/add-challenge-progress', addChallengeProgress)


module.exports = router
