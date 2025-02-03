import React from 'react';
import './About.css';
import niels from '../images/niels.jpg';
import CallIcon from '@mui/icons-material/Call';

export default function About() {
  const phoneNumber = '+4521649856';

  return (
    <div className="about-container">
      <div className="about-info-container">
        <div className="about-img">
          <img src={niels} alt="Niels Erland Nielsen" />
        </div>
        <div className="about-text">
          <h1 className="about-title">Om os</h1>
          <p className="about-paragraph">
            Jeg flyttede til Orø i 1996 og blev hurtigt forelsket i det unikke
            Ø-liv. Jeg har arbejdet i byggebranchen siden jeg var 18 år gammel
            og har både uddannelse som bygningsinstruktør, kloakmester og
            brandmand. I 2002 sprang jeg ud som selvstændig og startede min
            virksomhed, hvor jeg i starten primært arbejdede på Orø. Siden da
            har vi vokset os større, fået flere dygtige medarbejdere og udfører
            nu opgaver over hele Sjælland. Jeg er gift med Zuzanne, og sammen
            bor vi på Orø, hvor jeg er meget engageret i lokalsamfundet. Udover
            arbejdet er jeg også frivillig brandmand og bidrager aktivt til det
            fællesskab, jeg holder så meget af.
          </p>
          <div className="call-now-about">
            <a
              href="tel:+4521649856"
              className="call-now-link"
            >
              <CallIcon /> Ring nu {phoneNumber}
            </a>
          </div>
        </div>
      </div>

      <div className="commitment-info-container">
        <div className="commitment-text">
          <h1 className="commitment-title">Mit engagement i Fællesskabet</h1>
          <p className="commitment-paragraph">
            Udover vores professionelle arbejde er jeg stolt af at kunne bidrage
            til Orøs sikkerhed og trivsel. Jeg er en dedikeret del af
            brandmandskorpset her på Orø, og denne rolle er et tydeligt udtryk
            for vores engagement i samfundet. Det afspejler de kerneværdier, vi
            bringer med os i vores virksomhed hver dag – mod, integritet og
            samarbejde. Gennem vores frivillige indsats på brandstationen
            stræber vi efter at støtte og beskytte lokalsamfundet og skabe et
            tryggere miljø for alle
          </p>
        </div>
      </div>
    </div>
  );
}
