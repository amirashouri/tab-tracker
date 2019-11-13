const {Bookmark, Song} = require('../models')
const _ = require('lodash')

module.exports = {
    async index (req, res) {
        try {
            const userId = req.user.id
            const {songId} = req.body
            const where = {
                userId: userId
            }
            if (songId) {
                where.songId = songId
            }
            const bookmarks = await Bookmark.findAll({
                where: where,
                include: [
                    {
                        model: Song
                    }
                ]
            })
            .map(bookmark => bookmark.toJSON())
            .map(bookmark => _.extend(
                {},
                bookmark.Song,
                bookmark
            ))
            
            res.send(bookmarks)
        } catch (err) {
            res.status(500).send({
                error: `An error has occured trying to fetch the bookmarks: ${err}`
            })
        }
    },
    async post (req, res) {
        try {
            const userId = req.user.id
            const {songId} = req.body
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
            const userId = req.user.id
            const {bookmarkId} = req.params
            console.log('bookmark id for delete:', req.params)
            const bookmark = await Bookmark.findOne({
                where: {
                    id: bookmarkId,
                    userId: userId
                }
            })

            if (!bookmark) {
                res.status(403).send({
                    error: 'you do not have the access to this bookmark'
                })
            }

            await bookmark.destroy()
            
            res.send(bookmark)
        } catch (err) {
            res.status(500).send({
                error: `An error has occured trying to delete the bookmarks: ${err}`
            })
        }
    }
}