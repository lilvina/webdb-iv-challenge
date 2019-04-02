
exports.seed = function(knex, Promise) {
  return knex('recipes_ingredients').insert([
    {recipe_id: 1, ingredient_id: 1, amount: 6},
    {recipe_id: 1, ingredient_id: 2, amount: 3},
    {recipe_id: 2, ingredient_id: 2, amount: 2},
    {recipe_id: 3, ingredient_id: 3, amount: 1},
    {recipe_id: 3, ingredient_id: 3, amount: 4},
    {recipe_id: 4, ingredient_id: 4, amount: 5},
    {recipe_id: 4, ingredient_id: 4, amount: 9},
    {recipe_id: 5, ingredient_id: 5, amount: 4},
    {recipe_id: 6, ingredient_id: 6, amount: 2},
    {recipe_id: 6, ingredient_id: 6, amount: 3},
  ]);
};
