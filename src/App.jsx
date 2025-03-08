import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PersonalDetails from "./assets/PersonalDetails";
import AddressDetails from "./assets/AddressDetails";
import Credentials from "./assets/Credentials";

const App = () => {
  const [formData, setFormData] = useState({
    personal: { name: "", email: "", phone: "", dob: "", gender: "" },
    address: { doorno: "", street: "", city: "", state: "", country: "", pin: "" },
    credentials: { username: "", password: "", confirmPassword: "" },
  });

  return (
    <Router>
      <Routes>
        <Route path="/" element={<PersonalDetails formData={formData} setFormData={setFormData} />} />
        <Route path="/address-details" element={<AddressDetails formData={formData} setFormData={setFormData} />} />
        <Route path="/credentials" element={<Credentials formData={formData} setFormData={setFormData} />} />
      </Routes>
    </Router>
  );
};

export default App;



