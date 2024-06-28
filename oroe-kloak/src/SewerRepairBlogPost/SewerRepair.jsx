import React from 'react';
import './SewerRepair.css';
import IMG from '../images/IMG-7.jpg';
export default function SewerRepair() {
  return (
    <div className="sewer-repair-container">
      <h1>Signs Your Sewer Line Needs Repair</h1>
      <img src={IMG} alt="Sewer Repair" />
      <p>
        Knowing the signs that your sewer line needs repair can help you avoid
        costly damage and repairs. Look out for the following indicators:
      </p>
      <ul>
        <li>
          <strong>Slow Drains:</strong> If your drains are slow to empty, it
          could be a sign of a clogged or damaged sewer line.
        </li>
        <li>
          <strong>Odors:</strong> Foul odors coming from your drains or yard
          could indicate a sewer line problem.
        </li>
        <li>
          <strong>Backups:</strong> Sewage backups in your drains or toilets are
          a clear sign that your sewer line needs repair.
        </li>
        <li>
          <strong>Pooling Water:</strong> Pools of water in your yard or around
          your home could indicate a broken sewer line.
        </li>
        <li>
          <strong>Foundation Cracks:</strong> Cracks in your foundation could be
          caused by a damaged sewer line leaking water.
        </li>
      </ul>
      <p>
        If you notice any of these signs, contact a professional plumber to
        inspect your sewer line and recommend the necessary repairs. Ignoring
        sewer line problems can lead to more extensive damage and costly
        repairs.
      </p>
    </div>
  );
}
