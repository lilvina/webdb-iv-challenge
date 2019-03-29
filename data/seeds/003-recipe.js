
exports.seed = function(knex, Promise) {
  // Inserts seed entries
  return knex('recipe').insert([
    {name: 'cheese', dish_id: 1, instructions: 'put some cheese on it'},
    {name: 'sauce', dish_id: 1, instructions: 'put sauce on it'},
    {name: 'cake', dish_id: 2, instructions: 'bake the cake'},
    {name: 'ice cream', dish_id: 2, instructions: 'make some ice cream'},
    {name: 'funnel cake', dish_id: 3, instructions: 'bake the funnel cake'},
    {name: 'sauce', dish_id: 3, instructions: 'fixing the sauce'},
  ]);
};
