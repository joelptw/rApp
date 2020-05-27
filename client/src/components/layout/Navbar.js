import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar bg-dark">
      {/*
      <h1>
        <Link to="/dashboard">
          {" "}
          <i className="fas fa-code"></i>Devconnector{" "}
        </Link>
      </h1>
      */}

      <h1>
        <Link to="/">
          <i className="fas fa-code"></i>Devconnector
        </Link>
      </h1>
      <ul>
        <li>
          <a href="profiles.html"> Developers </a>
        </li>
        <li>
          <Link to="/register"> Registro </Link>
        </li>
        <li>
          <Link to="/login"> Login </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
