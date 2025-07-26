// backend-api\controllers\route.controller.js
const db = require("../db");

exports.searchRoutes = async (req, res) => {
  const { departure_id, destination_id } = req.query;

  try {
    const query = db("routes").where(
      "departure_id",
      "like",
      `%${departure_id || ""}%`
    );

    if (destination_id) {
      query.andWhere("destination_id", "like", `%${destination_id}%`);
    }

    const routes = await query.select("*");
    res.json({ status: "success", data: { routes } });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
};

// Thêm tuyến mới
exports.createRoute = async (req, res) => {
  try {
    const route = await db("routes").insert(req.body).returning("*");
    res.status(201).json({ status: "success", data: route[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Thêm tuyến thất bại" });
  }
};

// Sửa tuyến
exports.updateRoute = async (req, res) => {
  const { id } = req.params;
  try {
    const updated = await db("routes")
      .where({ id })
      .update(req.body)
      .returning("*");
    res.json({ status: "success", data: updated[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Sửa tuyến thất bại" });
  }
};

// Xóa tuyến
exports.deleteRoute = async (req, res) => {
  const { id } = req.params;
  try {
    await db("routes").where({ id }).del();
    res.json({ status: "success", message: "Xóa thành công" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Xóa tuyến thất bại" });
  }
};

exports.getAllRoutes = async (req, res) => {
  try {
    const routes = await db("routes"); // bảng routes đã được seed sẵn
    res.json(routes);
  } catch (err) {
    res.status(500).json({ message: "Lỗi server" });
  }
};
