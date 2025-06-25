const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("MongoDB connection error:", err));

const app = express();

app.use(cors({
    origin: process.env.FRONT_URL,
    optionsSuccessStatus: 200,
}));

app.use(express.json());

app.get("/", (req, res) => res.send("Hello World"));

module.exports = app;