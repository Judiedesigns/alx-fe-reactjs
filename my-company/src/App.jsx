import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import NewContact from './pages/newContact'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={< Home/>} />
        <Route path='/about' element={< About/>} />
        <Route path='/services' element={< Services/>}/>
        <Route path='/contact' element={<Contact/>} />
        <Route path='/new-contact' element={<NewContact/>} />
      </Routes>
    </>
  )
}

export default App
