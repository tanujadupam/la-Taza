import React, { useState } from 'react';
import './BookTable.css';

const BookTable = () => {
  const [formData, setFormData] = useState({ name: '', email: '', date: '', time: '', guests: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Table booked:', formData);
  };

  return (
    <section className="book-table">
      <h2>Book a Table</h2>
      <form onSubmit={handleSubmit} className="book-table-form">
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        <input type="time" value={formData.time} onChange={handleChange} required />
        <input type="number" name="guests" placeholder="Guests" value={formData.guests} onChange={handleChange} required />
        <button type="submit">Book Now</button>
      </form>
    </section>
  );
};

export default BookTable;
