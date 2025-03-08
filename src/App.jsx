import React from "react";
import Profile from "./assets/Profile"; // Ensure Profile.jsx is inside src/assets/
import "./App.css"; // Ensure App.css is inside src/

function App() {
  return (
    <div className="app-container">
      <h1>Welcome to La Taza</h1>
      <Profile />
    </div>
  );
}

export default App;
