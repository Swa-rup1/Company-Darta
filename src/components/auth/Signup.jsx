import React from "react";
import { Card, Button, Checkbox, Form, Input, ConfigProvider } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { AnimatedText } from "../Dashboard/utils/AnimatedText";

const Signup = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const handleNavigate = () => {
    navigate(-1);
  };

  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#006400",
          },
        }}
      >
        <div className="min-h-screen flex items-center justify-center bg-[#FDE36E]">
          <Card hoverable className="w-full max-w-lg mx-4 shadow-lg rounded-lg overflow-hidden  border box-border border-gray-200">
            <button
              onClick={handleNavigate}
              className="flex items-center mb-4 text-gray-700"
            >
              <ArrowLeftOutlined /> Back
            </button>

            <AnimatedText text="Sign Up" />
            <div>
              <Form onFinish={onFinish} layout="vertical">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Please input your username!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Email!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item
                    label="Contact"
                    name="contact"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Contact No.!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <Input.Password />
                  </Form.Item>

                  <Form.Item
                    label="Confirm Password"
                    name="cpassword"
                    rules={[
                      {
                        required: true,
                        message: "Confirm your password!",
                      },
                    ]}
                  >
                    <Input.Password />
                  </Form.Item>
                </div>

                <Form.Item name="remember" valuePropName="checked">
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item>
                  <Button
                    className="w-full font-medium border-none"
                    htmlType="submit"
                    style={{
                      backgroundColor: "#007BFF", // Bootstrap primary blue
                      color: "whitesmoke",
                      transition: "background-color 0.3s",
                    }}
                    onMouseEnter={
                      (e) => (e.target.style.backgroundColor = "#0056b3") // Darker shade of blue for hover
                    }
                    onMouseLeave={
                      (e) => (e.target.style.backgroundColor = "#007BFF") // Original blue color
                    }
                  >
                    Sign-Up
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </Card>
        </div>
      </ConfigProvider>
    </>
  );
};

export default Signup;
