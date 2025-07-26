// backend-api\controllers\departure.controller.js
exports.createDeparturePoint = (req, res) => {
  const { city, station } = req.body;
  if (!city || !station) {
    return res
      .status(400)
      .json({ status: "fail", message: "City and Station are required" });
  }

  res.status(201).json({
    status: "success",
    data: {
      id: "dp1",
      city,
      station,
      created_at: new Date().toISOString(),
    },
  });
};

exports.getAllDeparturePoints = (req, res) => {
  res.json({
    status: "success",
    data: [
      {
        id: "dp1",
        city: "Hanoi",
        station: "My Dinh Bus Station",
        created_at: new Date().toISOString(),
      },
    ],
  });
};

// THÊM VÀO CUỐI FILE departure.controller.js (sau exports.getAllDeparturePoints)

// Lấy departure point theo ID
exports.getDeparturePointById = (req, res) => {
  const { id } = req.params;

  // Giả lập data (vì không có database thực)
  const departurePoint = {
    id: id,
    city: "Hanoi",
    station: "My Dinh Bus Station",
    created_at: new Date().toISOString(),
  };

  if (!id) {
    return res.status(400).json({
      status: "fail",
      message: "ID is required",
    });
  }

  res.json({
    status: "success",
    data: departurePoint,
  });
};

// Cập nhật departure point
exports.updateDeparturePoint = (req, res) => {
  const { id } = req.params;
  const { city, station } = req.body;

  if (!city || !station) {
    return res.status(400).json({
      status: "fail",
      message: "City and Station are required",
    });
  }

  // Giả lập cập nhật thành công
  const updatedDeparturePoint = {
    id: id,
    city,
    station,
    created_at: new Date().toISOString(),
  };

  res.json({
    status: "success",
    data: updatedDeparturePoint,
  });
};

// Xóa departure point
exports.deleteDeparturePoint = (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      status: "fail",
      message: "ID is required",
    });
  }

  res.json({
    status: "success",
    data: { message: "Departure point deleted successfully" },
  });
};
