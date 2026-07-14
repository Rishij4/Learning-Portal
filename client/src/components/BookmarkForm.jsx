import { useState } from "react";

function BookmarkForm({ onSave }) {
  const [name, setName] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    onSave(name);
    setName("");
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        placeholder="Enter bookmark name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={{
          ...styles.input,
          borderColor: isFocused ? "#2563eb" : "#d1d5db",
          outline: isFocused ? "2px solid #bfdbfe" : "none",
        }}
      />
      <button 
        type="submit" 
        style={{
          ...styles.button,
          backgroundColor: isHovered ? "#1d4ed8" : "#2563eb"
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Save
      </button>
    </form>
  );
}

const styles = {
  form: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
    marginTop: "20px",
  },
  input: {
    padding: "12px 16px",
    width: "100%",
    maxWidth: "350px",
    borderRadius: "8px",
    border: "1px solid #d1d5db",
    fontSize: "16px",
    transition: "all 0.2s ease",
  },
  button: {
    padding: "12px 20px",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "background-color 0.2s ease",
  },
};

export default BookmarkForm;