import React from 'react';
<<<<<<< HEAD
import './Dashboard.css';

const Dashboard = () => {
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
        <h2 className="dashboardTitle">Welcome to LA TAZA</h2>
        <p>Manage reservations, orders, and customers efficiently.</p>
      </div>
=======
import { Link } from 'react-router-dom';
import './Dashboard.css'; // Import CSS

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className="dashboard-container">
      <h1>Welcome, {user?.username}!</h1>
      <Link to="/profile" className="dashboard-link">Go to Profile</Link>
>>>>>>> abd8dee31542bbbbd873954ce7c924a0b7329b87
    </div>
  );
};

<<<<<<< HEAD
export default Dashboard;
=======
export default Dashboard;
>>>>>>> abd8dee31542bbbbd873954ce7c924a0b7329b87
