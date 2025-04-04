import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for validation
import { useNavigate } from 'react-router-dom';
import './SignIn.css';

const SignIn = ({ setIsLoggedIn }) => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/users'); // Replace with your actual API endpoint
      const users = await response.json();
      const user = users.find(
        (u) => u.username === formData.username && u.password === formData.password
      );

      if (user) {
        // Update login state and store user info
        setIsLoggedIn(true);
        localStorage.setItem('user', JSON.stringify({ username: user.username }));
        navigate('/dashboard'); // Redirect to dashboard after login
      } else {
        setError('Invalid credentials');
      }
    } catch (error) {
      console.error('Error fetching users:', error);
      setError('Server error. Please try again later.');
    }
  };

  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

// Add PropTypes validation
SignIn.propTypes = {
  setIsLoggedIn: PropTypes.func.isRequired, // Validate setIsLoggedIn as a required function
};

export default SignIn;