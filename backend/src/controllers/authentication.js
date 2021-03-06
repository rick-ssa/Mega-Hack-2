const jwt = require('jsonwebtoken')
const dataBaseFunctions = require('../database/handlers/usersGetters')
const bcrypt = require('bcrypt')

module.exports = {
    async auth (req,res) {
        try{
            dataBaseFunctions.login(req.body.email,(err,result,fields)=>{
                if (err) return res.status(400).json({error: `Data base error ${err.errno}`})
                if(result.length === 0) return res.status(404).json({error:'user not found'})
                
                bcrypt.compare(req.body.password.toString(), result[0].password,(err,same)=>{
                    if(err) return res.status(400).json({error: err})
                    
                    if(!same) return res.status(401).json({error: 'invalid password'})
                    const user = {userId: result[0].userId, name: result[0].name}
                    const accessToken = jwt.sign(user,process.env.API_KEY_SECRET,{
                        expiresIn: '2h'
                    }) 

                    res.json({accessToken})

                })
    
            })
        }
        catch(err){
            res.status(400).json({error:err})
        }
        
    },
}