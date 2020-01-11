import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Form, Icon, Input, Button } from "antd";

import "./Login.scss";

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

const Login = props => {
  console.log(`THIS IS LOGIN PROPS`, props);
  const [user, setUser] = useState({ email: "", password: "" });

  // useEffect(() => {
  //   if (token) {
  //     history.push("/trips");
  //   }
  // }, [history, token]);

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   props.form.validateFields((err, values) => {
  //     if (user.email && user.password) {
  //       console.log("Received values of form: ", values);
  //       setUser({ email: "", password: "" });
  //     }
  //   });
  // };

  // Login on form submit
  const login = e => {
    e.preventDefault();

    props.form.validateFields(user).then(() => {
      props.toggleLogin(null);
      props.setIsLoggedIn(true);
    });
  };

  const {
    getFieldDecorator,
    getFieldsError,
    getFieldError,
    isFieldTouched
  } = props.form;

  const usernameError = isFieldTouched("username") && getFieldError("username");
  const passwordError = isFieldTouched("password") && getFieldError("password");

  return (
    <div class="login-container">
      <Form className="login-form" layout="inline" onSubmit={login}>
        <div className="close-button" onClick={props.toggleLogin}>
          <Icon className="close-icon" type="close" />
        </div>
        <div className="login-form-container">
          <h2>Log In</h2>

          <Form.Item
            validateStatus={usernameError ? "error" : ""}
            help={usernameError || ""}
          >
            {getFieldDecorator("email", {
              rules: [{ required: true, message: "Please input your email!" }]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="email"
              />
            )}
          </Form.Item>
          <Form.Item
            validateStatus={passwordError ? "error" : ""}
            help={passwordError || ""}
          >
            {getFieldDecorator("password", {
              rules: [
                { required: true, message: "Please input your Password!" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="Password"
              />
            )}
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              disabled={hasErrors(getFieldsError())}
            >
              Log In
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(`THIS IS STATE ON LOGIN`, state);
  return {
    token: state.token
  };
};

const WrappedHorizontalLoginForm = Form.create({ name: "horizontal_login" })(
  Login
);

export default connect(mapStateToProps, {})(WrappedHorizontalLoginForm);
