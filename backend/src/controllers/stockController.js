const dataBaseFunctionsInserts = require('../database/handlers/stockInserts')
const dataBaseFunctionsGetters = require('../database/handlers/stockGetters')


module.exports = {
    async index (req, res) {
        try {
            let token = req.headers.authorization.split(' ')[1]
            const {usersProductsId, productId, page, limit} = req.query
            dataBaseFunctionsGetters.stock(usersProductsId, productId, page, limit, token,(err,result)=>{
                if (err) return res.status(400).json({error:    `Data base error ${err.errno}`})
                if (!result.length) return res.status(204)
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
        try {
            let token = req.headers.authorization.split(' ')[1]

            dataBaseFunctionsGetters.stock(usersProductsId=req.params.id,'',1,1,token,(err,result)=>{
                if (err) return res.status(400).json({error: `Data base error ${err.errno}`})

                if(result.length === 0) return res.status(404).json({error:'products not found'})
                
                res.json(result)
            })
        } catch(err) {
            res.status(400).json({error:err})
        }
    },
}