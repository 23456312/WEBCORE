

const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'woop',
    password: '',
});

module.exports = pool.promise();

