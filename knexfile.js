// Update with your config settings.

/**
 * @type { import("knex").Knex.Config }
 */
// module.exports = {
//   development: {
//     client: 'pg',
//     connection: process.env.DATABASE_URL ||'postgres://localhost/roommates',
//     migrations: {
//       directory: './db/migrations'
//     },
//     seeds: {
//       directory: './seeds'
//     },
//     useNullAsDefault: true
//   },
//   production: {
//     client: 'pg',
//     connection: 'postgres://yxnxvudzvblxzm:a7af70e1dbb73ecdc727006bbe3d99df7cab08af88a72e1e909032c0fd61c94c@ec2-107-21-67-46.compute-1.amazonaws.com:5432/dbblj85nc3srbf',
//     migrations: {
//       directory: './db/migrations'
//     },
//     seeds: {
//       directory: './seeds'
//     },
//     ssl: {
//       rejectUnauthorized: false, 
//     },
//     useNullAsDefault: true
//   }
// };

const knex = require('knex');
const { Pool } = require('pg');

module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
  },
};

const pgPool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

const db = knex({
  client: 'pg',
  connection: {
    // Use a connection object with a `getConnection` function
    getConnection: () => pgPool.connect(),
  },
});



module.exports = db;
