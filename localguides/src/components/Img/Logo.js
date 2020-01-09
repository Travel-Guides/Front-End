import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Logo.scss";

const Logo = () => {
  return (
    <div className="logo-container">
      <Link to="/">
        <img src={require("./Logo.png")} />
      </Link>
    </div>
  );
};

export default Logo;
