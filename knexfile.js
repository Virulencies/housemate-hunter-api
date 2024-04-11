// // Update with your config settings.

// /**
//  * @type { import("knex").Knex.Config }
//  */
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

// Update with your config settings.

/**
 * @type { import("knex").Knex.Config }
 */

var pg = require('pg').native;
pg.defaults.ssl = true;
module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL || 'postgres://localhost/roommates',
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
    connection: process.env.DATABASE_URL || 'postgres://yxnxvudzvblxzm:a7af70e1dbb73ecdc727006bbe3d99df7cab08af88a72e1e909032c0fd61c94c@ec2-107-21-67-46.compute-1.amazonaws.com:5432/dbblj85nc3srbf',
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './seeds'
    },
    ssl: {
      rejectUnauthorized: false
    },
    useNullAsDefault: true
  }
};
