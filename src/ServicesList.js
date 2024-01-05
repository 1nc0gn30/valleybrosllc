import React from 'react';
import ServiceItem from './ServiceItem';
import './ServicesList.css';

function ServicesList({ onBack }) {
  const services = [
    { name: "Web Development", desc: "Building and maintaining websites." },
    { name: "SEO Optimization", desc: "Improving website visibility in search engines." },
    { name: "Cyber Security", desc: "Protecting systems and networks from digital attacks." },
    { name: "Digital Marketing", desc: "Promoting products or brands via electronic media." },
    { name: "Cloud Services", desc: "Providing various computing services over the internet." },
    { name: "Mobile App Development", desc: "Creating software applications for mobile devices." },
    { name: "Data Analytics", desc: "Analyzing raw data to find trends and answer questions." },
    { name: "Machine Learning Solutions", desc: "Implementing algorithms that improve automatically through experience." },
    { name: "Artificial Intelligence Consulting", desc: "Providing expert advice on AI strategy and implementation." },
    { name: "Blockchain Development", desc: "Developing decentralized, distributed ledger technology solutions." },
    { name: "IoT Solutions", desc: "Creating interconnected devices that collect and exchange data." },
    { name: "Augmented Reality Services", desc: "Developing applications that integrate digital information with the user's environment." },
    { name: "Virtual Reality Development", desc: "Creating immersive digital environments." },
    { name: "UX/UI Design", desc: "Designing user interfaces for software and machines." },
    { name: "E-commerce Solutions", desc: "Developing online platforms for buying and selling goods or services." },
    { name: "Content Management Systems", desc: "Creating and managing digital content." },
    { name: "Web Hosting Services", desc: "Providing services for hosting websites." },
    { name: "Domain Registration", desc: "Registering domain names for websites." },
    { name: "Email Marketing Services", desc: "Sending marketing messages via email." },
    { name: "Social Media Management", desc: "Managing social media platforms for businesses and individuals." },
    { name: "Pay-Per-Click Advertising", desc: "Internet marketing model used to direct traffic to websites." },
    { name: "Graphic Design Services", desc: "Creating visual content to communicate messages." },
    { name: "Video Production", desc: "Creating video content." },
    { name: "Podcasting Services", desc: "Producing and distributing audio or video episodes." },
    { name: "Web Analytics", desc: "Measuring, collecting, analyzing, and reporting web data." },
    { name: "IT Consulting", desc: "Advising businesses on how to best use IT practices." },
    { name: "Technical Support Services", desc: "Providing assistance with technology products." },
    { name: "Database Management", desc: "Using software to manage data and database systems." },
    { name: "Cloud Storage Solutions", desc: "Storing data on remote servers accessible from the internet." },
    { name: "Network Security", desc: "Protecting networking infrastructure from unauthorized access, misuse, or theft." },
    { name: "Pentesting Services", desc: "Testing computer systems, networks, or web applications to find vulnerabilities." },
    { name: "Encryption Solutions", desc: "Protecting sensitive data by converting it into encoded format." },
    { name: "Firewall Management", desc: "Managing the barrier that keeps unauthorized access out of a private network." },
    { name: "Incident Response", desc: "Responding to and managing the aftermath of a security breach or cyberattack." },
    { name: "Risk Assessment", desc: "Identifying, analyzing, and prioritizing risks to minimize, monitor, and control the probability of unfortunate events." },
    { name: "Data Recovery Services", desc: "Retrieving lost, inaccessible, corrupted, damaged, or formatted data." },
    { name: "Business Intelligence Solutions", desc: "Using tools and systems to analyze business information." },
    { name: "Custom Software Development", desc: "Creating, deploying, and maintaining software for a specific set of users, functions, or organizations." },
    { name: "API Development and Integration", desc: "Creating and integrating Application Programming Interfaces." },
    { name: "CRM Solutions", desc: "Managing a company's relationships and interactions with potential customers." },
    { name: "ERP Systems", desc: "Software that manages business processes, typically a suite of integrated applications." },
    { name: "Automated Testing Services", desc: "Using software tools to execute pre-scripted tests on a software application before it is released into production." },
    { name: "Project Management Solutions", desc: "Tools and techniques for planning, organizing, and managing resources to achieve specific goals." },
    { name: "Virtual Assistant Services", desc: "Providing administrative services to clients remotely." },
    { name: "Security Camera Installation", desc: "Setting up surveillance cameras for security." },
    { name: "Audio Surveillance Solutions", desc: "Implementing audio recording systems for monitoring." },
    { name: "Access Control Systems", desc: "Systems that manage access to resources in a physical or digital environment." },
    { name: "Smart Home Automation", desc: "Automating the control of household features, activities, and appliances." },
    { name: "Vehicle Tracking Systems", desc: "Using GPS technology for monitoring and managing vehicle fleets." },
    { name: "Drone Surveillance Services", desc: "Using drones for monitoring and surveillance purposes." },
    { name: "Remote Monitoring Solutions", desc: "Monitoring of systems or environments from a remote location." },
    // ... add more services if needed
  ];

  return (
    <div className='div1'>
      <ul>
        {services.map((service, index) => (
          <ServiceItem key={index} serviceName={service.name} description={service.desc} />
        ))}
      </ul>
      <button onClick={onBack}>Back</button>
    </div>
  );
}

export default ServicesList;
