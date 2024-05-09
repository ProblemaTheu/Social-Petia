const { Client } = require('pg');

// Configurações de conexão com o banco de dados
const client = new Client({
  user: '',
  host: '',
  database: '',
  password: '',
  port: 5432,
});

// Conectar ao banco de dados
client.connect()
  .then(() => console.log('Conexão bem-sucedida ao banco de dados PostgreSQL!'))
  .catch(err => console.error('Erro ao conectar ao banco de dados:', err));
