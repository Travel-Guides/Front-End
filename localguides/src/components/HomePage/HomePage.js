import React, { useState } from "react";

// SEARCH FORM Antd
import { Input } from "antd";

// STYLES
import "./HomePage.scss";

// SEARCH FORM Antd
const { Search } = Input;

const HomePage = props => {
  return (
    <div className="home-page-container">
      <div className="search-input">
        <Search
          placeholder="Enter City or Zip Code"
          onSearch={value => console.log(value)}
          enterButton
        />
      </div>
    </div>
  );
};

export default HomePage;
