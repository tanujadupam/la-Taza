import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./Credentials.css";

const Credentials = ({ formData, setFormData }) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!formData.credentials.username || !formData.credentials.password || !formData.credentials.confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }
    if (formData.credentials.password !== formData.credentials.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    setError("");
    alert("Form Submitted Successfully!");
  };

  return (
    <div className="form-container">
      <div className="form-box">
        <h2 className="form-title">Credentials</h2>

        {error && <p className="error-message">{error}</p>}

        <div className="input-group">
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter Username"
            value={formData.credentials.username}
            onChange={(e) =>
              setFormData({ ...formData, credentials: { ...formData.credentials, username: e.target.value } })
            }
          />
        </div>

        <div className="input-group password-container">
          <label>Password</label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"
            value={formData.credentials.password}
            onChange={(e) =>
              setFormData({ ...formData, credentials: { ...formData.credentials, password: e.target.value } })
            }
          />
          <div className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </div>
        </div>

        <div className="input-group password-container">
          <label>Confirm Password</label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Confirm Password"
            value={formData.credentials.confirmPassword}
            onChange={(e) =>
              setFormData({ ...formData, credentials: { ...formData.credentials, confirmPassword: e.target.value } })
            }
          />
        </div>

        <div className="button-group">
          <button className="prev-btn" onClick={() => navigate("/address-details")}>
            Previous
          </button>
          <button className="submit-btn" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Credentials;
