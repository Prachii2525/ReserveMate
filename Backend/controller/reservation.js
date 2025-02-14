import ErrorHandler from "../error/error.js";
import { Reservation } from "../models/reservationSchema.js";

export const sendReservation = async (req, res, next) => {
    const {firstname, lastname, email, phone, date, time} = req.body;
    if (!firstname || !lastname || !email || !phone || !date || !time)
{
    return next(new ErrorHandler(400, "Please fill in all fields."));
}
try{
    await Reservation.create(firstname, lastname, email, phone, date, time);
    res.status(200).
    json({
        success: true,
        message: "Reservation created successfully",
        
    });
}
catch (error) {
    if (error.name === "validationError") {
        const validationError = Object.values(error.errors).map(
            (error) => error.message
        );
        return next(new ErrorHandler(validationError.join(" , "), 400));
    }
    return next(error);
}
}
   