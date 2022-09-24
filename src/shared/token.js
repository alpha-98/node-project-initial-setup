const responseHandler = require('../shared/responseHandler')
const jwt = require('jsonwebtoken')

module.exports = {
  validateToken
}

async function validateToken (token) {
  if (!token) {
    return responseHandler.errorHandler()
  }
  try {
    const res = await jwt.verify(token, process.env.JSON_TOKEN_KEY)
    return responseHandler.successHandler(null, res)
  } catch (err) {
    return responseHandler.errorHandler(null, err)
  }
}
