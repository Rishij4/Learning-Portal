import { Link } from "react-router-dom";

function VideoCard({ video }) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
        transition: "0.3s",
        display: "flex",
        flexDirection: "column",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-8px)";
        e.currentTarget.style.boxShadow =
          "0 15px 30px rgba(37,99,235,0.2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow =
          "0 8px 20px rgba(0,0,0,0.08)";
      }}
    >
      {/* Thumbnail */}
      <img
        src={video.thumbnail}
        alt={video.title}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
        }}
      />

      {/* Content */}
      <div
        style={{
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <h3
          style={{
            margin: "0 0 12px",
            color: "#1e293b",
          }}
        >
          {video.title}
        </h3>

        <p
          style={{
            color: "#64748b",
            lineHeight: "1.6",
            flex: 1,
          }}
        >
          {video.description}
        </p>

        <Link
          to={`/video/${video._id}`}
          style={{ textDecoration: "none" }}
        >
          <button
            style={{
              width: "100%",
              marginTop: "20px",
              padding: "12px",
              background:
                "linear-gradient(135deg,#2563eb,#1d4ed8)",
              color: "#fff",
              border: "none",
              borderRadius: "10px",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            ▶ Watch Video
          </button>
        </Link>
      </div>
    </div>
  );
}

export default VideoCard;