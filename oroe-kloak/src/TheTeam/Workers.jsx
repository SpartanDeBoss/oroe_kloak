// import React from 'react'



export default function Worker({ name, imageSrc, role }) {
  return (
    <div className="worker">
      <img src={imageSrc} alt={`${name}`} className="worker-image" />
      <h3 className="worker-name">{name}</h3>
      <p className="worker-role">{role}</p>
    </div>
  );
}