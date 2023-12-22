const Express = require('express')
const App = Express()
const Cors = require('cors')
const Morgan = require('morgan')
const Dotenv = require('dotenv')
const Helmet = require('helmet')
const Path = require('path')
const PORT = process.env.PORT || 6507
const HOST = '0.0.0.0'
const CookieParser = require('cookie-parser')

Dotenv.config({ path: __dirname + '.env'})

App.use(Helmet())
App.use(Cors()) 
App.use(Express.json())
App.use(Express.urlencoded({ extended: false }))
App.use(Express.static('public'))
App.set('view engine', 'ejs')
App.use(Morgan('dev'))
App.use(CookieParser())

const Server = App.listen(PORT, HOST, () => console.log(`Server is running in port : ${ PORT }`))

const Routes = require('./routes/index')
App.use(Routes)
const ErrorHandler = require('./middlewares/handlers/ErrorHandlers')
App.use(ErrorHandler.errorHandler)

module.exports = { App, Server }