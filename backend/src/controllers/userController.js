const jwt = require('jsonwebtoken')
const dataBaseFunctions = require('../database/handlers/inserts')
const dataBaseFunctionsGetters = require('../database/handlers/getters')
const bcrypt = require('bcrypt')


module.exports = {
    async index (req, res) {
        const {name, email, page, limit} = req.query
        
        try {
            dataBaseFunctionsGetters.users(name,email,page,limit,(err,result,fields)=>{
                if (err) return res.status(400).json({error: err})
                if (!result) return res.status(204)
                res.json(result)
            })
        }
        catch(err) {
            res.json({error:err})
        }
        
    },

    async store (req,res) {
        try{
            bcrypt.hash(req.body.password,10,(err,hash)=>{
                if(err) throw err
                let data = {...req.body, password: hash}
                dataBaseFunctions.register(data,(err,result)=>{
                    if(err) throw err
                    const accessToken = jwt.sign({userId: result.insertId, name: data.name},process.env.API_KEY_SECRET,{
                        expiresIn: '1h'
                    })
        
                    res.json({userId: result.insertId, accessToken})
                })
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