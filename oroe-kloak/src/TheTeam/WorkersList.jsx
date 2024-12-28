import React from 'react';
import Worker from './Workers';
import './WorkersList.css';
import nielsImage from '../images/niels.jpg';
import Morten from '../images/Morten.jpeg';
import KP from '../images/KP.jpg';
import Flemming from '../images/Flemming.jpg';
import Mogens from '../images/Mogens.jpeg';
import Martin from '../images/Martin.jpeg';
import Kim from '../images/Kim.jpeg';
import Alexander from '../images/unavailable.jpeg';
import Thomas from '../images/Thomas.jpg';



export default function ParentComponent() {
  const workers = [
    { name: 'Niels', imageSrc: nielsImage, role: 'CEO & Founder' },
    { name: 'Morten', imageSrc: Morten, role: 'Engineer' },
    { name: 'KP', imageSrc: KP, role: 'Designer' },
    { name: 'Flemming', imageSrc: Flemming, role: 'Manager' },
    { name: 'Mogens', imageSrc: Mogens, role: 'Engineer' },
    { name: 'Martin', imageSrc: Martin, role: 'Engineer' },
    { name: 'Kim', imageSrc: Kim, role: 'Engineer' },
    { name: 'Alexander', imageSrc: Alexander, role: 'Engineer' },
    { name: 'Thomas', imageSrc: Thomas, role: 'Engineer' },

    // Add more workers as needed
  ];

  const topWorker = workers[0]; // Niels
  const restWorkers = workers.slice(1); // Rest of the workers

  return (
    <div className="workers-list">
      <h1 className="workers-list-title">
        Her er listet alle ansatte i firmaet
      </h1>
      <div className="top-worker-container">
        <Worker
          key={0}
          name={topWorker.name}
          imageSrc={topWorker.imageSrc}
          role={topWorker.role}
        />
      </div>
      <hr className='separation-line' />
      <hr className='separation-line' />
      <div className="workers-container">
        {restWorkers.map((worker, index) => (
          <Worker
            key={index + 1}
            name={worker.name}
            imageSrc={worker.imageSrc}
            role={worker.role}
          />
        ))}
      </div>
    </div>
  );
}