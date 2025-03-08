import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext"; // ✅ Correct Import
import Header from "./assets/Header"; // ✅ Import Header component
import Dashboard from "./Pages/Dashboard";
import CafeLogin from "./Pages/CafeLogin";
import ProtectedRoute from "./routes/ProtectedRoute"; // ✅ Import ProtectedRoute

function App() {
  return (
    <Router>
      <AuthProvider>  
        <Header />  {/* ✅ Header is now correctly imported */}
        <Routes>
          <Route path="/login" element={<CafeLogin />} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
