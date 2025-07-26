require("dotenv").config();

const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./docs/openapiSpec.json");

const app = express();

app.use(cors());
app.use(express.json());

// 🧩 Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// 🛣 Các API backend
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/routes", require("./routes/route.routes"));
app.use("/api/bookings", require("./routes/booking.routes"));

// ✅ Thêm dòng này để xử lý /api/departure-points
app.use("/api/departure-points", require("./routes/departure.routes")); // <-- thêm dòng này
app.get("/", (req, res) => {
  res.send("Welcome to the API! Visit /api-docs for documentation.");
});
// 🚀 Start server
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
  console.log("Swagger UI: http://localhost:3000/api-docs");
});
