import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CafeLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    // Fetch stored user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser && email === storedUser.email && password === storedUser.password) {
      localStorage.setItem("isAuthenticated", "true"); // Store login status
      navigate("/dashboard"); // Redirect to Dashboard
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h2 style={styles.title}>LA TAZA</h2>
        {error && <p style={styles.errorMessage}>{error}</p>}
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          style={styles.input} 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          style={styles.input} 
        />
        <button style={styles.button} onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100vw",
    backgroundColor: "#8b5e3b",
  },
  box: {
    background: "white",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    width: "350px",
  },
  title: {
    fontSize: "24px",
    marginBottom: "15px",
    color: "#8b4513",
  },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "16px",
  },
  button: {
    width: "100%",
    padding: "12px",
    background: "#8b4513",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
  errorMessage: {
    color: "red",
    fontSize: "14px",
    marginBottom: "10px",
  },
};

export default CafeLogin;
