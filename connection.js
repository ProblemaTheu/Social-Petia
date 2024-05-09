import mysql from "mysql"

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'me',
  password : 'secret',
  database : 'my_db'
});
 
connection.connect((err) => {
    if(err){
        console.log("Erro ao conectar no bando de dados", err)
        return;
    }
    
    console.log("Conexão bem sucedida no banco de dados MySQL!")
});

/* querys aqui, depois perguntar pro pita se faz esse codigo ser uma classe ou não */

connection.end();