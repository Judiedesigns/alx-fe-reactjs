import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>👩🏽‍💻 My Profile</h2>
      <nav style={{ marginBottom: "15px" }}>
        <Link to="details" style={{ marginRight: "15px" }}>Details</Link>
        <Link to="settings">Settings</Link>
      </nav>
    </div>
  );
};

export default Profile;
