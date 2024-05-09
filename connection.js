import mysql from "mysql"

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'me',
  password : 'secret',
  database : 'my_db'
});
 
connection.connect();

/* querys aqui, depois perguntar pro pita se faz esse codigo ser uma classe ou não */

connection.end();