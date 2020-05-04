const connection = require('../connection')

const jwt = require('jsonwebtoken')

function getUser(token) {
    let user = jwt.verify(token,process.env.API_KEY_SECRET)
    console.log(token,user)
    return user
}

module.exports = {
    async register({productId, quantity, orderAmount,minAmount, price},token,callback) {
        
        const con = await connection()        
        let columns = '(userId, productId, quantity, orderAmount, minAmount, price, reposition, notifiedWhatsapp, inPromotion)'
        let values = `(${getUser(token).userId}, ${productId}, ${quantity}, ${orderAmount}, ${minAmount}, ${price}, ${false}, ${false}, ${false})`
        const sql = `INSERT INTO users_products ${columns} VALUES ${values}`
        con.query(sql,callback)   
    
        con.end()
        
    },

    async update(userProduct, id, token, callback) {
        const con = connection()
        
        let alterData = ''

        for(prop in userProduct) {
            alterData += `${prop} = '${userProduct[prop]}', `
        }

        alterData = alterData.replace(/,\s$/g,"")
        
        sql = `UPDATE users_products SET ${alterData} WHERE usersProductsId = ${id} and userId=${getUser(token).userId}`

        con.query(sql,callback)

        con.end()
    },

    async delete(id,token,callback) {
        const con = connection()

        sql = `DELETE FROM users_products WHERE userId = ${getUser(token).userId} AND usersProductsId = ${id}`
        con.query(sql,callback)

        con.end()
    }
}
