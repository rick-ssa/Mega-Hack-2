const connection = require('../connection')

module.exports = {
    async register({name, description, categoryId},callback) {
        const con = await connection()  

        let columns = '(name, description, categoryId)'
        let values = `('${name}', '${description}', '${categoryId}')`
        const sql = `INSERT INTO vtex_products ${columns} VALUES ${values}`
        con.query(sql,callback)            
    },

    async update(productId, product,callback) {
        const con = connection()
        
        let alterData = ''

        for(prop in product) {
            alterData += `${prop} = '${product[prop]}', `
        }

        alterData = alterData.replace(/,\s$/g,"")
        
        
        sql = `UPDATE vtex_products SET ${alterData} WHERE productId = ${productId}`


        con.query(sql,callback)
    },

    async delete(id,callback) {
        const con = connection()

        sql = 'DELETE FROM vtex_products WHERE productId = ' + id

        con.query(sql,callback)
    }
}
