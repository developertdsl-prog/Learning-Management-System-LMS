const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("DB connected"))
  .catch(err => console.log("DB error:", err));

// Simple route
app.get("/", (req, res) => {
  res.send("LMS API is running...");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});