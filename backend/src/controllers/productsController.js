const functionsDatabaseInserts = require('../database/handlers/productsInserts')
const functionsDatabaseGetters = require('../database/handlers/productsGetters')

module.exports = {
    async index (req, res) {
        try{
            const {productId, name, categoryId, limit, page} = req.query
            functionsDatabaseGetters.products(productId, name, categoryId, page, limit, (err,result) => {
                if(err) return res.status(400).json({error: `Database error ${err.errno}`})

                res.json(result)
            })
        } catch(err) {
            res.json({error: err})
        }
    },

    async store (req,res) {
        try {
            functionsDatabaseInserts.register(req.body,(err,result)=>{
                if(err) return res.status(400).json({error:`Database error ${err.errno}`})

                res.json({productId: result.insertId})
            })
        } catch(err) {
            res.json({error: err})
        }
    },

    async update (req, res) {
        try {
            functionsDatabaseInserts.update(req.params.id,req.body,(err,result)=>{
                if(err) return res.status(400).json({error: `Database error ${err.errno}`})
                
                if(!result.affectedRows) return res.status(404).json({error: 'product not found'})

                return res.sendStatus(204)
            })
        } catch(err) {
            res.json({error: err})
        }
    },

    async destroy (req, res) {
        try {
            functionsDatabaseInserts.delete(req.params.id,(err,result)=>{
                if(err) return res.status(400).json({error: `Database error ${err.errno}`})
                
                if(!result.affectedRows) return res.status(404).json({error: 'product not found'})

                return res.sendStatus(204)
            })
        } catch(err) {
            res.json({error: err})
        }
    },

    async show (req, res) {
        try {
            functionsDatabaseGetters.products(req.params.id,'',1,1,(err,result)=>{
                if(err) return res.status(400).json({error: `Database error ${err.errno}`})
                
                return res.json(result)
            })
        } catch(err) {
            res.json({error: err})
        }
    },
}