
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('ingredients', tbl => {
      tbl.increments()
      tbl.string('name', 128).notNullable().unique()
    })
    .createTable('dish', tbl => {
      tbl.increments()
      tbl.string('name', 128).notNullable().unique()
    })
    .createTable('recipe', tbl => {
      tbl.increments()
      tbl.string('name', 128).notNullable()
      tbl.string('instructions', 128).notNullable()
      tbl.integer('dish_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('dish')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })
    .createTable('recipes_ingredients', tbl => {
      tbl.increments()
      tbl.integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      tbl.float('amount', 9).notNullable()
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipe')
    .dropTableIfExists('dish')
    .dropTableIfExists('recipes_ingredients')
};
