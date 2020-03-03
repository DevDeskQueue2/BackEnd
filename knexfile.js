require('dotenv').config();

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/devdesk.db3',
    },
    migrations: {
<<<<<<< HEAD
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,

    pool: {
      min: 2,
      max: 10
=======
      directory: './data/migrations'
>>>>>>> 790944d9abd18705cb64e07ba36d568c72d5636e
    },
    seeds: {
      directory: './data/seeds'
    }
  }

};