const mysql = require('mysql2');
const db = mysql.createConnection({ 
    host: 'localhost', 
    user: 'root', 
    password: 'mario1tamara7', 
    database: 'nodejs_base1' 
}); 
 
db.connect(function(err) { 
    if (err) throw err; 
    console.log('Base de datos conectada'); 
  
}); 
 
module.exports = db; 