// Update with  config settings.

require('dotenv').config({ path: __dirname + '/../.env' });

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      port: process.env.DB_PORT,
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './migrations',
      stub: './stubs/migration.stub',
    },
    seeds: {
      directory: './seeds',
      stub: './stubs/seed.stub',
    },
  },
};
