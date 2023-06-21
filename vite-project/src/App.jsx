import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './pages/Home.jsx'
import Register from './pages/Register.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/Register" exact element={<Register />}></Route>
      </Routes>
    </>
  )
}

export default App
