import React, { Component, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { CartContext } from "../context/cartContext";
import "../css/Header-style.css";

function Header(props) {
  const { cart } = useContext(CartContext);

  const location = useLocation();
  return (
    <div className="header-block">
      <h1 className="logo">E-MART</h1>
      <div className="topnav">
        <Link to="/" className="active">
          HOME
        </Link>
        <Link to="/productPage" className="active">
          PRODUCTS
        </Link>

        <Link to="/about" className="active">
          ABOUT US
        </Link>

        <Link to="/contact" className="active">
          CONTACT US
        </Link>
      </div>
      <div className="navbuy">
        <Link to="/login">
          <button className="login-btn">Login</button>
        </Link>
        <button className="login-btn">Register</button>
        <Link to="/Cart">
          <button className="login-btn">Cart ({cart.length})</button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
