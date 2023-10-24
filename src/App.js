import React, { useState } from 'react';
import logo from './logo.png';
import './App.css';
import ServicesList from './ServicesList';

function App() {
  const [showServices, setShowServices] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        {showServices ? (
          <ServicesList onBack={() => setShowServices(false)} />
        ) : (
          <>
            <div className='contact-info'>
              <a href='tel:+17572689454' className='phone-number'>Call Us: +1 757 268 9454</a>
              <a href='mailto:info@valleybrosllc.com' className='email-address'>Email: valleybrosllc@gmail.com</a>
            </div>
            <img src={logo} className="App-logo" alt="logo" />
            <button className='button1' onClick={() => setShowServices(true)}>Services</button>
            <p className='title1'>
             Valley Bros LLC
            </p>
            <p className='title2'>
              Digital Era Businesses
            </p>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
