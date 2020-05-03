const connection = require('../connection')

module.exports = {
    login(email,callback) {
        const con =  connection()
        const sql = `SELECT email, password FROM users WHERE email = '${email}'`
        con.query(sql,callback)            
    },
    users(name, email, page = 0, limit = 10, callback) {
        let filterName = name ? `name='${name}'` : ''
        let filterEmail = email ? `email='${email}'` : ''
        let filterPage = `OFFSET ${page}` 
        let filterLimit = `LIMIT ${limit}`
        
        let sql = "SELECT name, cnpj, email, type, whatsapp "
        sql += `FROM users`
        sql += filterName ? ` WHERE ${filterName}` : ''
        sql += filterEmail ? filterName !== '' ? ` AND ${filterEmail}` : ` WHERE ${filterEmail}` : ''
        sql += " " + filterLimit
        sql += " " + filterPage
        console.log(sql)
        const con = connection()
        
        con.query(sql,callback)
    }
}
