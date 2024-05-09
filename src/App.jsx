/* eslint-disable no-unused-vars */
import React,{ useState } from 'react'
import {
  BrowserRouter as Navigation,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Login from './components/Login'
import Home from './components/Home'
import EmployeeList from './components/EmployeeList';
import Profile from './components/Profile';
function App() {
 

  return (
    <>
    <h2>LOGO</h2>
    <BrowserRouter className="header">
      <Header/>
      <Routes>
        <Route path="/employee-app" element={<Home/>}/>
        <Route path="/Employeelist" element={<EmployeeList/>}/>
        <Route path="/Profile" element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
