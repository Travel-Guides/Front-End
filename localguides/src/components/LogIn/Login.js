import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { logInGuide, logInTourist } from "../../redux/actions";

import { Form, Icon, Input, Button, Tooltip } from "antd";
import "./Login.scss";

const Login = ({ logInGuide, logInTourist, toggleLogin, token, history }) => {
  console.log(`THIS IS LOGIN Token`, token);

  const [user, setUser] = useState({ email: "", password: "" });
  const [isTourist, setIsTourist] = useState(true);

  useEffect(() => {
    if (token) {
      history.push("/home");
    }
  }, [history, token]);

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const guideHandleSubmit = e => {
    e.preventDefault();
    if (user.email && user.password) {
      logInGuide(user);
      setUser({ email: "", password: "" });
    }
  };

  const touristHandleSubmit = e => {
    e.preventDefault();
    if (user.email && user.password) {
      logInTourist(user);
      setUser({ email: "", password: "" });
    }
  };

  const handleRadio = e => {
    setIsTourist(!isTourist);
  };

  return (
    <div className="login-container">
      <div className="login-form" layout="inline">
        <div className="close-button" onClick={toggleLogin}>
          <Icon className="close-icon" type="close" />
        </div>

        <div className="radio-buttons radio-login">
          <label>
            <div>
              {isTourist ? (
                <div className="checked-radio" onClick={handleRadio}></div>
              ) : (
                <div className="radio" onClick={handleRadio}></div>
              )}
              Tourist
            </div>
          </label>
          <label>
            <div>
              {!isTourist ? (
                <div className="checked-radio" onClick={handleRadio}></div>
              ) : (
                <div className="radio" onClick={handleRadio}></div>
              )}
              Guide
            </div>
          </label>
        </div>

        <div className="login-form-container">
          <h2 style={{ marginTop: 10 }}>Login</h2>
          <Form onChange={handleChange}>
            <div>
              <Input
                type="text"
                name="email"
                placeholder="Email"
                value={user.email}
                style={{ marginBottom: 10, width: "100%", height: 40 }}
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                suffix={
                  <Tooltip title="Extra information">
                    <Icon
                      type="info-circle"
                      style={{ color: "rgba(0,0,0,.45)" }}
                    />
                  </Tooltip>
                }
              />
            </div>
            <div>
              <Input
                type="password"
                name="password"
                placeholder="Password"
                value={user.password}
                style={{ marginBottom: 10, height: 40 }}
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                suffix={
                  <Tooltip title="Extra information">
                    <Icon
                      type="info-circle"
                      style={{ color: "rgba(0,0,0,.45)" }}
                    />
                  </Tooltip>
                }
              />
            </div>
            <Button
              type="primary"
              block
              onClick={!isTourist ? guideHandleSubmit : touristHandleSubmit}
              style={{ marginBottom: 15 }}
            >
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

const WrappedHorizontalLoginForm = Form.create({ name: "horizontal_login" })(
  Login
);

const mapStateToProps = state => {
  console.log(`THIS IS STATE ON LOGIN`, state);
  return {
    token: state.token
  };
};

export default connect(mapStateToProps, {
  logInGuide: logInGuide,
  logInTourist: logInTourist
})(WrappedHorizontalLoginForm);
