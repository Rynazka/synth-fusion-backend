const Express = require('express')
const Routes = Express.Router()
// Controllers Here
const auth = require('../controllers/auth')
// Middlewares Here

// Routes Here
Routes.get('/', (req, res, next) => {
res.send('ok')
})
Routes.post('/register',auth.register)
Routes.post('/login', auth.login)
module.exports = Routes