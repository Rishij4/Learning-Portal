import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 40px",
        background: "#ffffff",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
      }}
    >
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "#2563eb",
          fontSize: "28px",
          fontWeight: "700",
        }}
      >
        GVCC Learning Portal
      </Link>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#334155",
            fontWeight: "600",
          }}
        >
          Home
        </Link>

        <span
          style={{
            background: "#2563eb",
            color: "#fff",
            padding: "8px 16px",
            borderRadius: "20px",
            fontWeight: "600",
            fontSize: "14px",
          }}
        >
          GVCC Assignment
        </span>
      </div>
    </nav>
  );
}

export default Navbar;