import React from 'react'
import './Heder.css'
// import header from "./header.png"
const Header = () => {
  return (
   <div className='header'>
    {/* <img src={header} alt="" /> */}
    <div className="header-contents">
        <h2>Weaving your Dreams into Unforgettable Adventures</h2>
    

        <button>Book Now</button>
    </div>
</div>
  )
}

export default Header