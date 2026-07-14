import { useState } from "react";

function BookmarkList({ bookmarks, onSeek, onDelete, onEdit }) {
  const [editingId, setEditingId] = useState(null);
  const [editedName, setEditedName] = useState("");

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div style={styles.listContainer}>
      {bookmarks.length === 0 ? (
        <p style={styles.emptyState}>No bookmarks saved yet.</p>
      ) : (
        bookmarks.map((bookmark) => (
          <div key={bookmark._id} style={styles.card}>
            {editingId === bookmark._id ? (
              <div style={styles.editContainer}>
                <input
                  value={editedName}
                  onChange={(e) => setEditedName(e.target.value)}
                  style={styles.input}
                  autoFocus
                />
                <div style={styles.actionGroup}>
                  <button onClick={() => { onEdit(bookmark._id, editedName); setEditingId(null); }} style={styles.saveBtn}>Save</button>
                  <button onClick={() => setEditingId(null)} style={styles.cancelBtn}>Cancel</button>
                </div>
              </div>
            ) : (
              <>
                <div onClick={() => onSeek(bookmark.timestamp)} style={styles.clickArea}>
                  <strong style={styles.title}>{bookmark.name}</strong>
                  <div style={styles.timestamp}>{formatTime(bookmark.timestamp)}</div>
                </div>
                <div style={styles.actionGroup}>
                  <button onClick={() => { setEditingId(bookmark._id); setEditedName(bookmark.name); }} style={styles.textBtn}>Edit</button>
                  <button onClick={() => onDelete(bookmark._id)} style={{...styles.textBtn, color: "#e11d48"}}>Delete</button>
                </div>
              </>
            )}
          </div>
        ))
      )}
    </div>
  );
}

const styles = {
  listContainer: { display: "flex", flexDirection: "column", gap: "12px" },
  card: { padding: "16px", borderRadius: "12px", background: "#f8fafc", border: "1px solid #e2e8f0", display: "flex", justifyContent: "space-between", alignItems: "center" },
  clickArea: { cursor: "pointer", flex: 1 },
  title: { fontSize: "1rem", color: "#1e293b", display: "block" },
  timestamp: { fontSize: "0.85rem", color: "#64748b", marginTop: "4px" },
  editContainer: { display: "flex", flexDirection: "column", gap: "10px", width: "100%" },
  input: { padding: "8px 12px", borderRadius: "6px", border: "1px solid #cbd5e1" },
  actionGroup: { display: "flex", gap: "10px" },
  textBtn: { background: "none", border: "none", cursor: "pointer", fontSize: "0.9rem", color: "#475569", fontWeight: "600" },
  saveBtn: { background: "#2563eb", color: "white", border: "none", padding: "6px 12px", borderRadius: "6px", cursor: "pointer" },
  cancelBtn: { background: "#94a3b8", color: "white", border: "none", padding: "6px 12px", borderRadius: "6px", cursor: "pointer" },
  emptyState: { textAlign: "center", color: "#94a3b8", fontStyle: "italic" }
};

export default BookmarkList;