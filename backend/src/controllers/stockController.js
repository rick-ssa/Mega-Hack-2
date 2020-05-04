const dataBaseFunctionsInserts = require('../database/handlers/stockInserts')
const dataBaseFunctionsGetters = require('../database/handlers/stockGetters')


module.exports = {
    async index (req, res) {
        //todo
        try {
            const {userId, name, email, page, limit} = req.query
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
            let token = req.headers.authorization.split(' ')[1]
            dataBaseFunctionsInserts.register(req.body,token,(err,result)=>{
                if (err) return res.status(400).json({error: `Data base error ${err.errno}`})
                console.log(result)
                res.json({usersProductsId: result.insertId})
            })            
        }
        catch(err){
            res.status(400).json({error:err})
        }
        
    },

    async update (req, res) {
        try{
            let token = req.headers.authorization.split(' ')[1]
            dataBaseFunctionsInserts.update(req.body,req.params.id,token,(err,result)=>{
                if (err) return res.status(400).json({error: err + `Data base error ${err.errno}`})
                if(!result.affectedRows) return res.status(404).json({error: 'item not found'})
                res.sendStatus(204)
            })
        } catch(err) {
            res.json({error: err})
        }
    },

    async destroy (req, res) {
        try {
            let token =  req.headers.authorization.split(' ')[1]
            dataBaseFunctionsInserts.delete(req.params.id,token,(err,result)=>{
                if (err) return res.status(400).json({error: `Data base error ${err.errno}`})
                
                if(!result.affectedRows) return res.status(404).json({error: 'item not found'})

                res.sendStatus(204)
            })
        } catch (err) {
            res.status(400).json({error: err})
        }
    },

    async show (req, res) {
        //todo
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