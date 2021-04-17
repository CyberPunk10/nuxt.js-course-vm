const User = require('../models/user.model')


module.exports.getUsers = async (req, res) => {
  try {
    const users = await User.
      // find({ created: { $gte: '2021-02-01' } }).
      find().
      sort({ created: -1 })
    res.json(users)
  } catch (error) {
    res.status(500).json(error)
  }
}
