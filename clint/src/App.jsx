import React from 'react'
import './App.scss'
// import Profile from './pages/profile/Profile'
import Home from './pages/home/Home'
import Auth from './pages/auth/Auth.jsx'

import { Routes,Route, Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';

const App = () => {

  const user = useSelector((state)=>state.authReducers.authData)

  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={user?<Navigate to="home"/>:<Navigate to="auth"/>} />
        <Route path='/home' element={user?<Home/>:<Navigate to="../auth"/>} />
        <Route path='/auth' element={user?<Navigate to="../home"/>:<Auth/>} />
      </Routes>
    </div>
  )
}

export default App
