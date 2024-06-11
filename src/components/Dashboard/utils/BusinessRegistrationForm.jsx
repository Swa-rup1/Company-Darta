import React from "react";
import { Form, Input, Button } from "antd";
import { AnimatedHeader } from "./AnimatedHeader";

const BusinessRegistrationForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <>
      <div className="h-[100px] bg-[#355e3b]  flex align-center justify-center  ">
        <AnimatedHeader text="Business Registration Form" />
      </div>
      <div className="flex justify-center items-center min-h-screen mt-8">
        <div className="w-full max-w-lg p-8  bg-gray-100 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-6">Business Registration</h1>
          <Form form={form} layout="vertical" onFinish={onFinish}>
            <Form.Item
              name="businessName"
              label="Business Name"
              rules={[
                { required: true, message: "Please input your business name!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="ownerName"
              label="Owner's Name"
              rules={[
                { required: true, message: "Please input the owner's name!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="email"
              label="Email"
              rules={[
                { required: true, message: "Please input your email!" },
                { type: "email", message: "The input is not a valid email!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="phone"
              label="Phone"
              rules={[
                { required: true, message: "Please input your phone number!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="address"
              label="Address"
              rules={[
                { required: true, message: "Please input your address!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="description"
              label="Business Description"
              rules={[
                {
                  required: true,
                  message: "Please input your business description!",
                },
              ]}
            >
              <Input.TextArea rows={4} />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="w-full">
                Register Business
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default BusinessRegistrationForm;
