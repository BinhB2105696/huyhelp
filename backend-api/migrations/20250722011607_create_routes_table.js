// backend-api\migrations\20250722011607_create_routes_table.js
exports.up = function (knex) {
  return knex.schema.createTable("routes", function (table) {
    table.uuid("id").primary().defaultTo(knex.raw("uuid_generate_v4()"));
    table.uuid("departure_id").notNullable();
    table.uuid("destination_id").notNullable();
    table.uuid("bus_type_id").notNullable();
    table.timestamp("departure_time").notNullable();
    table.float("duration_hours").notNullable();
    table.integer("price").notNullable();
    table.string("currency").defaultTo("VND");
    table.integer("available_seats").notNullable();

    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("routes");
};
