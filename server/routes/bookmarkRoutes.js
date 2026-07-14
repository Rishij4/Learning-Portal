// Bookmark routes
const express = require("express");

const router = express.Router();

const {
  createBookmark,
  getBookmarks,
  deleteBookmark,
  updateBookmark,
} = require("../controllers/bookmarkController");

// Create Bookmark
router.post("/", createBookmark);

// Get Bookmarks of a Video
router.get("/:videoId", getBookmarks);
router.put("/:id", updateBookmark);

// Delete Bookmark
router.delete("/:id", deleteBookmark);

module.exports = router;