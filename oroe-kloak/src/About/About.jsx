import React from 'react';
import './About.css';
import niels from '../images/niels.jpg';


export default function About() {

return (
  <div className="about-container" id="about">
      <div className="about-info-container">
        <h1 className="about-title">About Me</h1>
        <div className="about-image">
          <img src={niels} alt="description" />
        </div>
        <p className="about-paragraph">
          Jeg flyttede til Orø i 1990 og faldt for Ø-livet. Jeg har arbejdet
          inden for byggeri fra jeg var 18 år. Jeg er uddannet bygningsstruktør,
          kloakmester og brandmand. I 2002 startede jeg som selvstændig, hvor
          jeg primært arbejder kun på Orø. Siden da er vi vokset, vi er blevet
          flere medarbejdere og vi udfører arbejde på hele Sjælland. Jeg er gift
          med Zuzanne, vi bor her på Orø, hvor jeg er meget engageret i
          lokalsamfundet. Jeg er bl.a. frivillig brandmand og formand for MC
          klubben.
        </p>
      </div>

      <div>
        
      </div>
    </div>
  );
}