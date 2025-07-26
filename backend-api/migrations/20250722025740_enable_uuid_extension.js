// backend-api\migrations\20250722025740_enable_uuid_extension.js

/*exports.up = function (knex) {
  return knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";');
};

exports.down = function (knex) {
  return knex.raw('DROP EXTENSION IF EXISTS "uuid-ossp";');
};*/

exports.up = function (knex) {
  return knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";');
};

exports.down = async function (knex) {
  // Xóa các bảng đang dùng uuid_generate_v4() TRƯỚC
  await knex.schema.dropTableIfExists("bookings");
  await knex.schema.dropTableIfExists("routes");
  await knex.schema.dropTableIfExists("departure_points");
  await knex.schema.dropTableIfExists("destination_points");
  await knex.schema.dropTableIfExists("users");

  // Sau khi đã xóa hết các bảng phụ thuộc, mới được xóa extension
  await knex.raw('DROP EXTENSION IF EXISTS "uuid-ossp";');
};
