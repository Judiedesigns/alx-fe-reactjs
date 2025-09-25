import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='border-4 border-[gold] m-5'>
      <h1 className='text-[18px] text-[brown]'>Hello world!</h1>
    </div>
  )
}

export default App
