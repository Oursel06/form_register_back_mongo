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

const allowedOrigins = [
    'http://localhost:3000',
    'https://oursel06.github.io',
];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin) return callback(null, true);

        if (allowedOrigins.indexOf(origin) === -1) {
            const msg = `L'origine ${origin} n'est pas autorisée par CORS.`;
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    },
    optionsSuccessStatus: 200,
}));

app.use(express.json());

app.get("/", (req, res) => res.send("Hello World"));

const postRoutes = require("./routes/postRoutes");
app.use("/posts", postRoutes);

module.exports = app;