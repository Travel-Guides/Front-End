import React from "react";
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
    <div>
      <Form {...formItemLayout} onSubmit={handleSubmit}>
        <h2 className="sign-up">Sign Up</h2>

        <Form.Item label="Full name">
          {getFieldDecorator("fullName", {
            rules: [
              {
                required: true,
                message: "Please enter your full name!"
              }
            ]
          })(<Input name="fullName" />)}
        </Form.Item>

        <Form.Item label="Username">
          {getFieldDecorator("username", {
            rules: [
              {
                required: true,
                message: "Please input a username!"
              }
            ]
          })(<Input name="username" />)}
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

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" className="register-button">
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

const WrappedRegistrationForm = Form.create({ name: "register" })(G_Form);
export default connect(
  null,
  {}
)(WrappedRegistrationForm);
