import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    username: '',
    password: '',
  });

  const [step, setStep] = useState(0);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const nextStep = () => {
    if (step === 0) {
      if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
        setMessage('Please fill in all personal details.');
        return;
      }
    } else if (step === 1) {
      if (!formData.address || !formData.city || !formData.state || !formData.zip) {
        setMessage('Please fill in all address details.');
        return;
      }
    }
    setMessage('');
    setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setMessage('');
    setStep((prev) => prev - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/users', formData);
      if (response.status === 201) {
        setMessage('Signup successful! Redirecting to sign-in page...');
        setTimeout(() => {
          navigate('/signin');
        }, 2000); // Redirect after 2 seconds
      } else {
        setMessage('Failed to signup.');
      }
    } catch (error) {
      console.error('Error during signup:', error);
      setMessage('Error occurred. Check server connection.');
    }
  };

  return (
    <div className="signup-container">
      <h1>Signup Form</h1>

      {step === 0 && (
        <div>
          <h2>Personal Details</h2>
          <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
          <br />
          <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
          <br />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <br />
          <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
          <br />
          <button onClick={nextStep}>Next</button>
        </div>
      )}

      {step === 1 && (
        <div>
          <h2>Address Details</h2>
          <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
          <br />
          <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} required />
          <br />
          <input type="text" name="state" placeholder="State" value={formData.state} onChange={handleChange} required />
          <br />
          <input type="text" name="zip" placeholder="Zip Code" value={formData.zip} onChange={handleChange} required />
          <br />
          <button onClick={prevStep}>Back</button>
          <button onClick={nextStep}>Next</button>
        </div>
      )}

      {step === 2 && (
        <div>
          <h2>Credentials</h2>
          <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} required />
          <br />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
          <br />
          <button onClick={prevStep}>Back</button>
          <button type="submit" onClick={handleSubmit}>Signup</button>
        </div>
      )}

      {message && <p>{message}</p>}
    </div>
  );
};

export default Signup;