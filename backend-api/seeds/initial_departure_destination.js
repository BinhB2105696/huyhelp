// THAY THẾ TOÀN BỘ NỘI DUNG FILE initial_departure_destination.js

exports.seed = async function (knex) {
  // Đảm bảo có UUID extension
  await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

  // Xóa dữ liệu cũ
  await knex("departure_points").del();
  await knex("destination_points").del();

  // Thêm departure points
  await knex("departure_points").insert([
    {
      id: 1,
      name: "BX An Hữu - An Hữu",
    },
    {
      id: 2,
      name: "BX An Khê - An Khê",
    },
    {
      id: 3,
      name: "BX Mỹ Đình - Hà Nội",
    },
  ]);

  // Thêm destination points
  await knex("destination_points").insert([
    {
      id: 1,
      name: "BX Miền Tây - TP.HCM",
    },
    {
      id: 2,
      name: "BX Miền Đông - TP.HCM",
    },
    {
      id: 3,
      name: "BX Cần Thơ - Cần Thơ",
    },
  ]);
};
