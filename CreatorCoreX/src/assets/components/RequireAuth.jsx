// src/utils/RequireAuth.jsx
import React from "react";
import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const token = localStorage.getItem("token");

  // ✅ If token doesn't exist, redirect to Sign In
  if (!token || token === "undefined") {
    return <Navigate to="/signin" replace />;
  }

  // 🟢 Token exists, allow access
  return children;
};

export default RequireAuth;
