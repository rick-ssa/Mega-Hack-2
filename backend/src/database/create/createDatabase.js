const mysql = require('mysql')

async function createDatabase(){

    const con = mysql.createConnection({
        host: "localhost",
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
    });

    con.connect(function(err) {
        if (err)  console.log(err);
        const sql = `CREATE DATABASE IF NOT EXISTS ${process.env.DATABASE_NAME}`
        con.query(sql, function(err) {
            if (err) console.log(err);
            con.config.database = process.env.DATABASE_NAME

        })

        con.end()
    });
}

module.exports = createDatabase


  
  