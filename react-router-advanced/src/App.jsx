import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Profile from './components/Profile/Profile'
import ProfileDetails from './components/Profile/ProfileDetails'
import ProfileSettings from './components/Profile/ProfileSettings'
import PostsList from './components/PostLists'
import PostDetails from './components/PostDetails'
import './App.css'
import { AuthProvider } from './AuthContext'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/profile/details" element={<ProfileDetails />} />
          <Route path="/profile/settings" element={<ProfileSettings />} />
          <Route path="/posts" element={<PostsList />} />
          <Route path="/posts/:id" element={<PostDetails />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App
