const connection = require('../connection')

module.exports = {
    login(email,callback) {
        const con =  connection()
        const sql = `SELECT email, password FROM users WHERE email = '${email}'`
        con.query(sql,callback)  
        
        con.end()
    },

    users(userId, name, email, page = 1, limit = 10, callback) {
        let filterName = name ? `name like '${name}%'` : ''
        let filterEmail = email ? `email='${email}'` : ''
        let filterUserId = userId ? `userId='${userId}'` : ''
        let filterPage = `OFFSET ${page - 1}` 
        let filterLimit = `LIMIT ${limit}`
        let whereStatement = ''

        whereStatement += filterName
        whereStatement += whereStatement!=='' && filterEmail!== '' ? ` AND ${filterEmail}` : filterEmail
        whereStatement += whereStatement!=='' && filterUserId!=='' ? ` AND ${filterUserId}` : filterUserId

        whereStatement = whereStatement ? ` WHERE ${whereStatement}` : whereStatement
        
        let sql = "SELECT userId, name, cnpj, email, whatsapp "
        sql += `FROM users`
        sql += whereStatement
        sql += " " + filterLimit
        sql += " " + filterPage

        const con = connection()
        
        con.query(sql,callback)

        con.end()
    }
}
