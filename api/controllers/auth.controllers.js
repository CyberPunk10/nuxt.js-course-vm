import bcrypt from 'bcrypt-nodejs'
import jwt from 'jsonwebtoken'
const keys = require('../keys')
const User = require('../models/user.model')

module.exports.login = async (req, res) => {
  const { loginOrEmail, password } = req.body

  let candidate = await User.findOne({login: loginOrEmail})

  // если по логину не нашлось пользователя, то ищем по email
  if (!candidate) {
    candidate = await User.findOne({email: loginOrEmail})
  }

  if (candidate) {
    const isPasswordCorrect = bcrypt.compareSync(password, candidate.password)

    // create token
    if (isPasswordCorrect) {
      const token = jwt.sign({
        login: candidate.login,
        userId: candidate._id
      }, keys.JWT, {expiresIn: 60 * 60})
      res.json({token})
    } else {
      res.status(401).json({message: 'Пароль неверный'})
    }

  } else {
    res.status(404).json({message: 'Пользователь не найден'})
  }
}

module.exports.createUser = async (req, res) => {
  const { login, email, password } = req.body
  // под логином при входе может быть email, поэтому может получиться ситуация,
  // когда найдется другой пользователь,
  // и это требует дополнительных проверок при создании пользователя (?) (Например запрет на использование '@' в логине)
  const candidateLogin = await User.findOne({login})
  const candidateEmail = await User.findOne({email})

  if (candidateLogin) {
    res.status(409).json({message: 'Такой login уже занят'})
  } else if (candidateEmail) {
    res.status(409).json({message: 'Такой email уже занят'})
  } else {
    const salt = bcrypt.genSaltSync(10)

    const user = new User({
      login,
      email,
      password: bcrypt.hashSync(password, salt)
    })

    await user.save()

    res.status(201).json(user)
  }
}
