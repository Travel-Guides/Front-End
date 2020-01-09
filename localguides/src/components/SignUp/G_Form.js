import React, { useState, useEffect } from "react";
// REDUX
import { connect } from "react-redux";
// Antd
import { Form, Input, Button } from "antd";

import "./G_Form.scss";

const G_Form = props => {
  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        props.addUser(values);
        props.form.setFieldsValue({ username: "", password: "" });
        // props.history.push(`/login/${values.username}`);
      }
    });
  };

  const [isTourist, setIsTourist] = useState(true);

  const [confirmation, setConfirmation] = useState(false);

  // const register = e => {
  //   e.preventDefault();

  //   let creds = {
  //     email: credentials.email,
  //     username: credentials.username,
  //     password: credentials.password
  //   };

  //   props.register(creds, isTourist);
  //   setConfirmation(true);
  // };

  const toggleConfirm = () => {
    setConfirmation(!confirmation);
  };

  const handleRadio = e => {
    setIsTourist(!isTourist);
  };

  const { getFieldDecorator } = props.form;

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 }
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 }
    }
  };

  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0
      },
      sm: {
        span: 16,
        offset: 8
      }
    }
  };
  return (
    <div className="sign-up-container">
      <Form {...formItemLayout} onSubmit={handleSubmit}>
        <h2 className="sign-up">Are you a...</h2>

        <div className="radio-buttons">
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

        <Form.Item label="First Name">
          {getFieldDecorator("firstName", {
            rules: [
              {
                required: true,
                message: "Please enter your first name!"
              }
            ]
          })(<Input name="firstName" />)}
        </Form.Item>

        <Form.Item label="Last Name">
          {getFieldDecorator("lastName", {
            rules: [
              {
                required: true,
                message: "Please input a lastName!"
              }
            ]
          })(<Input name="lastName" />)}
        </Form.Item>

        <Form.Item label="Email">
          {getFieldDecorator("email", {
            rules: [
              {
                required: true,
                message: "Please enter your email!"
              }
            ]
          })(<Input name="email" />)}
        </Form.Item>

        <Form.Item label="Password" hasFeedback>
          {getFieldDecorator("password", {
            rules: [
              {
                required: true,
                message: "Please input your password!"
              }
            ]
          })(<Input.Password name="password" />)}
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" className="register-button">
            Sign Up
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

const WrappedRegistrationForm = Form.create({ name: "register" })(G_Form);
export default connect(null, {})(WrappedRegistrationForm);
