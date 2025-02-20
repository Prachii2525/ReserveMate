import ErrorHandler from "../error/error.js";
import { Reservation } from "../models/reservationSchema.js";

export const sendReservation = async (req, res, next) => {

    if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).json({ success: false, message: "Request body is empty!" });
    }

    const { firstName, lastName, email, phone, date, time } = req.body;

    if (!firstName || !lastName || !email || !phone || !date || !time) {
        return next(new ErrorHandler(400, "Please fill in all fields."));
    }

    try {
        await Reservation.create({ firstName, lastName, email, phone, date, time });
        res.status(200).json({
            success: true,
            message: "Reservation created successfully",
        });
    } catch (error) {
        console.error("❌ Error saving reservation:", error);
        return next(error);
    }
};

