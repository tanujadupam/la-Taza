import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header className="header">
    <h1>La Taza</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/signin">Sign In</Link>
      <Link to="/signup">Sign Up</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/dashboard">Dashboard</Link>
    </nav>
  </header>
);

export default Header;