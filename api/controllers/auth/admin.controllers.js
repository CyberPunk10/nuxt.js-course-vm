import bcrypt from 'bcrypt-nodejs'
// import jwt from 'jsonwebtoken'
const User = require('../../models/user.model')
// import keys from '../keys'
import mongodb from '../../mongodb'


// const JWT = keys.JWT

module.exports.login = async (req) => {
  // console.log(req.body.login)
  // const candidate = await User.findOne({login: req.body.login})
  const candidate = true

  if (candidate) {
    // const isPasswordCorrect = bcrypt.compareSync(req.body.password, candidate.password)
    // if (isPasswordCorrect) {
    //   const token = jwt.sign({
    //     login: candidate.login,
    //     userId: candidate._id
    //   }, JWT, {expiresIn: 60 * 60})
    //   // res.json({token})
    //   return {token}
    // } else {
    //   // res.status(401).json({message: 'Пароль неверный'})
    //   return {message: 'Пароль неверный'}
    // }
    return {'user': 'kldfjsdlk'}
  } else {
    // res.status(404).json({message: 'Пользователь не найден'})
    return {'message': 'Пользователь не найден'}
  }
  // console.log(req)
  // const test = {'tttt': 'slkdfjas;ldkfj;lasdkfj;as'}
  // return test
}


module.exports.create = async (req) => {

  console.log('findOne')

  // const candidate = await User.findOne({login: req.login})
  const candidate = false

  await mongodb.db('shop2').collection('users')
    .replaceOne({
      _id: 'mydoc'
    }, {
      login: req.login
    }, {
      password: req.password
    })

  console.log('findOne end', candidate)
  // const candidate = true

  if (candidate) {
    // res.status(409).json({message: 'Такой пользователь уже занят'})
    return {message: 'Такой пользователь уже занят'}
  } else {
    console.log('salt')
    const salt = bcrypt.genSaltSync(10)
    console.log(salt)
    const user = new User({
      login: req.login,
      password: bcrypt.hashSync(req.password, salt)
    })
    console.log(user)
    // await user.save()

    // res.status(201).json(user)
    return {user}
  }
}
