require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = require("./config/db");
const Video = require("./models/Video");

const videos = [
  {
    title: "JavaScript Basics",
    description: "Learn JavaScript",
    thumbnail:
      "https://img.youtube.com/vi/W6NZfCO5SIk/maxresdefault.jpg",
    videoUrl:
      "http://localhost:5000/uploads/videos/javascript.mp4",
    duration: 300,
    category: "JavaScript",
  },
  {
    title: "React Crash Course",
    description: "Learn React",
    thumbnail:
      "https://img.youtube.com/vi/w7ejDZ8SWv8/maxresdefault.jpg",
    videoUrl:
      "http://localhost:5000/uploads/videos/react.mp4",
    duration: 300,
    category: "React",
  },
  {
    title: "Node.js Tutorial",
    description: "Learn Node.js",
    thumbnail:
      "https://img.youtube.com/vi/Oe421EPjeBE/maxresdefault.jpg",
    videoUrl:
      "http://localhost:5000/uploads/videos/node.mp4",
    duration: 300,
    category: "Node.js",
  }
];

const seedData = async () => {
  try {
    await connectDB();

    await Video.deleteMany();

    await Video.insertMany(videos);

    console.log("Sample videos inserted successfully!");

    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedData();