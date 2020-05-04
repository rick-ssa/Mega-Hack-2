const databaseFunctionsInserts = require('../database/handlers/categoriesInserts')
const databaseFunctionsGetters = require('../database/handlers/categoriesGetters')

module.exports = {
    async index (req, res) {
        try{
            const {categoryId, name, limit, page} = req.query
            databaseFunctionsGetters.categories(categoryId, name, limit, page, (err,result)=>{
                if (err) return res.status(400).json({error: `Data base error ${err.errno}`})

                res.json(result)
            } )
        } catch(err) {
            res.json({error:err})
        }
    },

    async store (req,res) {
        try{
            databaseFunctionsGetters.categories('',req.body.name,1,2000,(err,result)=>{
                if (err) return res.status(400).json({error: `Data base error ${err.errno}`})

                let exists = 0
                if(result.length > 0){
                    exists = result.reduce((red,cat)=>{
                        if(red) return red
    
                        if(cat.name.toUppercase()===req.body.name.toUppercase()) {
                            return cat.categoryId
                        } else {
                            return 0
                        }
                    })
                }

                if(exists) {
                    console.log(exists)
                    return res.json({categoryId:exists.categoryId})
                } else {
                    databaseFunctionsInserts.register(req.body.name,(err,result)=>{
                        if (err) return res.status(400).json({error: `Data base error ${err.errno}`})
        
                        res.json({categoryId: result.insertId})
                    })
                }
            })

        } catch(err) {
            res.json({error:err})
        }
    },

    async update (req, res) {
        try {
            databaseFunctionsInserts.update(req.body.name,req.params.id,(err,result)=>{
                if (err) return res.status(400).json({error: `Data base error ${err.errno}`})
    
                if(!result.affectedRows) return res.status(404).json({error:'Category not found'})
    
                return res.sendStatus(204)
            })
        } catch(err) {
            res.status(400).json({error:err})
        }
    },

    async destroy (req, res) {
        try {
            databaseFunctionsInserts.delete(req.params.id,(err,result)=>{
                if (err) return res.status(400).json({error: `Data base error ${err.errno}`})

                if(!result.affectedRows) return res.status(404).json({error:'Category not found'})

                res.sendStatus(204)
            })
        } catch(err) {
            res.status(400).json({error:err})
        }
    },

    async show (req, res) {
        try {
            databaseFunctionsGetters.categories(req.params.id,'',1,1,(err,result)=>{
                if (err) return res.status(400).json({error: `Data base error ${err.errno}`})
                
                if(!result.length) return res.status(404).json({error:'category not found'})

                res.json(result[0])
            })
        } catch(err) {
            res.status(400).json({error:err})
        }
    },
}