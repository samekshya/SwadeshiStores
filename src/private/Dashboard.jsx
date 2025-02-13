import React from "react";
import { FiShoppingCart, FiHeart, FiUser, FiSearch } from "react-icons/fi";
import "../style/Dashboard.css"; 
import logo from "../pictures/logo.png"; 

const Dashboard = () => {
  return (
    <div>
      <div className="logo">
        <img src={logo} alt="Swadesi Stores" className="logo-img" />
      </div>
      <div className="top-nav">
        <div className="search-bar">
          <input type="text" placeholder="Search products..." />
          <button><FiSearch /></button>
        </div>

          {/* ✅ Navigation Components */}
          <div className="nav-icons">
          <div className="nav-item">
            <FiHeart className="nav-icon" />
            <span>Wishlist</span>
          </div>
          <div className="nav-item cart">
            <FiShoppingCart className="nav-icon" />
            <span>My Cart</span>
          </div>
          <div className="nav-item">
            <FiUser className="nav-icon" />
            <span>Account</span>
          </div>
        </div>
      </div>
            {/* ✅ Secondary Navigation Bar (Below the Top Nav) */}
            <div className="second-nav">
        <ul>
          {/* Dropdown Menu for Shop by Category */}
          <li className="dropdown">
            <button className="dropdown-btn">Shop by Category ▼</button>
            <ul className="dropdown-menu">
              <li><a href="#">Clothing</a></li>
              <li><a href="#">Food</a></li>
              <li><a href="#">Accessories</a></li>
            </ul>
          </li>

          {/* Other Navigation Links */}
          <li><a href="#">About Us</a></li>
          <li><a href="#">Shipping</a></li>
          <li><a href="#">Mode of Payment</a></li>
          <li><a href="#">Terms and Conditions</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>


      <div className="dashboard-content">
        <h1>Welcome to Swadesi Stores</h1>
        <p>Browse your favorite Nepali handicrafts</p>
      </div>
    </div>
  );
};

export default Dashboard;
