require('dotenv').config()

const jwt = require('jsonwebtoken')

module.exports = {
    async index (req, res) {
        res.json({message: 'list lojas'})
    },

    async store (req,res) {
        const accessToken = jwt.sign({id: 254, name: 'ricardo'},process.env.API_KEY_SECRET,{
            expiresIn: '1h'
        })
        res.json({accessToken})
    },

    async update (req, res) {
        res.json({message: 'updated loja'})
    },

    async destroy (req, res) {
        res.json({message: 'delete loja'})
    },

    async show (req, res) {
        res.json({message: 'show loja'})
    },
}