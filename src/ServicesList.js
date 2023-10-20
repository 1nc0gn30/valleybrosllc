import React from 'react';
import './ServicesList.css';

function ServicesList({ onBack }) {
  return (
    <div className='div1'>
      <ul>
        <li>Web Development</li>
        <li>SEO Optimization</li>
        <li>Cyber Security</li>
        <li>Digital Marketing</li>
        <li>Cloud Services</li>
        {/* Add more services as needed */}
      </ul>
      <button onClick={onBack}>Back</button>
    </div>
  );
}

export default ServicesList;
