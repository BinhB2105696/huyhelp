// backend-api\migrations\20250722031118_create_departure_and_destination_tables.js
exports.up = function (knex) {
  return knex.schema
    .createTable("departure_points", function (table) {
      table.increments("id").primary();
      table.string("name").notNullable();
    })
    .createTable("destination_points", function (table) {
      table.increments("id").primary();
      table.string("name").notNullable();
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("destination_points")
    .dropTableIfExists("departure_points");
};
