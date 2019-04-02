const db = require('./dbConfig.js')

module.exports = {
  getDishes,
  addDish,
  addRecipe,
  getRecipes,
  getDish
}

function getDishes() {
  return db('dish')
}

function addDish(dish) {
  return db('dish').insert(dish)
}

function addRecipe(recipe) {
  return db('recipe').insert(recipe)
}

function getRecipes() {
  return db('recipe')
}

function getDish(id) {
  return db('dish').where({ id: id })
}
