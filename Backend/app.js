import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from "./error/error.js";
import ReservationRouter from "./routes/reservationRoute.js";

const app = express();
dotenv.config({ path: "./config/config.env" });

console.log("🚀 Server is starting...");

// ✅ Debug request body before applying middleware
app.use((req, res, next) => {
    console.log("🛠️ Incoming Request - Method:", req.method, "URL:", req.url);
    console.log("🔍 Raw Request Body Before Parsing:", req.body);
    next();
});


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
    cors({
        origin: "http://localhost:5173",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type"],
        credentials: true,
    })
);
app.use("/api/v1/reservation", ReservationRouter);

dbConnection();
app.use(errorMiddleware);

export default app;
