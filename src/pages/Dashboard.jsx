import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem('user'));

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
      </div>
    </div>
  );
};

export default Dashboard;