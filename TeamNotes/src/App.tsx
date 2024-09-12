import { useState, useEffect, useContext } from 'react'
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import './App.css'
import Home from './views/Home';
import Register from './views/Register';
import Auth from './hoc/Auth';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Auth> <Home /> </Auth>} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
