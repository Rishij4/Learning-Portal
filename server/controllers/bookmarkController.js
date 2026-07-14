// Bookmark controller
const Bookmark = require("../models/Bookmark");

// Create Bookmark
const createBookmark = async (req, res) => {
  try {
    const { videoId, name, timestamp } = req.body;

    const bookmark = await Bookmark.create({
      videoId,
      name,
      timestamp,
    });

    res.status(201).json({
      success: true,
      data: bookmark,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Bookmarks for a Video
const getBookmarks = async (req, res) => {
  try {
    const bookmarks = await Bookmark.find({
      videoId: req.params.videoId,
    }).sort({ timestamp: 1 });

    res.status(200).json({
      success: true,
      count: bookmarks.length,
      data: bookmarks,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Bookmark (Bonus)
const deleteBookmark = async (req, res) => {
  try {
    const bookmark = await Bookmark.findByIdAndDelete(req.params.id);

    if (!bookmark) {
      return res.status(404).json({
        success: false,
        message: "Bookmark not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Bookmark deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateBookmark = async (req, res) => {
  try {
    const { name } = req.body;

    const bookmark = await Bookmark.findByIdAndUpdate(
      req.params.id,
      { name },
      { new: true }
    );

    if (!bookmark) {
      return res.status(404).json({
        success: false,
        message: "Bookmark not found",
      });
    }

    res.json({
      success: true,
      data: bookmark,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

module.exports = {
  createBookmark,
  getBookmarks,
  deleteBookmark,
  updateBookmark,
};