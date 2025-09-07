// src/components/UserProfile.jsx
import React, { useContext } from "react";
import UserContext from "../UserContext.js";

function UserProfile() {
  const userData = useContext(UserContext); // ✅ consume context

  return (
    <div>
      <h2>{userData.name}</h2>
      <p>Age: {userData.age}</p>
      <p>{userData.bio}</p>
    </div>
  );
}

export default UserProfile;
