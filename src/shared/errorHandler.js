function handleError (err, req, res, next) {
  const errString = err.message
  switch (errString) {
    case 'SequelizeUniqueConstraintError': {
      console.log('case -3')
      uniqueConstraintError(err, req, res)
      break
    }
    case 'TOKENVALIDATIONERROR': {
      console.log('case - 1')
      handleValidationTokenError(err, req, res)
      break
    }
    default: {
      console.log('case - 2')
      return defaultErrorHandler(err, req, res)
    }
  }
}

function defaultErrorHandler (err, req, res) {
  return res.status(400).json({
    error: err.message,
    stack: err.stack
  })
}

function uniqueConstraintError (err, req, res) {
  console.log(err)
  return res.status(400).json({
    error: 'Unique key constraint failed',
    body: req.body
  })
}

function handleValidationTokenError (err, req, res) {
  return res.status(401).json({
    error: err
  })
}

module.exports = {
  handleError
}
