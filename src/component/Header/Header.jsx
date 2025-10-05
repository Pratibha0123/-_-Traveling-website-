import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <div className="header-overlay" />
      <div className="header-contents">
        <h4>Weaving Your Dreams into Unforgettable Adventures</h4>
        <Link to="/booking" target="_blank" rel="noopener noreferrer">
          <button className="header-btn">Book Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
