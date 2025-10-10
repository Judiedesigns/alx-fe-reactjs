import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();

  // If no user, redirect to login page
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // If authenticated, show the protected page
  return children;
};

export default ProtectedRoute;
