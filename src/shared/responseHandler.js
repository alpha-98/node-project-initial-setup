module.exports = {
  successHandler,
  errorHandler
}

function successHandler (msg = '', data = null) {
  const responseObj = {
    error: false,
    message: msg || 'Ok'
  }
  if (data) {
    responseObj.data = data
  }
  return responseObj
}

function errorHandler (msg, data = null) {
  const responseObj = {
    error: true,
    message: msg
  }
  if (data) {
    responseObj.data = data
  }
  return responseObj
}
