const dotenv = require('dotenv')
const environment = process.argv.slice(2)[0] || 'development'
dotenv.config({ path: `./env/${environment}.env` })
process.env.NODE_ENV = environment

const errorHandler = require('./src/shared/errorHandler')
const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const apiRouter = require('./routes/apiRouter')
const app = express()
const cors = require('cors')
const checkEnv = require('./src/middleware/checkEnvVariables')
// Loading environment

const envErrors = checkEnv()

if (envErrors.length > 0) {
  console.log(envErrors)
  console.log('error starting server')
  process.exit(0)
}

app.disable('etag')
// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')
app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/api', apiRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

app.use(errorHandler.handleError)

module.exports = app
