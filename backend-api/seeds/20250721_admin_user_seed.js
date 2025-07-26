// backend-api\seeds\20250721_admin_user_seed.js
const bcrypt = require("bcryptjs");

exports.seed = async function (knex) {
  await knex("users").del();

  const hashedPassword = await bcrypt.hash("admin123", 10);

  await knex("users").insert([
    {
      username: "admin",
      email: "admin@bus.com",
      password: hashedPassword,
      full_name: "Admin User",
      phone_number: "0123456789",
      role: "admin",
    },
  ]);
};
