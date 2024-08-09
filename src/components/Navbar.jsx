import React, { useState } from 'react';
import './Navbar.css';
import sb_logo from '../assets/sb_logo.png';
import navigate_icon from '../assets/navigate_icon.svg';
import cross_icon from '../assets/cross_icon.svg';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [showNavigation, setShowNavigation] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      {/* for mobile screen */}
      <div className="relative">
        <div className="navbar-mobile lg:hidden">
          <div className="logo-container">
            <img src={sb_logo} alt="Sustainable Bhava" className="max-w-full" />
          </div>
          <div className="nav-icon-container">
            <div className="nav-icon">
              <img
                className="cursor-pointer"
                src={showNavigation ? cross_icon : navigate_icon}
                alt="Navigate"
                onClick={() => setShowNavigation(!showNavigation)}
              />
            </div>
          </div>
        </div>
        <div className={`mobile-nav-menu ${showNavigation ? "show" : "hide"}`}>
          {/* Navigation options */}
          <ul className="nav-options">
            <li className="nav-item" onClick={() => { navigate('/'); setShowNavigation(false); }}>Home</li>
            <li className="nav-item" onClick={() => { navigate('/Initiatives'); setShowNavigation(false); }}>Initiatives</li>
            <li className="nav-item" onClick={() => { navigate('/AboutUs'); setShowNavigation(false); }}>About Us</li>
            <li className="nav-item" onClick={() => { navigate('/Contact'); setShowNavigation(false); }}>Contact</li>
          </ul>
        </div>
      </div>

      {/* for the pc screen */}
      <div className="navbar-pc hidden lg:flex">
        <div className="nav-container">
          <div className="nav-item" onClick={() => navigate('/')}>Home</div>
          <div className="nav-item" onClick={() => navigate('/AboutUs')}>About Us</div>
          <div className="logo-container">
            <img src={sb_logo} alt="Sustainable Bhava" className="logo" />
          </div>
          <div className="nav-item" onClick={() => navigate('/Initiatives')}>Initiatives</div>
          <div className="nav-item" onClick={() => navigate('/Contact')}>Contact Us</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
