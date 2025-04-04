import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('user'); // Clear user data from localStorage
  };

  return (
    <header className="header">
      <h1>La Taza</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        {isLoggedIn ? (
          <>
            <Link to="/myorders">My Orders</Link>
            <Link to="/cart">
              <span className="cart-link">
                <i className="fas fa-shopping-cart"></i> Cart
              </span>
            </Link>
            <Link to="/profile">Profile</Link>
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/signin">Sign In</Link>
            <Link to="/signup">Sign Up</Link>
          </>
        )}
      </nav>
    </header>
  );
};

Header.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  setIsLoggedIn: PropTypes.func.isRequired,
};

export default Header;