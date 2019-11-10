const AuthenticatedController = require('./controllers/AuthenticationController')
const AuthenticatedControllerPolicy = require('./policies/AuthenticationControlerPolicy')
const SongsController = require('./controllers/SongsController')

module.exports = (app) => {
    app.post('/register', AuthenticatedControllerPolicy.register, AuthenticatedController.register)
    app.post('/login',AuthenticatedController.login)
    app.get('/songs',SongsController.index)
    app.post('/songs',SongsController.post)
    app.get('/songs/:songId',SongsController.show)
    app.put('/songs/:songId',SongsController.put)
}
