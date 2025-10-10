import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    login(username);
    navigate("/profile"); // redirect to protected page
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>🔐 Login Page</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ marginRight: "10px", padding: "5px" }}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
