// For express js node framework
import express from "express";

// To change colors of console window
import colors from "colors";

// Dot env to load env file that holds PORT and other info safely
import dotenv from "dotenv";

import morgan from "morgan";

import connectdb from "./config/db.js";

import authRoutes from "./routes/authRoute.js";

// config env
dotenv.config();

// database config
connectdb();

// rest object
const app = express();

// middlewares
app.use(express.json()); // enables json
app.use(morgan("dev"));

// routes
app.use("/app/v1/auth", authRoutes);

// rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcome to E-commerce MERN STACK project</h1>");
});

// PORT
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(
    `Server is running in ${process.env.DEV_MODE} mode, on ${PORT}`.bgMagenta
      .white
  );
});
