import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import Payment from './pages/Payment';
import MyOrders from './pages/MyOrders';
import Offer from './pages/Offer';
import AboutUs from './pages/AboutUs';
import Reservation from './pages/Reservation'; // Import Reservation component
import Header from './components/Header';
import Footer from './components/Footer';

import './App.css';

const App = () => {
  const [cart, setCart] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [orders, setOrders] = useState([]);

  const FooterWrapper = () => {
    const location = useLocation();
    return location.pathname === '/' ? <Footer /> : null;
  };

  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/signin" element={<SignIn setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/menu" element={<Menu cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/payment" element={<Payment cart={cart} setCart={setCart} setOrders={setOrders} />} />
        <Route path="/myorders" element={<MyOrders orders={orders} />} />
        <Route path="/reservations" element={<Reservation />} /> {/* Add Reservation route */}
        <Route path="/offer" element={<Offer/>} /> 
      </Routes>
      <FooterWrapper />
    </Router>
  );
};

export default App;