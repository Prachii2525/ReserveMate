import ErrorHandler from "../error/error.js";
import { Reservation } from "../models/reservationSchema.js";

export const sendReservation = async (req, res, next) => {
    console.log("📩 Request Body in Controller:", req.body);

    if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).json({ success: false, message: "Request body is empty!" });
    }

    const { firstname, lastname, email, phone, date, time } = req.body;

    if (!firstname || !lastname || !email || !phone || !date || !time) {
        return next(new ErrorHandler(400, "Please fill in all fields."));
    }

    try {
        await Reservation.create({ firstname, lastname, email, phone, date, time });

        res.status(200).json({
            success: true,
            message: "Reservation created successfully",
        });
    } catch (error) {
        console.error("❌ Error saving reservation:", error);
        return next(error);
    }
};

