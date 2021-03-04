import React from 'react'
import logo from './logo1.png'
import './header.css'
const Header = () => {

    return (

            <div className="page-wrapper">
  <div className="nav-wrapper">
    <div className="grad-bar" />
    <nav className="navbar">
      <img src={logo} alt="Company Logo" />
      <ul className="nav no-search">
        <li className="nav-item"><a href="#">Home</a></li>
        <li className="nav-item"><a href="#">About</a></li>
        <li className="nav-item"><a href="#">Services</a></li>
        <li className="nav-item"><a href="#">Contact Us</a></li>
        <i className="fas fa-search" id="search-icon" />
        <input className="search-input" type="text" placeholder="Search.." />
      </ul>
    </nav>
</div>
       </div>
    )
}

export default Header
