const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'db', // <--- CRITICAL FIX: Changed from 'localhost' to the Docker service name 'db'
  user: 'root',
  password: 'Ganesh@143', // Your password
  database: 'online-art-gallery'
});

module.exports = pool.promise();