import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Login'
import {  Routes,Route,Link } from "react-router-dom"
import temp from './temp'
//import Login from './Login'
function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Login/>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/temp-user' element={<temp/>}/>
      </Routes>
    </main>
  )
}

export default App
