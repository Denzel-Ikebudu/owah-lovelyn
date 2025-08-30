import React from 'react'
import { useState } from 'react'
import './Navbar.css'
import arrow_icon from '../../assets/arrow-icon.png'
import menu_icon from '../../assets/icons-menu.png'
import close_icon from '../../assets/icons-close.png'
import '../../App'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='navbar'>
      <div className='navbar-name'>
        <h2>Owah Lovelyn</h2>
      </div>

      <div className={`navbar-links ${isOpen ? 'active': ''}`}>
        <ul>
          <li> <a href="#home-section">Home</a> </li>
          <li> <a href="#about-section">About</a> </li>
          <li> <a href="#projects-section">Projects</a> </li>
        </ul>
        

      </div>
      
      <div className='menu-icon' onClick={()=> setIsOpen(!isOpen)}>
        <img src={isOpen ? close_icon : menu_icon} alt="menu" />
      </div>

      <a id='contact-btn' href='#contact-section' alt=''>
      <button>
          <p>Contact Me</p>
          <img src={arrow_icon} alt="" />
        </button>
      </a>
    </div>
  )
}

export default Navbar
