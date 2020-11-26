const Challenge = require('../models/challenge.model')


module.exports.createChallenge = async (req, res) => {
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



