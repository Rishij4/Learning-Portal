import { useEffect, useState } from "react";
import api from "../services/api";

import Navbar from "../components/Navbar";
import VideoCard from "../components/VideoCard";

function Home() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const res = await api.get("/videos");
      setVideos(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div
        style={{
          textAlign: "center",
          padding: "50px 20px",
          background: "linear-gradient(135deg, #2563eb, #1d4ed8)",
          color: "white",
        }}
      >
        <h1 style={{ fontSize: "38px", marginBottom: "10px" }}>
          GVCC Learning Portal
        </h1>

        <p style={{ fontSize: "18px", opacity: "0.9" }}>
          Learn Anytime. Learn Anywhere.
        </p>
      </div>

      {/* Section Heading */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "30px auto",
          padding: "0 20px",
        }}
      >
        <h2
          style={{
            marginBottom: "20px",
            color: "#1e293b",
          }}
        >
          Available Courses
        </h2>

        {videos.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              padding: "80px",
              background: "#fff",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
            }}
          >
            <h3>No videos available.</h3>
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "25px",
            }}
          >
            {videos.map((video) => (
              <VideoCard key={video._id} video={video} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Home;