const mysql = require('mysql');

const connection = require('./connection');

async function createTablesUsers() {
    const con = await connection()

    let sql = ''
    sql = "CREATE TABLE IF NOT EXISTS users("
    sql += "userId INT NOT NULL PRIMARY KEY AUTO_INCREMENT, "
    sql += "name VARCHAR(200) NOT NULL, "
    sql += "email VARCHAR(100) NOT NULL, "
    sql += "cnpj VARCHAR(50) NOT NULL, "
    sql += "wathsapp VARCHAR(50) , "
    sql += "type VARCHAR(20) NOT NULL"
    sql += ")"

    con.query(sql, (err)=>{
        if(err) throw err

        con.end()
    })
}

async function createTablesCategories() {
    const con = await connection()

    let sql = ''
    sql = "CREATE TABLE IF NOT EXISTS vtex_categories("
    sql += "categoryId INT NOT NULL PRIMARY KEY AUTO_INCREMENT, "
    sql += "name VARCHAR(200) NOT NULL"
    sql += ")"

    con.query(sql, (err)=>{
        if(err) throw err

        con.end()
    })
}

async function createTablesProducts() {
    const con = await connection()

    let sql = ''
    sql = "CREATE TABLE IF NOT EXISTS vtex_products("
    sql += "productId INT NOT NULL PRIMARY KEY AUTO_INCREMENT, "
    sql += "description VARCHAR(255) NOT NULL, "
    sql += "categoryId INT NOT NULL, "
    sql += "FOREIGN KEY (categoryId) REFERENCES vtex_categories (categoryId) "
    sql += "ON DELETE CASCADE "
    sql += "ON UPDATE CASCADE "
    sql += ")"

    con.query(sql, (err)=>{
        if(err) throw err

        con.end()
    })
}

async function createTables() {
    await createTablesUsers()
    await createTablesCategories()
    await createTablesProducts()

}

module.exports = createTables