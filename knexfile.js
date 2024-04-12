// Update with your config settings.

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
  },
pool: {
  min: 2,
  max: 10,
},
migrations: {
  tableName: 'knex_migrations',
}
};


  