const connection = require('../connection')

module.exports = {
    categories(categoryId, name, page = 1, limit = 10, callback) {
        let filterName = name ? `name LIKE '${name}%'` : ''
        let filterCategoryId = categoryId ? `categoryId='${categoryId}'` : ''
        let filterPage = `OFFSET ${(page - 1) * limit}` 
        let filterLimit = `LIMIT ${limit}`
        let whereStatement = ''

        whereStatement += filterName
        whereStatement += whereStatement !== '' && filterCategoryId!=='' ? ` AND ${filterCategoryId}` : filterCategoryId

        whereStatement = whereStatement ? ` WHERE ${whereStatement}` : whereStatement

        
        let sql = "SELECT categoryId, name "
        sql += `FROM vtex_categories`
        sql += whereStatement
        sql += " " + filterLimit
        sql += " " + filterPage

        console.log(sql)

        const con = connection()
        
        con.query(sql,callback)

        con.end()
    }
}
