import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import NewContact from './components/NewContact'

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
