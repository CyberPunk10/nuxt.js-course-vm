import bcrypt from 'bcrypt-nodejs'
import jwt from 'jsonwebtoken'
const keys = require('../keys')
const User = require('../models/user.model')


module.exports.login = async (req, res) => {
  console.log('auth.controller.js')
  const { loginOrEmail, password } = req.body

  // ищем по логину
  let candidate = await User.findOne({login: loginOrEmail})

  // если по логину пользователя не нашлось, то ищем по email
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
      }, keys.JWT, {expiresIn: 60 * 60 * 24}) // 60 * 60 * 24 - 24 часа - время жизни токекна

      // дополнительно узнаем является ли пользователь разработчиком этого приложения
      const isDeveloper = candidate.isDeveloper ? true : false
      // дополнительно узнаем является ли пользователь пользоваетелем приложения challenges
      const isChallenges = candidate.isChallenges ? true : false
      // аккаунт mockupAdmin
      const isMockupAdmin = candidate.isMockupAdmin ? true : false

      // отправляем успех
      res.json({ token, userId: candidate._id, isDeveloper, isChallenges, isMockupAdmin })
    } else {
      res.status(401).json({ message: 'Пароль неверный' })
    }
  } else {
    res.status(404).json({ message: 'Пользователь не найден' })
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

module.exports.updateUserPasword = async (req, res) => {
  const { loginOrEmail, password } = req.body

  // ищем по логину
  let candidate = await User.findOne({login: loginOrEmail})

  // если по логину пользователя не нашлось, то ищем по email
  if (!candidate) {
    candidate = await User.findOne({email: loginOrEmail})
  }

  if (candidate) {
    const salt = bcrypt.genSaltSync(10)
    const newPassword = bcrypt.hashSync(password, salt)
    try {
      const $set = { password: newPassword }
      await User.findOneAndUpdate({_id: candidate._id}, {$set})
      res.status(204).json({})
    } catch (error) {
      res.status(500).json(error)
    }
  } else {
    res.status(404).json({ message: 'Пользователь не найден' })
  }
}
