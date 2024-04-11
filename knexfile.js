// Update with your config settings.
require('dotenv').config()
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.DB_USER,
  database:  process.env.DB_NAME,
  password: process.env.DB_PASS, 
  port: process.env.DB_PORT, //5432
  host: process.env.DB_HOST, //localhost
});

module.exports = { pool };

/**
 * @type { import("knex").Knex.Config }
 */
module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/roommates',
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './seeds'
    },
    useNullAsDefault: true
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './seeds'
    },
    ssl: {
      rejectUnauthorized: false, 
    },
    useNullAsDefault: true
  }
};


