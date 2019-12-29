import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.scss";

const Navbar = props => {
  return (
    <div className="nav-bar">
      <div className="link-container">
        {/* <Link className="nav-link" to={props.token ? "/home" : "/login"}>
        Home
        </Link>
        <Link className="nav-link" to={props.token ? "/myTours" : "/login"}>
          My Tours
        </Link> */}
        <Link className="nav-link" to="/register">
          Register
        </Link>
        <Link className="nav-link" to="/login">
          Log In
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
