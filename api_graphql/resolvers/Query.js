// require('dotenv').config()
const { Push_ups } = require('../model/Push_ups')

const Query = {
  severalPush_ups: () => Push_ups.find({}, (error, severalPush_ups) => {
    if (error) console.log('error', error)
    return severalPush_ups
  }),
  push_ups: (_, { id }) => Push_ups.findById(id, (error, push_ups) => {
    if (error) console.log('error', error)
    return push_ups
  })
}
module.exports = Query
