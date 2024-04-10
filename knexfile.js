
// Update with your config settings.

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
    client: 'postgresql',
    connection: 'postgres://erinkelley:Swimming!317@localhost:5432/roommates',
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './seeds'
    },
    useNullAsDefault: true
  }
};
