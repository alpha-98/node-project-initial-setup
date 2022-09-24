module.exports = checkEnvVariable

function checkEnvVariable () {
  const errors = []
  console.log(process.env.PORT)

  if (!process.env.NODE_ENV) {
    errors.push('NODE_ENV missing, Check .env file')
  }

  if (!process.env.PORT) {
    errors.push('PORT missing, Check .env file')
  }
  /*
  if (!process.env.JSON_TOKEN_KEY) {
    errors.push('JSON_TOKEN_KEY missing, Check .env file')
  }

  if (!process.env.JSON_TOKEN_REFRESH_KEY) {
    errors.push('JSON_TOKEN_REFRESH_KEY missing, Check .env file')
  } */

  return errors
}
