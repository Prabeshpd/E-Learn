// Update with  config settings.

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'user',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
};
