require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const recordsRoutes = require("./routes/records");

const app = express();
const port = process.env.PORT || 5000;

const allowedOrigins = [
  "http://localhost:3000",
  "https://destination-checker-full-stack-x22i-ayyxtbfl8.vercel.app",
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  allowedHeaders: ["Content-Type", "Authorization", "x-api-key"],
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Routes
app.use("/api/records", recordsRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
