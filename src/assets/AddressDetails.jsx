import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddressDetails.css";

const AddressDetails = ({ formData, setFormData }) => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleNext = () => {
    if (!formData.address.doorno || !formData.address.street) {
      setError("Please fill in all fields.");
      return;
    }
    setError("");
    navigate("/credentials");
  };

  return (
    <div className="form-container">
      <div className="form-box">
        <h2 className="form-title">Address Details</h2>

        {error && <p className="error-message">{error}</p>}

        <div className="input-group">
          <label>Door No</label>
          <input
            type="text"
            placeholder="Enter Door No"
            value={formData.address.doorno}
            onChange={(e) =>
              setFormData({ ...formData, address: { ...formData.address, doorno: e.target.value } })
            }
          />
        </div>

        <div className="input-group">
          <label>Street</label>
          <input
            type="text"
            placeholder="Enter Street Name"
            value={formData.address.street}
            onChange={(e) =>
              setFormData({ ...formData, address: { ...formData.address, street: e.target.value } })
            }
          />
        </div>

        <div className="button-group">
          <button className="prev-btn" onClick={() => navigate("/")}>
            Previous
          </button>
          <button className="next-btn" onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddressDetails;
