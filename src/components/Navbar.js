import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <i className="fas fa-landmark"></i>
        <h1 className="heading">Bank Of React</h1>
        <Link className="accountLink link" to="/">
          Account
        </Link>
        <Link className="debitLink link" to="/Debit">
          Debit
        </Link>
        <Link className="creditLink link" to="/Credit">
          Credit
        </Link>
        <Link className="aboutLink link" to="/login">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
