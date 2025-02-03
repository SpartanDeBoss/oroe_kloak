import React from 'react';
import './SewerRepair.css';
import IMG from '../images/IMG-7.jpg';
import BackButton from '../BackButton/BackButton';
export default function SewerRepair() {
  return (
    <div className="sewer-repair-container">
      <BackButton />
      <h1>Tegn på at et kloakrør har brug for reparation </h1>
      <img src={IMG} alt="Sewer Repair" />
      <p>
        Hvis du kan genkende tegnene på, at dine kloakrør trænger til
        reparation, kan du undgå at forværre skaderne og undgå dyre
        reparationer. Derfor bør du være opmærksom på følgende:
      </p>
      <ul>
        <li>
          <strong>Afløbene Tømmes Langsomt:</strong> Hvis dine afløb tømmes
          langsomt, kan det være et tegn på en tilstoppet eller beskadiget
          kloakrør.
        </li>
        <li>
          <strong>Lugtgener:</strong> Ubehagelig lugt fra dine afløb eller fra
          din have kan indikere at der er problemer med et kloakrør.
        </li>
        <li>
          <strong>Tilbagestrømning:</strong> Hvis der stiger spildevand op i
          dine afløb eller toiletter, er det et klart tegn på, at et kloakrør
          har brug for reparation.
        </li>
        <li>
          <strong>Vandansamlinger:</strong> Pøle af vand i haven eller omkring
          huset kan indikere et brud på et kloakrør.
        </li>
        <li>
          <strong>Revner i fundamentet:</strong> Hvis du finder revner i husets
          fundament, kan de være forårsaget af et beskadiget kloakrør, der
          lækker vand.
        </li>
      </ul>
      <p>
        Hvis du opdager nogle af disse tegn, bør du kontakte en professionel
        blikkenslager for at få inspiceret kloakledningen og få anbefalet de
        nødvendige reparationer. At ignorere problemer med kloakledningen kan
        føre til større skader og dyre reparationer.
      </p>
    </div>
  );
}
