import React, { useState } from 'react';
import './Reservation.css';

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    guests: 1,
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [reservationDetails, setReservationDetails] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleConfirm = () => {
    // Save the reservation details
    setReservationDetails(formData);
    setSuccessMessage('Your table has been successfully reserved!');
  };

  const handleCancel = () => {
    // Reset the form and clear reservation details
    setFormData({ name: '', date: '', time: '', guests: 1 });
    setReservationDetails(null);
    setSuccessMessage('');
  };

  return (
    <div className="reservation-container">
      <h2>Reserve a Table</h2>
      {successMessage && <p className="success-message">{successMessage}</p>}
      {!reservationDetails ? (
        <form>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Date:
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Time:
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Number of Guests:
            <input
              type="number"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              min="1"
              required
            />
          </label>
          <div className="reservation-buttons">
            <button type="button" className="cancel-btn" onClick={handleCancel}>
              Cancel
            </button>
            <button type="button" className="confirm-btn" onClick={handleConfirm}>
              Confirm
            </button>
          </div>
        </form>
      ) : (
        <div className="reservation-details">
          <h3>Reservation Details</h3>
          <p><strong>Name:</strong> {reservationDetails.name}</p>
          <p><strong>Date:</strong> {reservationDetails.date}</p>
          <p><strong>Time:</strong> {reservationDetails.time}</p>
          <p><strong>Guests:</strong> {reservationDetails.guests}</p>
          <button className="cancel-btn" onClick={handleCancel}>
            Cancel Reservation
          </button>
        </div>
      )}
    </div>
  );
};

export default Reservation;