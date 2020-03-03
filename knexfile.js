require('dotenv').config();

module.exports = {

  development: {
    client: 'sqlite3',
    UseNullAsDefault: true,
    connection: {
      filename: './data/devdesk.db3',
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  }

};