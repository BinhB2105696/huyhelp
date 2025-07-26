// backend-api\routes\route.routes.js
const express = require("express");
const router = express.Router();
const controller = require("../controllers/route.controller");
const { searchRoutes } = require("../controllers/route.controller");
const { verifyToken, requireAdmin } = require("../middlewares/auth");
const routeCtrl = require("../controllers/route.controller");
// Them các route danh cho admin
router.get("/", controller.getAllRoutes); // API này sẽ được gọi ở Schedule.vue
router.get("/search", searchRoutes);
router.post("/", verifyToken, requireAdmin, routeCtrl.createRoute);
router.put("/:id", verifyToken, requireAdmin, routeCtrl.updateRoute);
router.delete("/:id", verifyToken, requireAdmin, routeCtrl.deleteRoute);

module.exports = router;
