const connection = require('../connection')

module.exports = {
    async register({name, email, password, cnpj, type='', whatsapp},callback) {
        const con = await connection()        
        let columns = whatsapp ? '(name, email, password, cnpj, type, whatsapp)' : '(name, email, password, cnpj, type)'
        let values = whatsapp ? `('${name}', '${email}', '${password}', '${cnpj}', '', '${whatsapp}')` : `('${name}', '${email}', '${password}', '${cnpj}', '${type}')`
        const sql = `INSERT INTO users ${columns} VALUES ${values}`
        con.query(sql,callback)   
        
        con.end()
    },
    async updateUsers(user, id, callback) {
        const con = connection()
        
        let alterData = ''

        for(prop in user) {
            alterData += `${prop} = '${user[prop]}', `
        }

        alterData = alterData.replace(/,\s$/g,"")
        

        sql = `UPDATE users SET ${alterData} WHERE userId = ${id}`


        con.query(sql,callback)

        con.end()
    },

    async deleteUsers(id,callback) {
        const con = connection()

        sql = 'DELETE FROM users WHERE userId = ' + id

        con.query(sql,callback)

        con.end()
    }
}
