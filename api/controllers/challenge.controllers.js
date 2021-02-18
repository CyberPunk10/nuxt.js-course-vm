const Challenge = require('../models/challenge.model')
const AddChallengeProgress = require('../models/addChallengeProgress.model')


module.exports.createChallenge = async (req, res) => {
  console.log(req.body)
  const challenge = new Challenge({
    title: req.body.title,
    color: req.body.color,
    count: req.body.count,
  })

  if (req.body.date) {
    challenge.date = req.body.date
  }

  console.log(req.body)

  try {
    await challenge.save()
    res.status(201).json(challenge)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports.addChallengeProgress = async (req, res) => {
  console.log(req.body)
  const { title, idForm, players } = req.body
  const challengeProgress = new AddChallengeProgress({ title, idForm, players })


  // const challenge = new Challenge({
  //   title: req.body.title,
  //   color: req.body.color,
  //   count: req.body.count,
  // })

  if (req.body.date) {
    challengeProgress.date = req.body.date
  }

  console.log('[challengeProgress]', challengeProgress)

  try {
    await challengeProgress.save()
    res.status(201).json(challengeProgress)
  } catch (error) {
    res.status(500).json(error)
  }
}



