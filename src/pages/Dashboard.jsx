import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    if (!user) {
      navigate('/signin'); // Redirect to sign-in if user is not logged in
    }
  }, [user, navigate]);

  return (
    <div className="container">
      <div className="sidebar">
        <h2 className="logo">LA_TAZA Dashboard</h2>
        <ul className="navList">
          <li className="navItem">Offers</li>
          <li className="navItem">
            <Link to="/reservations">Reservations</Link> {/* Link to Reservations */}
          </li>
          <li className="navItem">Reviews</li>
          <li className="navItem">
            <Link to="/menu">Menu</Link>
          </li>
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