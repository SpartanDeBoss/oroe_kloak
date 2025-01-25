import React from 'react';
import './AboutPreview.css';

export default function AboutPreview() {
  return (
    <section className="home-about-container" aria-label="About Us">
      <h1 className="home-about-title">Om</h1>
      <article>
        <p className="home-about-paragraph">
          Alt i kloak og dræn! På Orø finder du aut. kloakmester Niels Erland
          Nielsen og alle hans medarbejdere, som arbejder professionelt inden
          for alt kloak arbejde; herunder tilslutning til offentlig kloak,
          vedligeholdelse og totalløsninger indenfor byggeri.
        </p>
        <p className="home-about-paragraph">Yderligere udfører vi:</p>
        <ul className="home-about-services">
          <li>
            Tømrer arbejde fx udskiftning af vinduer og nye hegn/stakitter
          </li>
          <li>Flise arbejde fx indkørsler og terasser</li>
          <li>Træfældning</li>
          <li>Anlæg af haver</li>
          <li>Maler arbejde</li>
        </ul>
        <p className="home-about-paragraph">
          Vi samarbejder med andre fagfolk, herunder elektrikere og VVS'ere, så
          vi kan tilbyde en totalløsning tilpasset et hvert behov.
        </p>
      </article>
    </section>
  );
}