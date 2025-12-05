import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar-container">
      <nav className="navbar">
       
        <div className="navbar-logo">
          <Link to="/" className="logo">𝓦𝓸𝓷𝓭𝓮𝓻 𝓦𝓪𝓿𝓮</Link>
        </div>

      
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

       
        <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link></li>
          <li><Link to="/destination" onClick={() => setMenuOpen(false)}>Destinations</Link></li>
          <li><Link to="/experiences" onClick={() => setMenuOpen(false)}>Experiences</Link></li>
          <li><Link to="/travel-tips" onClick={() => setMenuOpen(false)}>Travel Tips</Link></li>
          <li><Link to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link></li>
          <li><Link to="/booking" onClick={() => setMenuOpen(false)}>Book Now</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
