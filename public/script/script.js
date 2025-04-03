const mysql = require('mysql');

const con = mysql.createConnection({
    hostname: 'localhost',
    username: 'root',
    password: '1128',
    db: 'sakila'
});

con.connect();

con.createQuery(
    {sql}, (err, rows, fields) => {
        if (err) throw err
        console.log(rows[0].name)
    }
);
con.end();