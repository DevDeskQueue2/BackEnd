exports.up = function (knex, Promise) {
  return knex.schema
    .createTableIfNotExists('users', tbl => {
      tbl.increments();
      tbl.text("username").notNullable();
      tbl.text("password").notNullable();
      tbl.integer("type").unsigned().notNullable();
    })
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('users');
};