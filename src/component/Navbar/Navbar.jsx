import React from 'react'
import './Navbar.css'
import about from '../About Us/About'
// import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <div className='navbarlogo' >
        <div className="navbar">
       <p className='logo'>𝓦𝓸𝓷𝓭𝓮𝓻 𝓦𝓪𝓿𝓮</p>
       <ul className='nav-menu'>
        {/* <Link to={"about"}>Home</Link> */}
      <li><a href={about}>Home</a></li>
      <li >About Us</li>
      <li >Destination</li>
      <li >Contact Us</li>
        </ul>
        </div>
    </div>
  )
}

export default Navbar