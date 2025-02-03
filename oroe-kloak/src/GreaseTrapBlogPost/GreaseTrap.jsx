import React from 'react'
import './GreaseTrap.css'
import IMG from '../images/GreaseTrap.jpg'
import BackButton from '../BackButton/BackButton';


export default function GreaseTrap() {
  return (
    <div className="grease-trap-container">
      <BackButton />
      <h1>Sådan vedligeholder du din fedtudskiller</h1>
      <img src={IMG} alt="Grease Trap" />

      <p>
        Det er vigtigt at vedligeholde din fedtudskiller for at sikre, at dit
        kloaksystem fungerer optimalt, forebygge skader og for at undgå dyre
        reparationer. Derfor kan du følge disse simple råd:
      </p>
      <ul>
        <li>
          <strong>Regelmæssig rengøring:</strong> Sørg for at rengøre din
          fedtudskiller jævnligt for at undgå ophobninger af fedt, som kan
          blokere dine kloakrør.
        </li>
        <li>
          <strong>Skrab tallerkener af:</strong> Fjern madrester og andet fast
          affald fra tallerkener, inden de skylles, for at forhindre
          tilstopninger i dine kloakrør.
        </li>
        <li>
          <strong>Brug bakterietilsætninger:</strong> Tilføj bakterier, der
          nedbryder fedt og mindsker lugtgener.
        </li>
        <li>
          <strong>Tjek regelmæssigt:</strong> Tjek din fedtudskiller jævnligt
          for skader eller utætheder.
        </li>
        <li>
          <strong>Professionel service:</strong> Få en professionel til at
          inspicere og vedligeholde din fedtudskiller mindst én gang om året.
        </li>
      </ul>
      <p>
        Ved at følge disse råd kan du sikre, at din fedtudskiller fungerer optimalt og undgå unødvendige udgifter til reparationer.
      </p>
    </div>
  );
}