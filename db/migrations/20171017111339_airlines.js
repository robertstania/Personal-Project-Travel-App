exports.up = function(knex, Promise) {
  return knex.schema.createTable('airlines', (table) => {
    table.increments();
    table.string('name').notNullable().defaultTo('');
    table.string('description').notNullable().defaultTo('');
    table.string('password').notNullable().defaultTo('');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('airlines');
};
