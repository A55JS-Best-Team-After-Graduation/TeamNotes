import { useState, useEffect, useContext } from 'react'
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import './App.css'
import Home from './views/Home';
import Register from './views/Register';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
