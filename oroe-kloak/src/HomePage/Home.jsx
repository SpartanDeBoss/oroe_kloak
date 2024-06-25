import React from 'react';
import Contact from '../Contacts/Contact';
import './Home.css';
import ServicePreview from '../ServicePreview/ServicePreview';
import AboutPreview from '../AboutPreview/AboutPreview';

export default function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Aut. Kloakmester Niels Erland Nielsen</h1>

      <div className="home-content">
        <div className="home-service-preview">
          <ServicePreview />
        </div>
      </div>
        <div>
        <div className="about-preview">
          <AboutPreview />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
    </div>
  );
}
