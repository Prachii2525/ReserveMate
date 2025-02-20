import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema ({
firstName: {
    type: String,
    required: true,
    minlength:[3, "First name must contain at least 3 character!"],
    maxlength: [30, "First name cannot exceed 30 character!"],

},
lastName: {
    type: String,
    required: true,
    minlength:[3, "First name must contain at least 3 character!"],
    maxlength: [30, "First name cannot exceed 30 character!"],

},
email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Provide a valid email"],
},
phone: {
    type: String,
    required: true,
    minlength: [10, "Phone number must contain at least 10 digit!"],
    maxlength: [15, "Phone number cannot exceed 15 digit!"],
},
time: {
    type: String,
    requied: true
},
date: {
    type: String,
    requied: true
},

});
export const Reservation = mongoose.model("Reservation", reservationSchema)