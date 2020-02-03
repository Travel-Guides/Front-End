import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { logOut } from "../../redux/actions";

import "./Navbar.scss";

const Navbar = props => {
  console.log(`THIS IS TOKEN`, props.token);
  let [token, setToken] = useState(props.token);

  useEffect(() => {
    setToken(props.token);
  }, [props.token]);
  console.log(`THIS IS NAVBAR PROPS`, props);

  return (
    <div className="nav-bar">
      <div className="link-container">
        <Link className="nav-link" to={props.token ? "/home" : "/"}>
          Home
        </Link>
        {!token && (
          <Link className="nav-link" to="/register">
            Register
          </Link>
        )}
        {!token && (
          <Link
            className="nav-link"
            onClick={props.toggleLogin}
            className="nav-link"
            to="/login"
          >
            Log In
          </Link>
        )}
        {token && (
          <Link className="nav-link" to="/" onClick={props.logOut}>
            Sign Out
          </Link>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(`THIS IS NAVBAR TOKEN`, state.token);
  return {
    token: state.token
  };
};

export default connect(mapStateToProps, { logOut: logOut })(Navbar);
