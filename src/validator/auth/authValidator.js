const validateToken = require('../../shared/token').validateToken
module.exports = {
  authValidator
}
async function authValidator (req, res, next) {
  const token = req.headers.authorization || req.headers['x-auth-token']
  if (!token) {
    return res.send({ error: true, message: 'token missing' })
  } else {
    const result = await validateToken(token.split(' ')[1])
    if (result.error === true) {
      return res.status(511).send(result.data)
    } else {
      req.headers.user = result.data
    }
    next()
  }
}
