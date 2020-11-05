exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('todo')
    .del('todo')
    .then(() => {
      return knex('todo').insert([
        {
          id: 1,
          name: 'create demo',
          status: 'active',
          user_id: 1,
        },
      ]);
    });
};
