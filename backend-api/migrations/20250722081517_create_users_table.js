// backend-api\migrations\20250722081517_create_users_table.js
exports.up = async function (knex) {
  await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

  await knex.schema.createTable("users", function (table) {
    table.uuid("id").primary().defaultTo(knex.raw("uuid_generate_v4()"));
    table.string("username").notNullable();
    table.string("email").unique().notNullable();
    table.string("password").notNullable();
    table.string("full_name");
    table.string("phone_number");
    table.string("role").defaultTo("user"); // 'user' hoặc 'admin'
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
