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
<li>Mobile App Development</li>
<li>Data Analytics</li>
<li>Machine Learning Solutions</li>
<li>Artificial Intelligence Consulting</li>
<li>Blockchain Development</li>
<li>IoT Solutions</li>
<li>Augmented Reality Services</li>
<li>Virtual Reality Development</li>
<li>UX/UI Design</li>
<li>E-commerce Solutions</li>
<li>Content Management Systems</li>
<li>Web Hosting Services</li>
<li>Domain Registration</li>
<li>Email Marketing Services</li>
<li>Social Media Management</li>
<li>Pay-Per-Click Advertising</li>
<li>Graphic Design Services</li>
<li>Video Production</li>
<li>Podcasting Services</li>
<li>Web Analytics</li>
<li>IT Consulting</li>
<li>Technical Support Services</li>
<li>Database Management</li>
<li>Cloud Storage Solutions</li>
<li>Network Security</li>
<li>Pentesting Services</li>
<li>Encryption Solutions</li>
<li>Firewall Management</li>
<li>Incident Response</li>
<li>Risk Assessment</li>
<li>Data Recovery Services</li>
<li>Business Intelligence Solutions</li>
<li>Custom Software Development</li>
<li>API Development and Integration</li>
<li>CRM Solutions</li>
<li>ERP Systems</li>
<li>Automated Testing Services</li>
<li>Project Management Solutions</li>
<li>Virtual Assistant Services</li>
<li>Security Camera Installation</li>
<li>Audio Surveillance Solutions</li>
<li>Access Control Systems</li>
<li>Smart Home Automation</li>
<li>Vehicle Tracking Systems</li>
<li>Drone Surveillance Services</li>
<li>Remote Monitoring Solutions</li>

        {/* Add more services as needed */}
      </ul>
      <button onClick={onBack}>Back</button>
      
    </div>
  );
}

export default ServicesList;
