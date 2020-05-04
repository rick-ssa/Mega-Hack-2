const connection = require('../connection')

const jwt = require('jsonwebtoken')

function getUser(token) {
    let user = jwt.verify(token,process.env.API_KEY_SECRET)
    return user
}

module.exports = {
    stock(usersProductsId, productId, page = 1, limit = 10,token, callback) {
        let filterUsersProductsId = usersProductsId ? `l.usersProductsId = ${usersProductsId}` : ''
        let filterProductId = productId ? `p.productId='${productId}'` : ''
        let filterPage = `OFFSET ${(page - 1) * limit}` 
        let filterLimit = `LIMIT ${limit}`
        let whereStatement = ''

        whereStatement += filterUsersProductsId
        whereStatement += whereStatement!=='' && filterProductId!== '' ? ` AND ${filterProductId}` : filterProductId

        whereStatement =  whereStatement ? ` WHERE l.userId = ${getUser(token).userId} AND ${whereStatement}` : ` WHERE l.userId = ${getUser(token).userId}`
        
        let sql = "SELECT l.usersProductsId as stockId, p.productId, p.name as product,p.description, c.name as category, l.quantity, l.orderAmount, l.minAmount, l.price "
        sql += `FROM vtex_products as p INNER JOIN users_products as l ON l.productId = p.productId ` 
        sql += `INNER JOIN vtex_categories as c ON p.categoryId = c.categoryId ` 
        sql += whereStatement
        sql += " " + filterLimit
        sql += " " + filterPage

        const con = connection()
        
        con.query(sql,callback)

        con.end()
    }
}
