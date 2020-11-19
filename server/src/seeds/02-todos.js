/**
 * Delete existing entries and seed values for todos.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
exports.seed = (knex) => {
  return knex('todos')
    .del()
    .then(() => {
      return knex('todos').insert([
        {
          task: 'some random task',
          completed: false,
          user_id: 1,
        },
        {
          task: 'another task',
          completed: false,
          user_id: 1,
        },
      ]);
    });
};
