import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for validation
import { useNavigate } from 'react-router-dom';

const Payment = ({ cart, setCart, setOrders }) => {
  const navigate = useNavigate();

  const handlePayment = () => {
    // Generate a unique payment ID (e.g., using a timestamp)
    const paymentId = Date.now();

    // Create a new order object with the payment ID and cart items
    const newOrder = {
      paymentId,
      date: new Date().toLocaleString(), // Add a readable date
      items: [...cart], // Store the cart items
    };

    // Add the new order to the orders state
    setOrders((prevOrders) => [...prevOrders, newOrder]);

    // Clear the cart after payment
    setCart([]);

    // Redirect to My Orders page
    navigate('/myorders');
  };

  return (
    <div className="payment-container">
      <h2>Payment</h2>
      <p>Total Items: {cart.length}</p>
      <p>
        Total Price: $
        {cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
      </p>
      <button onClick={handlePayment}>Complete Payment</button>
    </div>
  );
};

// Add PropTypes validation
Payment.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
  setCart: PropTypes.func.isRequired,
  setOrders: PropTypes.func.isRequired,
};

export default Payment;