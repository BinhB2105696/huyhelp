// backend-api\migrations\20250721_create_bookings_table.js

exports.up = function (knex) {
  return knex.schema.createTable("bookings", function (table) {
    table.uuid("id").primary().defaultTo(knex.raw("uuid_generate_v4()"));
    table.uuid("user_id").notNullable();
    table.uuid("route_id").notNullable();
    table.integer("seat_number").notNullable();
    table.date("booking_date").notNullable();
    table.string("passenger_name").notNullable();
    table.string("passenger_phone").notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("bookings");
};
