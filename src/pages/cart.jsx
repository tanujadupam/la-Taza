import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import './Cart.css'; // Import Cart.css for styling

const Cart = ({ cart, setCart }) => {
  const navigate = useNavigate();

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  const increaseQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };

  const decreaseQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updatedCart);
  };

  return (
    <div className="cart-container">
      <div className="cart-header">
        <i className="fas fa-shopping-cart cart-icon"></i> {/* Add cart icon */}
        <h2>Your Cart</h2>
      </div>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              <div className="cart-item-details">
                <h4>{item.name}</h4>
                <p>Price: ${item.price.toFixed(2)}</p>
                <div className="quantity-controls">
                  <button onClick={() => decreaseQuantity(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item.id)}>+</button>
                </div>
              </div>
              <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      <div className="cart-actions">
        <button className="back-to-menu-btn" onClick={() => navigate('/menu')}>
          Back to Menu
        </button>
        {cart.length > 0 && (
          <button className="proceed-to-payment-btn" onClick={() => navigate('/payment')}>
            Proceed to Payment
          </button>
        )}
      </div>
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
  setCart: PropTypes.func.isRequired,
};

export default Cart;