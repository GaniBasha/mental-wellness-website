// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// Initialize app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // allow all origins; adjust if needed for frontend domain
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Import Routes
const authRoutes = require("./routes/auth");
// Add additional routes when ready
// const blogRoutes = require("./routes/blogs");
// const videoRoutes = require("./routes/videos");

// Use Routes
app.use("/api/auth", authRoutes);
// app.use("/api/blogs", blogRoutes);
// app.use("/api/videos", videoRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
