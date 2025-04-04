import React from 'react';
import './landingpage.css';
import BookTable from '../components/BookTable'; // Import the BookTable component

function LandingPage() {
  const scrollToFeatures = () => {
    document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="LandingPage">
      <header className="main-header">
        <div className="background-image"></div>
        <div className="header-content">
          <h1>A Smart Way to Manage Your Cafe Business</h1>
          <p>
            Streamline your operations, enhance customer experience, and grow your cafe with our
            smart management tools.
          </p>
          <button className="explore-features-btn" onClick={scrollToFeatures}>
            Explore Features
          </button>
        </div>
      </header>
      <main>
        <Features />
        <BookTable /> {/* Add the BookTable component */}
      </main>
    </div>
  );
}

function Features() {
  return (
    <section id="features">
      <h2>Our Features</h2>
      <div className="feature-container">
        <div className="feature-item">
          <img
            src="https://th.bing.com/th/id/OIP.70IGS5x1d1KjclkZwscIywHaFj?w=235&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt="Feature 1 Logo"
            className="feature-logo"
          />
          <h3>Reservation Management</h3>
          <p>Efficiently manage table bookings and reservations to enhance the dining experience.</p>
        </div>
        <div className="feature-item">
          <img
            src="https://th.bing.com/th/id/OIP.fRrpJbxQt94ZUXiNrWtMRAHaH-?w=172&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt="Feature 2 Logo"
            className="feature-logo"
          />
          <h3>Customizable Orders</h3>
          <p>Allow customers to personalize their orders with special instructions and preferences.</p>
        </div>
        <div className="feature-item">
          <img
            src="https://img.freepik.com/premium-vector/man-with-menu-making-order-waiter-restaurant_51635-7956.jpg?w=2000"
            alt="Feature 3 Logo"
            className="feature-logo"
          />
          <h3>Order Management</h3>
          <p>
            Streamline the process of accepting, tracking, and fulfilling dine-in, takeaway, and
            delivery orders in real-time.
          </p>
        </div>
      </div>
    </section>
  );
}

export default LandingPage;