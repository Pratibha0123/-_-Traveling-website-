import  { useState } from 'react';
import './ContactUs.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
    setFormData({ name: '', email: '', message: '' }); // Clear form
  };

  return (
    <div className="contact-wrapper">
      <h2 className="contact-heading">Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} required />
        </div>

        <button type="submit" className="submit-button">Send Message</button>
      </form>

      {showPopup && <div className="popup">Thanks for your submission!</div>}
    </div>
  );
};

export default ContactForm;
