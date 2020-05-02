const mysql = require('mysql')

async function createDatabase(){

    const con = mysql.createConnection({
        host: "localhost",
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
    });

    con.connect(function(err) {
        if (err) throw err;
        const sql = `CREATE DATABASE IF NOT EXISTS ${process.env.DATABASE_NAME}`
        con.query(sql, function(err) {
            if (err) throw err;
            con.config.database = process.env.DATABASE_NAME
            con.end()
        })
    });
}

module.exports = createDatabase


  
  