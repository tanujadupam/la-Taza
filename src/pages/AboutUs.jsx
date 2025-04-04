import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About La Taza</h1>
        <p>Delivering the finest coffee experience, one cup at a time.</p>
      </header>

      <section className="about-content">
        <div className="about-image">
          <img
            src="image.png"
            alt="La Taza Coffee"
          />
        </div>
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            At La Taza, we are passionate about crafting the perfect cup of coffee. Our team is dedicated to sourcing the finest beans and delivering an unforgettable coffee experience.
          </p>
          <h2>Our Mission</h2>
          <p>
            Our mission is to bring people together over a shared love of coffee. We aim to create a welcoming space where everyone can enjoy the rich flavors and aromas of freshly brewed coffee.
          </p>
        </div>
      </section>

      <section className="about-features">
        <h2>Why Choose Us?</h2>
        <div className="features-cards">
          <div className="feature-card">
            <h3>☕ Premium Coffee</h3>
            <p>We source the finest beans from around the world.</p>
          </div>
          <div className="feature-card">
            <h3>🍰 Delicious Treats</h3>
            <p>Pair your coffee with our freshly baked pastries.</p>
          </div>
          <div className="feature-card">
            <h3>🌍 Sustainable Practices</h3>
            <p>We are committed to eco-friendly and ethical sourcing.</p>
          </div>
          <div className="feature-card">
            <h3>📅 Easy Reservations</h3>
            <p>Book a table or order online with ease.</p>
          </div>
          <div className="feature-card">
            <h3>👨‍🍳 Expert Baristas</h3>
            <p>Our skilled baristas craft every cup with care.</p>
          </div>
        </div>
      </section>

      <footer className="about-footer">
        <p>☕ Experience the magic of coffee at La Taza! 🍵</p>
      </footer>
    </div>
  );
};

export default AboutUs;