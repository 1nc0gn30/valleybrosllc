import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from './vblogo.png'; // Ensure this path is correct
import './App.css';
import ServicesList from './ServicesList';
import ContactForm from './ContactForm';
import ParticlesContainer from './ParticlesContainer'; 

const ContactInfo = () => (
  <div className='contact-info' data-aos="fade-right">
    <a href='tel:+17578396554' className='phone-number'>Call Us: +1 757 839 6554</a>
    <a href='mailto:valleybrosllc@gmail.com' className='email-address'>Email: valleybrosllc@gmail.com</a>
  </div>
);

const ServiceButton = ({ onClick }) => (
  <button className='button1' onClick={onClick} data-aos="zoom-in">Explore Our Services</button>
);

const Logo = () => (
  <img src={logo} className="App-logo" alt="Valley Bros LLC Logo" data-aos="flip-left" />
);

function App() {
  const [showServices, setShowServices] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App">
      <ParticlesContainer />
      <header className="App-header">
        <h1>Valley Bros LLC - Pioneering Digital Solutions in Virginia Beach</h1>
        {showServices ? (
          <ServicesList onBack={() => setShowServices(false)} />
        ) : showContactForm ? (
          <ContactForm onBack={() => setShowContactForm(false)} />
        ) : (
          <>
            <div className="container1">
              <div className="logo1">
                <Logo />
              </div>
              <ServiceButton onClick={() => setShowServices(true)} />
              <button className='button1' onClick={() => setShowContactForm(true)} data-aos="zoom-in">Contact Us</button>
            </div>
            <h2>Digital Era Services Tailored for Your Success</h2>
            <p>Discover comprehensive solutions spanning from Web Development to Advanced AI Technologies and Security Services.</p>
            <ContactInfo />
          </>
        )}
      </header>
    </div>
  );
}

export default App;
