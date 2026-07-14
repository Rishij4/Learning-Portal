require("dotenv").config();

const express = require("express");
const cors = require("cors");
const videoRoutes = require("./routes/videoRoutes");
const bookmarkRoutes = require("./routes/bookmarkRoutes");
const path = require("path");

const connectDB = require("./config/db");

const app = express();

// Connect Database
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

// 👇 ADD THIS HERE
app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});

app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.get("/api/test", (req, res) => {
  res.json({
    success: true,
    message: "API is working"
  });
});
app.use("/api/videos", videoRoutes);
app.use("/api/bookmarks", bookmarkRoutes);

// Routes
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Learning Portal API Running..."
    });
});

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
