const connection = require('../connection')

module.exports = {
    
    products(productId, name, page = 1, limit = 10, callback) {
        let filterName = name ? `name like '${name}%'` : ''
        let filterProductId = productId ? `productId='${productId}'` : ''
        let filterPage = `OFFSET ${page - 1}` 
        let filterLimit = `LIMIT ${limit}`
        let whereStatement = ''

        whereStatement += filterName
        whereStatement += whereStatement!=='' && filterProductId!== '' ? ` AND ${filterProductId}` : filterProductId

        whereStatement = whereStatement ? ` WHERE ${whereStatement}` : whereStatement
        
        let sql = "SELECT productId, name, description, categoryId "
        sql += `FROM vtex_products`
        sql += whereStatement
        sql += " " + filterLimit
        sql += " " + filterPage

        const con = connection()
        
        con.query(sql,callback)
    }
}
