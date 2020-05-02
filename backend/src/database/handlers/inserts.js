const connection = require('../connection')

module.exports = {
    async register({name, email, password, cnpj, type, whatsapp},callback) {
        const con = await connection()        
        let columns = whatsapp ? '(name, email, password, cnpj, type, whatsapp)' : '(name, email, password, cnpj, type)'
        let values = whatsapp ? `('${name}', '${email}', '${password}', '${cnpj}', '${type}', '${whatsapp}')` : `('${name}', '${email}', '${password}', '${cnpj}', '${type}')`
        const sql = `INSERT INTO users ${columns} VALUES ${values}`
        con.query(sql,callback)            
    },
}
