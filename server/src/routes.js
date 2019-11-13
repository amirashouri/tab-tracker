const AuthenticatedController = require('./controllers/AuthenticationController')
const AuthenticatedControllerPolicy = require('./policies/AuthenticationControlerPolicy')
const SongsController = require('./controllers/SongsController')
const BookmarksController = require('./controllers/BookmarksController')
const HistorysController = require('./controllers/HistorysController')

const isAuthenticated = require('./policies/isAuthenticated')

module.exports = (app) => {
    app.post('/register', AuthenticatedControllerPolicy.register, AuthenticatedController.register)
    app.post('/login',AuthenticatedController.login)
    
    app.get('/songs',SongsController.index)
    app.post('/songs',SongsController.post)
    app.get('/songs/:songId',SongsController.show)
    app.put('/songs/:songId',SongsController.put)

    app.get('/bookmarks', isAuthenticated, BookmarksController.index)
    app.post('/bookmarks', isAuthenticated, BookmarksController.post)
    app.delete('/bookmarks/:bookmarkId', isAuthenticated, BookmarksController.delete)

    app.get('/historys', isAuthenticated, HistorysController.index)
    app.post('/historys', isAuthenticated, HistorysController.post)

}
