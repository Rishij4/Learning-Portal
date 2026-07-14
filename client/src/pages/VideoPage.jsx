import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

import api from "../services/api";

import Navbar from "../components/Navbar";
import VideoPlayer from "../components/VideoPlayer";
import BookmarkForm from "../components/BookmarkForm";
import BookmarkList from "../components/BookmarkList";

import "./VideoPage.css";

function VideoPage() {
  const { id } = useParams();

  const playerRef = useRef();

  const [video, setVideo] = useState(null);
  const [bookmarks, setBookmarks] = useState([]);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    fetchVideo();
    fetchBookmarks();

    const preventActions = (e) => {
      if (e.type === "contextmenu") {
        e.preventDefault();
      }

      if (e.key === "F12") {
        e.preventDefault();
      }

      if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "i") {
        e.preventDefault();
      }

      if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "j") {
        e.preventDefault();
      }

      if (e.ctrlKey && e.key.toLowerCase() === "u") {
        e.preventDefault();
      }

      if (e.ctrlKey && e.key.toLowerCase() === "s") {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", preventActions);
    document.addEventListener("keydown", preventActions);

    return () => {
      document.removeEventListener("contextmenu", preventActions);
      document.removeEventListener("keydown", preventActions);
    };
  }, []);

  const fetchVideo = async () => {
    try {
      const res = await api.get(`/videos/${id}`);
      setVideo(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchBookmarks = async () => {
    try {
      const res = await api.get(`/bookmarks/${id}`);
      setBookmarks(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const saveBookmark = async (name) => {
    await api.post("/bookmarks", {
      videoId: id,
      name,
      timestamp: currentTime,
    });

    fetchBookmarks();
  };

  const deleteBookmark = async (bookmarkId) => {
    try {
      await api.delete(`/bookmarks/${bookmarkId}`);
      fetchBookmarks();
    } catch (err) {
      console.log(err);
    }
  };

  const editBookmark = async (bookmarkId, name) => {
    try {
      await api.put(`/bookmarks/${bookmarkId}`, {
        name,
      });

      fetchBookmarks();
    } catch (err) {
      console.log(err);
    }
  };

  const seekToBookmark = (time) => {
    if (playerRef.current) {
      playerRef.current.currentTime = time;
      playerRef.current.play();
    }
  };

  if (!video) {
    return (
      <>
        <Navbar />

        <div className="loader">
          Loading Course...
        </div>
      </>
    );
  }

  const progress =
    duration > 0
      ? (currentTime / duration) * 100
      : 0;

  return (
    <>
      <Navbar />

      <div className="video-page">

        <div className="video-content">

          {/* LEFT */}

          <div className="video-section">

            <div className="player-wrapper">

              <div style={{ position: "relative" }}>

                <VideoPlayer
                  url={video.videoUrl}
                  videoId={id}
                  playerRef={playerRef}
                  onLoadedMetadata={setDuration}
                  onTimeUpdate={() => {
                    if (playerRef.current) {
                      setCurrentTime(playerRef.current.currentTime);
                    }
                  }}
                />

                <div className="watermark">
                  GVCC Learning Portal
                </div>

              </div>

            </div>

            <div className="video-info">

              <h1>{video.title}</h1>

              <p>{video.description}</p>

              <div
                style={{
                  marginTop: 20,
                  color: "#2563eb",
                  fontWeight: "600",
                }}
              >
                Current Time : {Math.floor(currentTime)} sec
              </div>

              <div
                style={{
                  marginTop: 20,
                }}
              >
                <div
                  style={{
                    height: 10,
                    background: "#e2e8f0",
                    borderRadius: 20,
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: `${progress}%`,
                      height: "100%",
                      background:
                        "linear-gradient(90deg,#2563eb,#3b82f6)",
                      transition: ".3s",
                    }}
                  />
                </div>

                <div
                  style={{
                    textAlign: "right",
                    marginTop: 8,
                    color: "#2563eb",
                    fontWeight: "600",
                  }}
                >
                  {progress.toFixed(0)}% Completed
                </div>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="bookmark-section">

            <h2
              style={{
                marginBottom: 20,
              }}
            >
              My Bookmarks
            </h2>

            <BookmarkForm onSave={saveBookmark} />

            <div
              style={{
                marginTop: 25,
              }}
            >
              <BookmarkList
                bookmarks={bookmarks}
                onSeek={seekToBookmark}
                onDelete={deleteBookmark}
                onEdit={editBookmark}
              />
            </div>

          </div>

        </div>

      </div>
    </>
  );
}

export default VideoPage;