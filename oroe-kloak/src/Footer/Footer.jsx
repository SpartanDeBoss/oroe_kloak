import React from 'react';
import './Footer.css';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import PlaceIcon from '@mui/icons-material/Place';
import DomainIcon from '@mui/icons-material/Domain';

export default function Footer() {
  return (
    <div className="footer-container">
      <h1 className="footer-title">Aut. Kloakmester Niels Erland Nielsen</h1>

      {/* INLINE Footer Content */}
      <div className="footer-content">
        <p className="footer-item">
          <CallIcon />
          <a href="tel:+4521649856" aria-label="Call us">
            +4521649856
          </a>
        </p>
        <p className="footer-item">
          <EmailIcon />
          <a
            href="mailto:niels.e.nielsen@hotmail.com"
            aria-label="Send us an email"
          >
            niels.e.nielsen@hotmail.com
          </a>
        </p>
        <p className="footer-item">
          <PlaceIcon /> Bygaden 43, 4305 Orø
        </p>
        <p className="footer-item">
          <DomainIcon /> CVR-nr: 26803152
        </p>
      </div>

      {/* Powered by & Copyright */}
      <div className="footer-powered-by">
        Powered by{' '}
        <a
          href="https://www.linkedin.com/in/aaron-ekow-moses/"
          target="_blank"
          rel="noreferrer"
        >
          Aaron Belling Moses
        </a>
      </div>
      <div className="footer-copyright">
        © {new Date().getFullYear()} Aut. Kloakmester Niels Erland Nielsen. Alle
        rettigheder forbeholdes.
      </div>
    </div>
  );
}
