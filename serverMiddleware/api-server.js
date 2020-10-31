export default async (req, res, next) => {
  console.log('req: ', req.method)
  let url = req._parsedUrl.pathname.replace(/^\/+|\/+$|\.+/g, '')
  url = url.split('/')
  console.log(url)
  let method = url.pop()
  let controller = url.slice(1).join('/')
  console.log(controller)
  let api = require('../api/controllers/' + controller + '.controllers')
  let result = await api[method](req.params)
  res.end(JSON.stringify(result))
}
