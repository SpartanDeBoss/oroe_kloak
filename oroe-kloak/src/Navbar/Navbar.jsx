import React, { useEffect, useState } from 'react';
import { scroller } from 'react-scroll';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import CallIcon from '@mui/icons-material/Call';
import './Navbar.css';

const CALL_NOW_TEXT = 'Ring nu +4521649856';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrollToContact, setScrollToContact] = useState(false);

  const handleNavigation = (path) => {
    navigate(path);
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
        <HomeIcon />
      </NavLink>

      <div className="menu-items">
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
    </nav>
  );
}