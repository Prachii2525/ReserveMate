import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from "./error/error.js";
import ReservationRouter from "./routes/reservationRoute.js";

const app = express();
dotenv.config({ path: "./.env" });

console.log("🚀 Server is starting...");

// ✅ Debug request body before applying middleware
app.use((req, res, next) => {
    next();
});


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
    cors({
        origin: "https://reserve-mate-pn.vercel.app/",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type"],
        credentials: true,
    })
);
app.use("/api/v1/reservation", ReservationRouter);

dbConnection();
app.use(errorMiddleware);

export default app;
