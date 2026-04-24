const express = require('express');
const { Client } = require('pg');

const app = express();

const client = new Client({
  host: 'db', // nome do serviço no compose
  user: 'user',
  password: 'password',
  database: 'meu_db',
  port: 5432,
});

client.connect()
  .then(() => console.log('Conectado ao banco!'))
  .catch(err => console.error('Erro ao conectar:', err));

app.get('/', async (req, res) => {
  const result = await client.query('SELECT NOW()');
  res.json(result.rows);
});

app.listen(3000, '0.0.0.0', () => {
  console.log('API rodando na porta 3000');
});