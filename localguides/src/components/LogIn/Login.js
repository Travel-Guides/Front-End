import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Form, Icon, Input, Button } from "antd";

import "./Login.scss";

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

const Login = props => {
  const [user, setUser] = useState({ email: "", password: "" });

  // useEffect(() => {
  //   if (token) {
  //     history.push("/trips");
  //   }
  // }, [history, token]);

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (user.email && user.password) {
        console.log("Received values of form: ", values);
        setUser({ email: "", password: "" });
      }
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
    <div class="g-login-container">
      <Form className="g-login-form" layout="inline" onSubmit={handleSubmit}>
        <Form.Item
          validateStatus={usernameError ? "error" : ""}
          help={usernameError || ""}
        >
          {getFieldDecorator("username", {
            rules: [{ required: true, message: "Please input your username!" }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Username"
            />
          )}
        </Form.Item>
        <Form.Item
          validateStatus={passwordError ? "error" : ""}
          help={passwordError || ""}
        >
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Please input your Password!" }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
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
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    token: state.token
  };
};

const WrappedHorizontalLoginForm = Form.create({ name: "horizontal_login" })(
  Login
);

export default connect(mapStateToProps, {})(WrappedHorizontalLoginForm);
