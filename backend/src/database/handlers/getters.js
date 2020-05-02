const connection = require('../connection')

module.exports = {
    login(email,callback) {
        const con =  connection()
        const sql = `SELECT email, password FROM users WHERE email = '${email}'`
        con.query(sql,callback)            
    },
}
