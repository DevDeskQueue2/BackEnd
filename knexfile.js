require('dotenv').config();

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/devdesk.db3',
    },
    migrations: {
      directory: "./data/migrations"
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,

    migrations: {
      directory: "./data/migrations"
    },
    pool: {
      min: 2,
      max: 10
    },
    seeds: {
      directory: './data/seeds'
    }
  }

};

