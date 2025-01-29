import React from 'react'
import './SepticTankProblems.css'
import BackButton from '../BackButton/BackButton';


export default function SepticTankProblems() {
  return (
    <div className="septic-tank-problems-container">
      <BackButton />
      <h1>Almindelige årsager til problemer med din septiktank</h1>
      <p>
        Hvis du kender de almindelige årsager til problemer med en septiktank,
        kan det hjælpe dig med at undgå problemer og sikre, at dit system
        fungerer optimalt. Nogle af de mest almindelige årsager er:
      </p>
      <ul>
        <li>
          <strong>Overbelastning:</strong> For meget vand eller affald i
          septiktanken kan føre til, at den stopper til og begynder at flyde
          over.
        </li>
        <li>
          <strong>Trærødder:</strong> Trærødder kan vokse ind i septiktanken og
          blokere rørene, hvilket kan føre til tilbagestrømning og skader på
          tanken.
        </li>
        <li>
          <strong>Manglende Vedligeholdelse:</strong> Hvis septiktanken ikke
          vedligeholdes korrekt, kan det føre til tilstopninger, lækager og
          andre problemer.
        </li>
        <li>
          <strong>En Ældre Septiktank:</strong> Ældre septiktanke er mere
          udsatte for problemer og kan have brug for udskiftning.
        </li>
        <li>
          <strong>Kemi:</strong> At skylle kemikalier ned i afløbet kan dræbe de
          gavnlige bakterier i septiktanken, hvilket kan skabe problemer.
        </li>
      </ul>
    </div>
  );
}