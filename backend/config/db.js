const mysql = require('mysql2');


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: '123456',
    database: 'auth_db',
})

db.connect((err) => {
    if (err) {
        return console.log('databases', err);
    }
    else {
        console.log('Database connected');
    }
})


module.exports = db;