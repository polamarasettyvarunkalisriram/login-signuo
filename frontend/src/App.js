import React from 'react'
import Login from './Login'
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import Signup from './Signup'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login />} />
       <Route path="/signup" element={<Signup/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App