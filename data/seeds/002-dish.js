
exports.seed = function(knex, Promise) {
  // Inserts seed entries
  return knex('dish').insert([
    {name: 'pizza'},
    {name: 'cake'},
    {name: 'pasta'},
    {name: 'spaghetti'}
  ]);
};
