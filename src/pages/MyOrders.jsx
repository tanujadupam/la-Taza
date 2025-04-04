import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for validation
import './MyOrders.css';

const MyOrders = ({ orders }) => {
  return (
    <div className="myorders-container">
      <h2>My Orders</h2>
      {orders && orders.length === 0 ? (
        <p>You have no completed orders.</p>
      ) : (
        orders.map((order) => (
          <div key={order.paymentId} className="order-group">
            <h3>Order Date: {order.date}</h3>
            <ul className="orders-list">
              {order.items.map((item, index) => (
                <li key={index} className="order-item">
                  <img src={item.image} alt={item.name} className="order-image" />
                  <div>
                    <h4>{item.name}</h4>
                    <p>Price: ${item.price.toFixed(2)}</p>
                    <p>Quantity: {item.quantity}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
};

// Add PropTypes validation
MyOrders.propTypes = {
  orders: PropTypes.arrayOf(
    PropTypes.shape({
      paymentId: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
          price: PropTypes.number.isRequired,
          quantity: PropTypes.number.isRequired,
          image: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
};

export default MyOrders;