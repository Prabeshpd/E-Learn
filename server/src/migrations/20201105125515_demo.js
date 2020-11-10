/**
 * Create tables users and todos
 *
 * @param   {object} knex
 * @returns {Promise}
 */

exports.up = (knex) => {
  return knex.schema
    .createTable('users', (table) => {
      table.increments('id').primary();
      table.string('name', 255).notNullable();
      table.string('email', 255).notNullable();
      table.string('password', 255).notNullable();
      table.boolean('account_verified').notNullable().defaultTo(false);
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
    .createTable('todos', (table) => {
      table.increments('id');
      table.string('task').notNullable();
      table.boolean('completed').notNullable().defaultTo(false);
      table.integer('user_id').references('id').inTable('users').onDelete('CASCADE');
      table.timestamp('deadline').defaultTo(null);
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
};

exports.down = (knex) => knex.schema.dropTable('todos').dropTable('users');
