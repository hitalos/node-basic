const compression = require('compression')
const express = require('express')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const path = require('path')

const routes = require('./routes')

const app = express()

app.use(helmet())
app.use(compression())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.resolve(__dirname, '../public')))

app.use(routes)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.send(err)
})

module.exports = app
