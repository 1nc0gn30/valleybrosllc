import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS styles
import logo from './vblogo.png';
import './App.css';
import ServicesList from './ServicesList';
import ContactForm from './ContactForm'; 

const ContactInfo = () => (
  <div className='contact-info' data-aos="fade-right">
    <a href='tel:+17578396554' className='phone-number'>Call Us: +1 757 839 6554</a>
    <a href='mailto:valleybrosllc@gmail.com' className='email-address'>Email: valleybrosllc@gmail.com</a>
  </div>
);

const ServiceButton = ({ onClick }) => (
  <button className='button1' onClick={onClick} data-aos="zoom-in">Services</button>
);

const Logo = () => (
  <img src={logo} className="App-logo" alt="Valley Bros LLC Logo" data-aos="flip-left" />
);

const Titles = () => (
  <>
    <p className='title1' data-aos="fade-up">Valley Bros LLC</p>
    <p className='title2' data-aos="fade-down">Digital Era Businesses</p>
  </>
);


  function App() {
    const [showServices, setShowServices] = useState(false);
    const [showContactForm, setShowContactForm] = useState(false); // State to toggle Contact Form
  
    useEffect(() => {
      AOS.init();
    }, []);
  
    return (
      <div className="App">
        <header className="App-header">
          {showServices ? (
            <ServicesList onBack={() => setShowServices(false)} />
          ) : showContactForm ? (
            <ContactForm onBack={() => setShowContactForm(false)} />
          ) : (
            <>
              
              <div className="container1">
                <div className="logo1" >
                <Logo />
                </div>
                <ServiceButton onClick={() => setShowServices(true)} />
                <button className='button1' onClick={() => setShowContactForm(true)} data-aos="zoom-in">Contact Us</button>
              </div>
              <Titles />
              <ContactInfo />
            </>
          )}
        </header>
      </div>
    );
  }
  
  export default App;
  