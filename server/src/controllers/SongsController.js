const {Song} = require('../models')
const Sequelize = require('sequelize')

module.exports = {
    async index (req, res) {
        try {
            let songs = null
            const Op = Sequelize.Op
            const search = req.query.search
            console.log(`the search key is: ${search}`)
            if (search) {
                songs = await Song.findAll({
                    where: {
                        title: {[Op.like]: `%${search}%` }
                        // $or: [
                        //     // {title: {[Op.like]: `%${search}%` }},
                        //     // {album: {[Op.like]: `%${search}%` }},
                        //     // {genre: {[Op.like]: `%${search}%` }},
                        //     // {artist: {[Op.like]: `%${search}%` }}
                        //     {title: {[Op.like]: `%${search}%` }},
                        //     {album: {[Op.like]: `%${search}%` }}
                        // ]
                    }
                })
            }else {
                songs = await Song.findAll({
                    limit: 10
                })
            }
            
            res.send(songs)
        } catch (err) {
            res.status(500).send({
                error: `An error has occured trying to fetch the songs: ${err}`
            })
        }
    },
    async show (req, res) {
        try {
            const song = await Song.findByPk(req.params.songId)
            res.send(song)
            
        } catch (err) {
            res.status(500).send({
                error: `An error has occured trying to fetch the songs`
            })
        }
    },
    async post (req, res) {
        try {
            const song = await Song.create(req.body)
            res.send(song)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to create the songs'
            })
        }
    },
    async put (req, res) {
        try {
            const song = await Song.update(req.body, {
                where: {
                    id: req.params.songId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to update the songs'
            })
        }
    }
}