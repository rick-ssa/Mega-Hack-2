const connection = require('../connection')

module.exports = {
    
    products(productId, name, categoryId, page = 1, limit = 10, callback) {
        let filterName = name ? `p.name like '${name}%'` : ''
        let filterProductId = productId ? `p.productId='${productId}'` : ''
        let filterCategoryId = categoryId ? `p.categoryId='${categoryId}'` : ''
        let filterPage = `OFFSET ${(page - 1) * limit}` 
        let filterLimit = `LIMIT ${limit}`
        let whereStatement = ''

        whereStatement += filterName
        whereStatement += whereStatement!=='' && filterProductId!== '' ? ` AND ${filterProductId}` : filterProductId
        whereStatement += whereStatement!=='' && filterCategoryId!== '' ? ` AND ${filterCategoryId}` : filterCategoryId

        whereStatement = whereStatement ? ` WHERE ${whereStatement}` : whereStatement
        
        let sql = "SELECT p.productId, p.name, p.description, c.name as category  "
        sql += `FROM vtex_products as p INNER JOIN vtex_categories as c ON c.categoryId = p.categoryId `
        sql += whereStatement
        sql += " " + filterLimit
        sql += " " + filterPage

        const con = connection()
        
        con.query(sql,callback)

        con.end()
    }
}
