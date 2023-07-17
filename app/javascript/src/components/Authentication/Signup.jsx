import React from "react";

import { Button, Form, Input } from "antd";
import { Link, useHistory } from "react-router-dom";

import { useSignup } from "hooks/useAuthentication";

const Signup = () => {
  const { mutateAsync: signup } = useSignup();
  const history = useHistory;

  const onFinish = values => {
    signup(values, { onSuccess: history.push("/") });
  };

  return (
    <div className="justify-center items-center flex flex-col w-full h-full">
      <h2
        className="mt-6 text-3xl font-extrabold leading-9
          text-center text-bb-gray-700"
      >
        Register
      </h2>
      <div className="text-center mb-4">
        <Link
          to="/login"
          className="mt-2 text-sm font-medium text-bb-purple
            transition duration-150 ease-in-out focus:outline-none
            focus:underline"
        >
          Or Login Now
        </Link>
      </div>
      <Form
        autoComplete="off"
        className="w-1/4 border border-gray-300 p-5 bg-white"
        layout="vertical"
        onFinish={onFinish}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="Password Confirmation"
          name="password_confirmation"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" type="primary">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Signup;