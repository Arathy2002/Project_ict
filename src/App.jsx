import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Landing from './components/Landing'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Landing/>
       <Routes>
        <Route path-='/' element={<Landing/>} />
        
       </Routes>
    </>
  )
}

export default App
