import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PersonalDetails.css";

const PersonalDetails = ({ formData, setFormData }) => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleNext = () => {
    if (!formData.personal.name || !formData.personal.email || !formData.personal.phone || !formData.personal.dob || !formData.personal.gender) {
      setError("Please fill in all fields.");
      return;
    }
    setError("");
    navigate("/address-details");
  };

  return (
    <div className="form-container">
      <div className="form-box">
        <h2 className="form-title">Personal Details</h2>

        {error && <p className="error-message">{error}</p>}

        <div className="input-group">
          <label>Name</label>
          <input
            type="text"
            value={formData.personal.name}
            onChange={(e) =>
              setFormData({ ...formData, personal: { ...formData.personal, name: e.target.value } })
            }
          />
        </div>

        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            value={formData.personal.email}
            onChange={(e) =>
              setFormData({ ...formData, personal: { ...formData.personal, email: e.target.value } })
            }
          />
        </div>

        <div className="input-group">
          <label>Phone</label>
          <input
            type="tel"
            value={formData.personal.phone}
            onChange={(e) =>
              setFormData({ ...formData, personal: { ...formData.personal, phone: e.target.value } })
            }
          />
        </div>

        <div className="input-group">
          <label>Date of Birth</label>
          <input
            type="date"
            value={formData.personal.dob}
            onChange={(e) =>
              setFormData({ ...formData, personal: { ...formData.personal, dob: e.target.value } })
            }
          />
        </div>

        <div className="input-group">
          <label>Gender</label>
          <select
            value={formData.personal.gender}
            onChange={(e) =>
              setFormData({ ...formData, personal: { ...formData.personal, gender: e.target.value } })
            }
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <div className="button-group">
          <button className="next-btn" onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
