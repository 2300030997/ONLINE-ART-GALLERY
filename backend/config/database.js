const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Ganesh@143',
  database: 'online-art-gallery'
});

module.exports = pool.promise();