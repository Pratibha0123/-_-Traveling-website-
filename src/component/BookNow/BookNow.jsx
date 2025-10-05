import { useState } from "react";
import './BookNow.css';

const BookNow = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    date: "",
    package: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking submitted successfully!");
  };

  return (
    <div className="book-now-container">
      <h2 className="book-now-heading">Book Your Experience</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid">
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              name="name"
              className="form-input"
              placeholder="Enter your name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Phone Number</label>
            <input
              type="tel"
              name="phone"
              className="form-input"
              placeholder="Enter your phone"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Date of Travel</label>
            <input
              type="date"
              name="date"
              className="form-input"
              value={form.date}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Destination</label>
          <select
            name="destination"
            className="form-select"
            value={form.destination}
            onChange={handleChange}
            required
          >
            <option value="">-- Choose --</option>
            <option value="Himalayas">Himalayas</option>
            <option value="Goa">Goa</option>
            <option value="Jaipur">Jaipur</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Package Type</label>
          <select
            name="package"
            className="form-select"
            value={form.package}
            onChange={handleChange}
            required
          >
            <option value="">-- Choose --</option>
            <option value="Adventure">Adventure</option>
            <option value="Relaxation">Relaxation</option>
            <option value="Cultural">Cultural</option>
          </select>
        </div>

        <button type="submit" className="submit-button">
          Submit Booking
        </button>
      </form>
    </div>
  );
};

export default BookNow;
