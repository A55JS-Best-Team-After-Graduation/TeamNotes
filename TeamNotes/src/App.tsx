import { useState, useEffect, useContext } from 'react'
import { BrowserRouter, Routes, Route, useParams, Navigate } from "react-router-dom";
import './App.css'
import Home from './views/Home';
import Register from './views/Register';
import Auth from './hoc/Auth';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Auth> <Home /> </Auth>} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
