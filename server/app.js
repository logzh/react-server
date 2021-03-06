const express = require('express')
const path = require('path')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

const routes = require('./routes/index')
const cgiRoute = require('./routes/cgi')

const app = express()

app.engine('.html', require('ejs').__express)
// 设置视图模板的默认后缀名为.html,避免了每次res.Render("xx.html")的尴尬
app.set('view engine', 'html')
// 设置模板文件文件夹,__dirname为全局变量,表示网站根目录
app.set('views', path.join(__dirname, 'views'))

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, '../public')))

app.use(function (req, res, next) {
  next()
})

app.use('/', routes)
app.use('/cgi', cgiRoute)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handlers
app.set('env', 'development')
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500)
    res.render('layout/error', {
      message: err.message,
      error: err
    })
  })
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  res.status(err.status || 500)
  res.render('layout/error', {
    message: err.message,
    error: {}
  })
})

module.exports = app
