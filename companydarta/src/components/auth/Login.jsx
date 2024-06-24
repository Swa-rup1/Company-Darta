import React, { useState } from "react";
import {
  Card,
  Button,
  Modal,
  Checkbox,
  Form,
  Input,
  ConfigProvider,
} from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { AnimatedText } from "../Dashboard/utils/AnimatedText";

const Login = () => {
  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(-1);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
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
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
          <Card className="w-full max-w-md mx-4 shadow-lg rounded-lg overflow-hidden bg-white">
            <button
              onClick={handleNavigate}
              className="flex items-center mb-4 text-gray-700"
            >
              <ArrowLeftOutlined /> Back
            </button>
           
            <AnimatedText text="Login"/>
            <Form className="w-full" onFinish={onFinish} layout="vertical">
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

            <Button
              className="w-full bg-red-700 hover:bg-red-500 text-white font-bold py-2 mt-4 rounded"
              onClick={() => setModal1Open(true)}
            >
              Forgot Password 😕
            </Button>

            {modal1Open && (
              <Modal
                title="Change Password"
                style={{
                  top: 20,
                }}
                open={modal1Open}
                onOk={() => setModal1Open(false)}
                onCancel={() => setModal1Open(false)}
              >
                <Form className="w-full" onFinish={onFinish} layout="vertical">
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
                      Login
                    </Button>
                  </Form.Item>
                </Form>
              </Modal>
            )}
          </Card>
        </div>
      </ConfigProvider>
    </>
  );
};

export default Login;
