import React, { useEffect, useState } from 'react';
import { scroller } from 'react-scroll';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import CallIcon from '@mui/icons-material/Call';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './Navbar.css';

const CALL_NOW_TEXT = 'Ring nu +4521649856';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrollToContact, setScrollToContact] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 341);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 341);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const handleNavigation = (path) => {
    navigate(path);
    setMenuOpen(false); // Close the menu after navigating
  };

  const handleScrollToContact = () => {
    if (location.pathname === '/') {
      // If already on the Home page, scroll to the contact section
      scroller.scrollTo('contact', {
        duration: 500,
        delay: 100,
        smooth: 'easeInOutQuad',
        offset: -70,
      });
    } else {
      // If not on the Home page, navigate there and scroll after a delay
      navigate('/#contact');
      setScrollToContact(true);
    }
    setMenuOpen(false);
  };

  useEffect(() => {
    if (scrollToContact ) {
      scroller.scrollTo('contact', {
        duration: 500,
        delay: 100,
        smooth: 'easeInOutQuad',
        offset: -70,
      });

    setScrollToContact(false);
    }
  }, [location, scrollToContact]);

  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        <HomeIcon fontSize='large'/>
      </NavLink>

      <div className={`menu-items ${isSmallScreen ? (menuOpen ? "open" : "closed") : ""}`}>
        <NavLink
          to="/about"
          onClick={() => handleNavigation('/about')}
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Om os
        </NavLink>
        <NavLink
          to="/services"
          onClick={() => handleNavigation('/services')}
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Services
        </NavLink>
        <button
          onClick={handleScrollToContact}
          className={`nav-button ${location.hash === '#contact' ? 'active' : ''}`} //
        >
          Kontakt
        </button>
        <NavLink
          to="/workers"
          onClick={() => handleNavigation('/workers')}
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Medarbejdere
        </NavLink>
      </div>

      <div className="call-now">
        <a
          href="tel:+4521649856"
          className="call-now-link-navbar"
          style={{ textDecoration: 'none', color: '#FFFFFF' }}
        >
          <CallIcon /> {CALL_NOW_TEXT}
        </a>
      </div>

      {/* Burger menu  Only appears if screen width is 341 or smaller */}
      {isSmallScreen &&
      <div className="burger-menu" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <CloseIcon fontSize='large'/> : <MenuIcon fontSize='large'/>}
      </div>
      }
    </nav>
  );
}