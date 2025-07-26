// backend-api\controllers\booking.controller.js
const db = require("../db");

exports.createBooking = async (req, res) => {
  const {
    user_id,
    route_id,
    seat_number,
    booking_date,
    passenger_name,
    passenger_phone,
  } = req.body;

  try {
    const [booking] = await db("bookings")
      .insert({
        user_id,
        route_id,
        seat_number,
        booking_date,
        passenger_name,
        passenger_phone,
      })
      .returning("*");

    res.status(201).json({ status: "success", data: booking });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: "error", message: "Booking failed" });
  }
};

exports.getUserBookings = async (req, res) => {
  const { user_id } = req.query;

  // Kiểm tra nếu user_id không được cung cấp
  if (!user_id) {
    return res
      .status(400)
      .json({ status: "error", message: "User ID is required" });
  }

  try {
    const bookings = await db("bookings").where({ user_id }).select("*");
    if (bookings.length === 0) {
      return res
        .status(404)
        .json({ status: "success", data: [], message: "No bookings found" });
    }
    res.json({ status: "success", data: bookings });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ status: "error", message: "Failed to fetch bookings" });
  }
};
