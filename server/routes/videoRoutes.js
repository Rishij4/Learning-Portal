// Video routes
const express = require("express");

const router = express.Router();

const {
  getAllVideos,
  getVideoById,
} = require("../controllers/videoController");
app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});
router.get("/", getAllVideos);

router.get("/:id", getVideoById);

module.exports = router;
