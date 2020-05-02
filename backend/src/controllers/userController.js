const jwt = require('jsonwebtoken')
const dataBaseFunctions = require('../database/handlers/inserts')

module.exports = {
    async index (req, res) {
        res.json({message: 'list lojas'})
    },

    async store (req,res) {
        try{
            dataBaseFunctions.register(req.body,(err,result)=>{
                if(err) throw err
                const accessToken = jwt.sign({userId: result.insertId, name: req.body.name},process.env.API_KEY_SECRET,{
                    expiresIn: '1h'
                })
    
                res.json({userId: result.insertId, accessToken})
            })
        }
        catch(err){
            res.status(400).json({error:err})
        }
        
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