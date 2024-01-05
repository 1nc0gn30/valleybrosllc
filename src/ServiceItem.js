import React, { useState } from 'react';

const ServiceItem = ({ serviceName, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <li>
      <button onClick={toggle}>{serviceName}</button>
      {isOpen && <p>{description}</p>}
    </li>
  );
};

export default ServiceItem;
