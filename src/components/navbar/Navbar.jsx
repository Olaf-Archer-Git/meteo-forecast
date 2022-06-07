import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="section">
      <NavLink className="section-link" to="/next">
        <div className="section-item">Next Day Forecast</div>
      </NavLink>
      <NavLink className="section-link" to="/few">
        <div className="section-item">Four Days Forecast</div>
      </NavLink>
      <NavLink className="section-link section-link-active" to="/maps">
        <div className="section-item">Precipitation&apos;s Map</div>
      </NavLink>
      <NavLink className="section-link" to="/about">
        <div className="section-item">About</div>
      </NavLink>
    </div>
  );
};

export default Navbar;
