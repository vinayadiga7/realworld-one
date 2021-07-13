import React from "react";
import { Link } from "react-router-dom";
import companyLogo from "../images/image001.png";

const NavBar = () => {
  return (
    <div className="navbar-mobile">
      <input
        id="menu-checkbox"
        className="menu menu__checkbox"
        type="checkbox"
      />
      <label htmlFor="menu-checkbox" className="menu menu__icon">
        <i className="fas fa-bars"></i>
      </label>

      <nav className="navbar">
        <figure>
          <img src={companyLogo} alt="companyLogo" />
        </figure>
        <div className="navbar__menu">
          <Link className="navbar__item" to="/">
            Home
          </Link>
          <Link className="navbar__item" to="/list">
            List
          </Link>
          <Link className="navbar__item" to="/performance">
            Performance
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
