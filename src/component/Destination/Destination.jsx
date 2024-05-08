import React from 'react'
import './Destination.css'
import kerala from './kerala.jpg'
import pic from './3.jpeg'

const Destination = () => {
  return (
    <div>
      <h1 className="heading">Destination</h1>
    
      <div className="hero">
       <div className="hero-left">
        <p >Cruising along the backwaters of Kerala is an unforgettable experience. If you have not experienced it, here is a golden opportunity to do it at a fraction of its original cost. You could get in any House Boat of your liking, saunter down the cool placid waters of our world-famous backwaters, have a merry time and get back home either the same day or after spending a night as well out floating around.</p>
        </div>

        <div className="hero-right">
        <img src={kerala} alt="" />
        </div>

        
      </div>
      <div className="hero" >
       <div className="hero-left">
        <p >Cruising along the backwaters of Kerala is an unforgettable experience. If you have not experienced it, here is a golden opportunity to do it at a fraction of its original cost. You could get in any House Boat of your liking, saunter down the cool placid waters of our world-famous backwaters, have a merry time and get back home either the same day or after spending a night as well out floating around.</p>
        </div>

        <div className="hero-right">
        <img src={pic} alt="" />
        </div>

        
      </div>
    </div>
  )
}

export default Destination