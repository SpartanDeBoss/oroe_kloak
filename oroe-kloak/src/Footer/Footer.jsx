import React from 'react';
import './Footer.css';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import PlaceIcon from '@mui/icons-material/Place';
import DomainIcon from '@mui/icons-material/Domain';
import { Link as RouterLink } from 'react-router-dom';


export default function Footer() {

// const navigate = useNavigate();



  return (
    <div className="footer-container">
      <h1 className="footer-title">Aut. Kloakmester Niels Erland Nielsen</h1>
      <div className="footer-content">
        <address className="footer-info">
          <p>
            <a href="tel:+4521649856" aria-label="Call us">
              <CallIcon aria-hidden="true" /> 20 22 22 22
            </a>
          </p>
          <p>
            <a
              href="mailto:niels.e.nielsen@hotmail.com"
              aria-label="Send us an email"
            >
              <EmailIcon aria-hidden="true" /> niels.e.nielsen@hotmail.com
            </a>
          </p>
          <p>
            <PlaceIcon aria-hidden="true" /> Bygaden 43, 4305 Orø
          </p>
          <p>
            <DomainIcon aria-hidden="true" /> CRV-nr: 26803152
          </p>
        </address>
        <div className="footer-newsletter">
          <input
            type="email"
            placeholder="Your email address"
            aria-label="Email address"
          />
          <button type="submit">Subscribe</button>
        </div>
        <div className="footer-quick-links">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/services">Services</RouterLink>
          <a href="#contact">Contact</a>
        </div>
      </div>
      <div className="footer-copyright">
        © {new Date().getFullYear()} Aut. Kloakmester Niels Erland Nielsen. All
        rights reserved.
      </div>
    </div>
  );
}
