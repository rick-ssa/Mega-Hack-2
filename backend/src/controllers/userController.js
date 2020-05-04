const jwt = require('jsonwebtoken')
const dataBaseFunctionsInserts = require('../database/handlers/usersInserts')
const dataBaseFunctionsGetters = require('../database/handlers/usersGetters')
const bcrypt = require('bcrypt')


module.exports = {
    async index (req, res) {
        const {userId, name, email, page, limit} = req.query
        
        try {
            dataBaseFunctionsGetters.users(userId, name,email,page,limit,(err,result,fields)=>{
                if (err) return res.status(400).json({error: `Data base error ${err.errno}`})
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
            bcrypt.hash(req.body.password.toString(),10,(err,hash)=>{
                if(err) return res.status(400).json({error:err})
                let data = {...req.body, password: hash}
                dataBaseFunctionsInserts.register(data,(err,result)=>{
                    if(err) {
                        if(err.errno===1062) return res.status(406).json({error:'duplicate key for field that has UNIQUE constrain'})
                        return res.status(400).json({error:err})
                    }
                    const accessToken = jwt.sign({userId: result.insertId, name: data.name},process.env.API_KEY_SECRET,{
                        expiresIn: '2h'
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
        try{
            dataBaseFunctionsInserts.updateUsers(req.body,req.params.id,(err,result)=>{
                if (err) return res.status(400).json({error: `Data base error ${err.errno}`})

                res.send(result)
            })
        } catch(err) {
            res.json({error: err})
        }
    },

    async destroy (req, res) {
        try {
            let accessToken = req.headers.authorization.split(' ')[1]
           let user = jwt.verify(accessToken,process.env.API_KEY_SECRET)
            
           if (user.userId.toString() !== req.params.id.toString()) return res.status(403).json({error: 'you can\' performe that action on other user'})
            dataBaseFunctionsInserts.deleteUsers(req.params.id,(err,result)=>{
                if (err) return res.status(400).json({error: `Data base error ${err.errno}`})
                
                if(!result.affectedRows) return res.status(404).json({error: 'user not exist'})

                res.sendStatus(204)
            })
        } catch (err) {
            res.status(400).json({error: err})
        }
    },

    async show (req, res) {
        try {
            dataBaseFunctionsGetters.users(userId=req.params.id,'','',1,1,(err,result)=>{
                if (err) return res.status(400).json({error: `Data base error ${err.errno}`})

                if(result.length === 0) return res.status(404).json({error:'user not found'})
                
                res.json(result)
            })
        } catch(err) {
            res.status(400).json({error:err})
        }
    },
}