import React from 'react';
import './Home.css';

const HomeTitle = () => {
  return (
    <div className="home-title">
      <svg width="1000px" height="350" viewBox="0 20 600 140">
        <defs>
          {/* Adjusted path for the curved text */}
          <path id="curve" d="M100,150 Q300,20 500,150" />
        </defs>
        {/* "Aut. Kloakmester" on the curve */}
        <text fontSize="46" fill="#000" fontWeight="bold">
          <textPath href="#curve" startOffset="50%" textAnchor="middle">
            Aut. Kloakmester
          </textPath>
        </text>
        {/* "Niels Erland Nielsen" placed underneath the curve */}
        <text x="50%" y="150" fontSize="30" fill="#000" fontWeight="bold" textAnchor="middle">
          Niels Erland Nielsen
        </text>
      </svg>
    </div>
  );
};

export default HomeTitle;