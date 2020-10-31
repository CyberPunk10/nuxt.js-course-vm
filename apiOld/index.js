import mongodb from '../api/mongodb'

async function handleCall(req, res, next) {
  if (req.url !== '/date') {
    return next
  }

  // await mongodb.connect()
  await mongodb.db('shop2').collection('text')
    .replaceOne({
      _id: 'mydoc'
    }, {
      date: new Date()
    }, {
      upsert: true
    })

    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({date: new Date()}))
}

export default function (req, res, next) {
  // req is the Node.js http request object
  console.log(req.url)

  handleCall(req, res, next).then(n => {
    if(n) n()
  })
}
