import { useState, useEffect, useContext } from 'react'
import { BrowserRouter, Routes, Route, useParams, Navigate } from "react-router-dom";
import './App.css'
import Home from './views/Home/Home';
import Register from './views/Register/Register';
import Auth from './hoc/Auth';
import Login from './views/Login/Login';
import Calendar from './views/Calendar/Calendar';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          {/* <Route path="/home" element={<Auth> <Home /> </Auth>} /> */}
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/calendar' element= {<Calendar />} />
          <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
