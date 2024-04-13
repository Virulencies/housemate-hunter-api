// Load environment variables from .env file if present
require('dotenv').config();

/**
 * @type { Object.<string, import("knex").Knex.Config> }
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
    connection: process.env.DATABASE_URL, // Use the DATABASE_URL environment variable in production
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './seeds'
    },
    useNullAsDefault: true
  }
};
//