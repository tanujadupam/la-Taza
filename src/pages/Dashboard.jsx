import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'; // Import CSS

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className="dashboard-container">
      <h1>Welcome, {user?.username}!</h1>
      <Link to="/profile" className="dashboard-link">Go to Profile</Link>
    </div>
  );
};

export default Dashboard;
