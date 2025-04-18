import React from "react";
import "./Navbar.css";
import logo from "./assets/images.jpeg";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo"  >
        <img className="img"  src={logo} alt="" />  WeatherApp</div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/">Forecast</a></li>
        <li><a href="/">About</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;