import { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import MainContent from "./components/MainContent.jsx";
import Footer from "./components/Footer.jsx";
import UserProfile from "./components/UserProfile.jsx";
import UserContext from "./UserContext.js";  // ✅ import context

function App() {
  const [userData] = useState({
    name: "Alice",
    age: "25",
    bio: "Loves hiking and photography",
  });

  return (
    <UserContext.Provider value={userData}>   {/* ✅ provide context */}
      <Header />
      <MainContent />
      <Footer />
      <UserProfile />   {/* ✅ no props passed here */}
    </UserContext.Provider>
  );
}

export default App;
