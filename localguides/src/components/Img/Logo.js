import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Logo.scss";

const Logo = () => {
  return (
    <div className="logo-container">
      <img src={require("./Logo.png")} />
    </div>
  );
};

export default Logo;
