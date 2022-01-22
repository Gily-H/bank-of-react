import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <i className="fas fa-landmark"></i>
        <h1>Bank Of React</h1>
      </div>
      <ul className="nav-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Accounts</a>
        </li>
        <li>
          <a href="#">Debit</a>
        </li>
        <li>
          <a href="#">Credit</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
