import React from 'react'
import "../../Styles/Navbar.css"
import{Link} from "react-router-dom"
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='nav-links'>
        
        <Link className='nav-links' to="/">Home</Link>
        <Link className='nav-links' to="/about">About</Link>
        <Link className='nav-links' to="/users">Users</Link>
        <Link className='nav-links' to="/contact">Contact</Link>
      </div>
      <Link to="/register">Register</Link>
    </div>
  )
}

export default Navbar 
