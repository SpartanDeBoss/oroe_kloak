import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import CallIcon from '@mui/icons-material/Call';
import './Navbar.css';

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav>
      <RouterLink to="/">
        <HomeIcon />
      </RouterLink>
      <RouterLink to="/about">Om os</RouterLink>
      <RouterLink to="/services">Services</RouterLink>
      <RouterLink
        to="/"
        onClick={() => {
          navigate('/');
          setTimeout(() => {
            scroll.scrollTo('contact', {
              duration: 500,
              delay: 100,
              smooth: 'easeInOutQuad',
              offset: -70,
            });
          }, 100);
        }}
      >
        Kontakt
      </RouterLink>
      <RouterLink to="/workers">Medarbejdere</RouterLink>

      <div className="call-now">
        <a
          href="tel:+4521649856"
          className="call-now-link-navbar"
          style={{ textDecoration: 'none', color: '#FFFFFF' }}
        >
          <CallIcon /> Call now +4521649856
        </a>
      </div>
    </nav>
  );
}
