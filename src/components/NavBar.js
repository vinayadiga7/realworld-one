import React from "react";
import { Link } from "react-router-dom";
import companyLogo from "../images/image001.png";

const NavBar = () => {
  return (
    <nav className="navbar ">
      <figure className="navbar__item image-logo">
        <img src={companyLogo} alt="companyLogo" />
      </figure>

      <Link className="navbar__item" to="/">
        Home
      </Link>
      <Link className="navbar__item" to="/list">
        List
      </Link>
      <Link className="navbar__item" to="/performance">
        Performance
      </Link>
    </nav>
  );
};

export default NavBar;
