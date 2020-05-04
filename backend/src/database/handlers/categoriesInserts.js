const connection = require('../connection')

module.exports = {
    async register(name,callback) {
        const con = await connection()        
        
        const sql = `INSERT INTO vtex_categories (name) VALUES ('${name}')`
        con.query(sql,callback)  
        
        con.end()
    },

    async update(name, id, callback) {
        const con = connection()
        
        sql = `UPDATE vtex_categories SET name='${name}' WHERE categoryId = ${id}`

        con.query(sql,callback)

        con.end()
    },

    async delete(id,callback) {
        const con = connection()

        sql = 'DELETE FROM vtex_categories WHERE categoryId = ' + id

        con.query(sql,callback)

        con.end()
    }
}
