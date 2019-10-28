const AuthenticatedController = require('./controllers/AuthenticationController')
const AuthenticatedControllerPolicy = require('./policies/AuthenticationControlerPolicy')

module.exports = (app) => {
    app.post('/register', AuthenticatedControllerPolicy.register, AuthenticatedController.register)
    app.post('/login',AuthenticatedController.login)
}
