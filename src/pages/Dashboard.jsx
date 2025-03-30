import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  // Sample menu items
  const menuItems = [
    { id: 1, name: 'Tea', price: 2.5 },
    { id: 2, name: 'Coffee', price: 3.0 },
    { id: 3, name: 'Cappuccino', price: 3.5 },
    { id: 4, name: 'Latte', price: 4.0 },
  ];

  // State to manage cart
  const [cart, setCart] = useState([]);

  // Function to add item to cart
  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div className="container">
      <div className="sidebar">
        <h2 className="logo">LA_TAZA Dashboard</h2>
        <ul className="navList">
          <li className="navItem">Orders</li>
          <li className="navItem">Reservations</li>
          <li className="navItem">Customers</li>
          <li className="navItem">Menu</li>
        </ul>
      </div>

      <div className="mainContent">
        <h2 className="dashboardTitle">Welcome to LA TAZA, {user?.username}!</h2>
        <p>Manage reservations, orders, and customers efficiently.</p>
        <Link to="/profile" className="dashboard-link">Go to Profile</Link>

        {/* Menu Section */}
        <h3 className="menuTitle">Menu</h3>
        <div className="menu">
          {menuItems.map((item) => (
            <div key={item.id} className="menuItem">
              <h4>{item.name}</h4>
              <p>${item.price.toFixed(2)}</p>
              <button onClick={() => addToCart(item)}>Add to Cart</button>
            </div>
          ))}
        </div>

        {/* Cart Section */}
        <h3 className="cartTitle">Your Cart</h3>
        <div className="cart">
          {cart.length === 0 ? (
            <p>No items in cart.</p>
          ) : (
            <ul>
              {cart.map((item, index) => (
                <li key={index}>{item.name} - ${item.price.toFixed(2)}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
