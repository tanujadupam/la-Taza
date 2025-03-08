import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Ensure correct path

const ProtectedRoute = ({ children }) => {
  const { state } = useAuth(); // ✅ Now, useAuth is actually used

  console.log("Auth State:", state); // Debugging: Check authentication state

  return state?.isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;