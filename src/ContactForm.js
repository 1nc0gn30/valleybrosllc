import React, { useState } from 'react';
import './ContactForm.css';

function ContactForm({ onBack }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const mailtoLink = `mailto:valleybrosllc@gmail.com?subject=Contact Form Submission&body=Name: ${name}%0DEmail: ${email}%0DMessage: ${message}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="ContactSection">
      <h2>Contact Us</h2>
      <h3>Please leave a short message</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Message:</label>
          <textarea name="message" value={formData.message} onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
      <button onClick={onBack}>Back</button>
    </div>
  );
}

export default ContactForm;
