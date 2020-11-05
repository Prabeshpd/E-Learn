exports.seed = (knex) => {
  return knex('users')
    .del('users')
    .then(() => {
      return knex('users').insert([
        {
          id: 1,
          name: 'Demo User',
          email: 'demouser@lftechnology.com',
          password: '12345678',
        },
      ]);
    });
};
