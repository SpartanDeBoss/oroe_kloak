import React from 'react';
import About from '../About/About';
import Contact from '../Contacts/Contact';
import './Home.css';
import ServicePreview from '../ServicePreview/ServicePreview';

export default function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Orø Kloak</h1>

      <div className="home-content">
        <div className="home-info-container">
          <p className="home-info-paragraph">
            Alt i kloak og dræn! På Orø finder du aut. kloakmester Niels Erland
            Nielsen og alle hans medarbejdere, som arbejder professionelt inden
            for alt kloak arbejde; herunder tilslutning til offentlig kloak,
            vedligeholdelse og totalløsninger indenfor bygeri. Yderligere
            udfører vi: Tømrer arbejde fx udskiftning af vinduer og nye
            hegn/stakitter Flise arbejde fx indkørsler og terasser Træfældning
            Anlæg af haver Maler arbejde Vi samarbejder med andre fagfolk,
            herunder elektrikere og VVS'ere så vi kan tilbyde en totalløsning
            tilpasset et hvert behov.
          </p>
        </div>
        <div>
          <ServicePreview />
        </div>
        <div>
          <About />
        </div>
        <div>
        <Contact />
        </div>
      </div>
    </div>
  );
}
