const validationResult = require('express-validator').validationResult

module.exports = {
  validateRequest
}

function validateRequest (req, res) {
  const errorArr = validationResult(req)
  if (!errorArr.isEmpty()) {
    return res.status(422).send({ error: true, errors: errorArr.array() })
  }
}
