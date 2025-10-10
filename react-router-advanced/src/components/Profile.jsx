// src/components/Profile.js
import React from "react";
import { Link, Routes, Route, Outlet } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";
import { useAuth } from "../AuthContext";

const Profile = () => {
  const { user, logout } = useAuth();

  return (
    <div style={{ padding: "20px" }}>
      <h2>👤 Profile Page</h2>
      <p>Welcome, <strong>{user?.name}</strong>!</p>
      <button onClick={logout}>Logout</button>

      <hr />

      {/* Navigation for nested sections */}
      <nav style={{ marginBottom: "10px" }}>
        <Link to="details" style={{ marginRight: "10px" }}>Details</Link>
        <Link to="settings">Settings</Link>
      </nav>

      {/* Local nested routing setup */}
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>

      {/* Fallback if no sub-route is selected */}
      <Outlet />
    </div>
  );
};

export default Profile;
