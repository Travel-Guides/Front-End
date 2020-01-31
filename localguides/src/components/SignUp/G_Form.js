import React, { useState, useEffect } from "react";
// REDUX
import { connect } from "react-redux";
import { addGuides, addTourists } from "../../redux/actions";
// Antd
import { Form, Input, Button } from "antd";

import "./G_Form.scss";

const G_Form = props => {
  console.log(`SIGNUP PROPS`, props);

  const [isTourist, setIsTourist] = useState(true);
  const [confirmation, setConfirmation] = useState(false);

  // Login on form submit
  const guideHandleSubmit = e => {
    e.preventDefault();
    props.form.validateFieldsAndScroll((err, values) => {
      console.log(`THIS IS VALUES`, values);

      if (!err) {
        props.addGuides(values);
        console.log(`THIS IS register`, props.addGuides);
        props.form.setFieldsValue({ email: "", password: "" });
        props.history.push(`/login/${values.firstName}-${values.lastName}`);
      }
    });
  };

  const touristHandleSubmit = e => {
    e.preventDefault();
    props.form.validateFieldsAndScroll((err, values) => {
      console.log(`THIS IS VALUES`, values);

      if (!err) {
        props.addTourists(values);
        console.log(`THIS IS register`, props.addTourists);
        props.form.setFieldsValue({ email: "", password: "" });
        props.history.push(`/login/${values.firstName}-${values.lastName}`);
      }
    });
  };

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
      <Form
        {...formItemLayout}
        onSubmit={!isTourist ? guideHandleSubmit : touristHandleSubmit}
      >
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
                message: "Please enter your lastName!"
              }
            ]
          })(<Input name="lastName" />)}
        </Form.Item>

        <Form.Item label="Email">
          {getFieldDecorator("email", {
            rules: [
              {
                required: true,
                message: "Please enter a valid email address!"
              }
            ]
          })(<Input name="email" />)}
        </Form.Item>

        <Form.Item label="Password" hasFeedback>
          {getFieldDecorator("password", {
            rules: [
              {
                required: true,
                message: "Please enter your password!"
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

const mapStateToProps = state => {
  console.log(`THIS IS STATE ON REGISTER`, state);
  return {
    token: state.token
  };
};

const WrappedRegistrationForm = Form.create({ name: "register" })(G_Form);

export default connect(mapStateToProps, {
  addGuides: addGuides,
  addTourists: addTourists
})(WrappedRegistrationForm);
