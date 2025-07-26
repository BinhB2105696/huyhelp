// backend-api\routes\departure.routes.js
const express = require("express");
const router = express.Router();
const controller = require("../controllers/departure.controller");
const { verifyToken, requireAdmin } = require("../middlewares/auth");

router.post("/", verifyToken, requireAdmin, controller.createDeparturePoint);
router.get("/", verifyToken, controller.getAllDeparturePoints);

// THÊM VÀO CUỐI FILE departure.routes.js (trước module.exports = router)

// Lấy departure point theo ID
router.get("/:id", verifyToken, controller.getDeparturePointById);

// Cập nhật departure point
router.put("/:id", verifyToken, requireAdmin, controller.updateDeparturePoint);

// Xóa departure point
router.delete(
  "/:id",
  verifyToken,
  requireAdmin,
  controller.deleteDeparturePoint
);

module.exports = router;
