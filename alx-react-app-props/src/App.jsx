// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// // import WelcomeMessage from './components/WelcomeMessage.jsx';
// import Header from './components/Header.jsx';
// import MainContent from './components/MainContent.jsx';
// import Footer from './components/Footer.jsx';
// import UserProfile from './components/UserProfile.jsx';

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <Header />
//       <MainContent />
//       <Footer />
//       <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
//     </>
//   )
// }



// export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import WelcomeMessage from './components/WelcomeMessage.jsx';
import Header from './components/Header.jsx';
import MainContent from './components/MainContent.jsx';
import Footer from './components/Footer.jsx';
import UserProfile from './components/UserProfile.jsx';
import UserContext from './UserContext.js';  // ✅ Import the context

function App() {
  const [count, setCount] = useState(0)

  // ✅ Instead of passing props down manually, we’ll put them in context
  const userData = {
    name: "Alice",
    age: "25",
    bio: "Loves hiking and photography"
  };

  return (
    <UserContext.Provider value={userData}> {/* ✅ Wrap components inside the provider */}
      <Header />
      <MainContent />
      <Footer />
      <UserProfile /> {/* ✅ No need to pass props here anymore */}
    </UserContext.Provider>
  )
}

export default App

