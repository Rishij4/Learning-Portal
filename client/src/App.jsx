import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import Home from "./pages/Home";
import VideoPage from "./pages/VideoPage";

function App() {

  useEffect(() => {

    const disableContextMenu = (e) => e.preventDefault();

    document.addEventListener("contextmenu", disableContextMenu);

    const disableKeys = (e) => {
      if (
        (e.ctrlKey &&
          ["c", "u", "s", "p"].includes(e.key.toLowerCase())) ||
        e.key === "PrintScreen"
      ) {
        e.preventDefault();
        alert("Action Disabled");
      }
    };

    document.addEventListener("keydown", disableKeys);

    return () => {
      document.removeEventListener("contextmenu", disableContextMenu);
      document.removeEventListener("keydown", disableKeys);
    };

  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/video/:id" element={<VideoPage />} />
    </Routes>
  );
}

export default App;