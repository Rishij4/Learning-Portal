require("dotenv").config();

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("HOME WORKING");
});

app.get("/api/test", (req, res) => {
  res.send("API TEST WORKING");
});

app.get("/api/videos", (req, res) => {
  res.send("VIDEOS ROUTE WORKING");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on", PORT);
});
