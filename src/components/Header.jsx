/* eslint-disable no-unused-vars */
import React from 'react'
import { NavLink} from "react-router-dom";
const Header = () => {
  return (
    <div className='header'>
        <NavLink to="/employee-app"><h2>Home</h2></NavLink>
        <NavLink to="/EmployeeList"><h2>Employee List</h2></NavLink>
        <NavLink to="/Profile"><h2>Profile</h2></NavLink>
        <button className='logout'> Logout</button>
    </div>
  )
}

export default Header