
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').insert([
    {name: 'cheese'},
    {name: 'meatballs'},

    {name: 'pineapple'},
    {name: 'crust'},
    {name: 'tomato sauce'},

    {name: 'olives'},
  ]);
};
