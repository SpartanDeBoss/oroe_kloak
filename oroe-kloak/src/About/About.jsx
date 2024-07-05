import React from 'react';
import './About.css';
import niels from '../images/niels.jpg';
import CallIcon from '@mui/icons-material/Call';

export default function About() {
  return (
    <div className="about-container" id="about">
      <div className="about-info-container">
        <div className="about-image">
          <img src={niels} alt="Niels Erland Nielsen" />
        </div>
        <div className="about-text">
          <h1 className="about-title">About Us</h1>
          <p className="about-paragraph">
            Jeg flyttede til Orø i 1990 og faldt for Ø-livet. Jeg har arbejdet
            inden for byggeri siden jeg var 18 år. Jeg er uddannet
            bygningsinstruktør, kloakmester og brandmand. I 2002 startede jeg
            som selvstændig, hvor jeg primært arbejdede på Orø. Siden da er vi
            vokset, vi er blevet flere medarbejdere og vi udfører arbejde på
            hele Sjælland. Jeg er gift med Zuzanne og vi bor her på Orø, hvor
            jeg er meget engageret i lokalsamfundet. Jeg er bl.a. frivillig
            brandmand.
          </p>
          <div>
            <a
              href="tel:+4521649856"
              className="call-now-link"
              style={{ textDecoration: 'none', color: '#FFFFFF' }}
            >
              <CallIcon /> Call now +4521649856
            </a>
          </div>
        </div>
      </div>

      <div className="commitment-container">
        <div className="commitment-text">
          <h1 className="commitment-title">Our Commitment to the Community</h1>
          <p className="commitment-paragraph">
            Ud over vores professionelle bestræbelser er vi stolte af bidrage
            til Orøs sikkerhed og trivsel. Jeg er en dedikeret medlem af
            brandmændene her i Orø. Denne rolle understreger vores engagement i
            samfundstjeneste og afspejler kerneværdierne i tapperhed, integritet
            og teamwork, som vi tilfører vores virksomhed hver dag. Gennem vores
            engagement i brandstationen tilstræber vi støtte og beskytte vores
            samfund og sikre et sikrere miljø for alle.
          </p>
        </div>
        <div className="commitment-image">
          <img src={niels} alt="Niels Erland Nielsen" />
        </div>
      </div>
    </div>
  );
}
