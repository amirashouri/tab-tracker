const {Bookmark} = require('../models')

module.exports = {
    async index (req, res) {
        try {
            const {songId, userId} = req.query
            const bookmark = await Bookmark.findOne({
                where: {
                    SongId: songId,
                    UserId: userId
                }
            })
            
            res.send(bookmark)
        } catch (err) {
            res.status(500).send({
                error: `An error has occured trying to fetch the bookmarks: ${err}`
            })
        }
    },
    async post (req, res) {
        try {
            console.log('------------',req.body)
            const {songId, userId} = req.body
            const bookmark = await Bookmark.findOne({
                where: {
                    SongId: songId,
                    UserId: userId
                }
            })
            if (bookmark) {
                return res.status(400).send({
                    error: `you already have this set as a bookmark`
                })
            }
            const newBookmark = await Bookmark.create({
                SongId: songId,
                UserId: userId
            })
            res.send(newBookmark)
        } catch (err) {
            res.status(500).send({
                error: `An error has occured trying to create the bookmarks: ${err}`
            })
        }
    },
    async delete (req, res) {
        try {
            const {bookmarkId} = req.params
            console.log('bookmark id for delete:', req.params)
            const bookmark = await Bookmark.findByPk(bookmarkId)
            await bookmark.destroy()
            
            res.send(bookmark)
        } catch (err) {
            res.status(500).send({
                error: `An error has occured trying to delete the bookmarks: ${err}`
            })
        }
    }
}