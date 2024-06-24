import { Button, Input, Select, Space } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  ClockCircleOutlined,
  FacebookFilled,
  TwitterCircleFilled,
  InstagramFilled,
  PinterestFilled,
  YoutubeFilled,
} from "@ant-design/icons";
import React from "react";
import { AnimatedText } from "./AnimatedText";
import { AnimatedHeader } from "./AnimatedHeader";

const Contact = () => {
  const handleSubmit = () => {
    // Add your form submission logic here
    message.success("Form submitted successfully!");
  };

  return (
    <>
      <div className="h-[100px] bg-[#355e3b]  flex align-center justify-center  ">
        <AnimatedHeader text="Contact Form" />
      </div>
      <div className="flex flex-col lg:flex-row    justify-evenly  mt-4 ">
        <div className=" lg:w-[60%] bg-gray-100 border border-gray-300 rounded-lg p-4 sm:mr-4 mb-4">
          <p className="text-black-600 mb-6 text-xl text-center font-extrabold uppercase">
            Fill in the form to start a conversation
          </p>
          <div>
            {/* Full Name */}
            <div className="mb-6 px-2">
              <label
                className="block text-black-600 font-semibold mb-2 text-lg"
                htmlFor="name"
              >
                Full Name
              </label>
              <Input
                size="large"
                type="text"
                id="name"
                placeholder="Full Name"
              />
            </div>

            {/* Email */}

            <div className="mb-6 px-2">
              <label
                className="block text-black-600 font-semibold mb-2 text-lg"
                htmlFor="email"
              >
                Email
              </label>
              <Input size="large" type="email" id="email" placeholder="Email" />
            </div>

            {/* Phone No. */}

            <div className="mb-6 px-2">
              <label
                className="block text-black-600 font-semibold mb-2 text-lg"
                htmlFor="number"
              >
                Phone Number
              </label>
              <Input
                size="large"
                type="tel"
                id="number"
                placeholder="Phone Number"
              />
            </div>

            {/* Services */}
            <div className="mb-6 px-2" >
            <label
                className="block text-black-600 font-semibold mb-2 text-lg"
                htmlFor="services"
              >
                Services
              </label>
              <Space wrap>
                <Select
                  placeholder="Select a person"
                  style={{
                    width: 200,
                  }}
                  options={[
                    {
                      value: "Company Registration",
                      label: "CompanyRegistration",
                    },
                    {
                      value: "Company Update",
                      label: "CompanyUpdate",
                    },
                    {
                      value: "Share Transfer",
                      label: "ShareTransfer",
                    },
                    {
                      value: "Company Close",
                      label: "CompanyClose",
                    },
                  ]}
                />
              </Space>
            </div>

            {/* Message */}

            <div className="mb-6 px-2">
              <label
                className="block text-black-600 font-semibold mb-2 text-lg"
                htmlFor="message"
              >
                Message
              </label>
              <Input.TextArea rows={4} placeholder="Your message here..." />
            </div>

            {/* btn */}

            <Button
              size="large"
              type="primary"
              className="w-full font-semibold"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </div>
        </div>

        <div className=" bg-[#ecf4ed] border border-[#ecf4ed]-300 rounded-lg p-4 sm:ml-4 mb-4">
          <h1 className="text-2xl font-bold mb-4">Get in touch</h1>
          <div className="flex items-center mb-4">
            <MailOutlined className="text-black-600 mr-2 text-xl" />
            <p className="text-black-600 text-lg">companysewa7@gmail.com</p>
          </div>
          <div className="flex items-center mb-4">
            <PhoneOutlined className="text-black-600 mr-2 text-xl" />
            <p className="text-black-600 text-lg">+977 - 9851 253 180</p>
          </div>
          <div className="flex items-center mb-4">
            <EnvironmentOutlined className="text-black-600 mr-2 text-xl" />
            <p className="text-black-600 text-lg">
              New Baneshwor (opposite Alfa Beta Complex), Kathmandu, Nepal
            </p>
          </div>
          <div className="flex items-center mb-4 text-lg">
            <ClockCircleOutlined className="text-black-600 mr-2 text-xl" />
            <p className="text-black-600">9am - 6pm, Saturday Close</p>
          </div>
          <p className="text-2xl font-bold mb-8 mt-8">Follow Us:</p>
          <div className="flex justify-around gap-2 mt-4">
            <FacebookFilled className="text-2xl text-blue-500 hover:text-blue-600 cursor-pointer transition-transform transform hover:scale-110" />
            <TwitterCircleFilled className="text-2xl text-blue-400 hover:text-blue-500 cursor-pointer transition-transform transform hover:scale-110" />
            <InstagramFilled className="text-2xl text-[#E1306C] hover:text-[#FD1D1D] cursor-pointer transition-transform transform hover:scale-110" />
            <PinterestFilled className="text-2xl text-red-500 hover:text-red-600 cursor-pointer transition-transform transform hover:scale-110" />
            <YoutubeFilled className="text-2xl text-red-600 hover:text-red-700 cursor-pointer transition-transform transform hover:scale-110" />
          </div>
        </div>
      </div>

      <div className="w-full aspect-w-16 aspect-h-9 m-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.906025754214!2d85.32942407425328!3d27.689299226289428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb191cccd60d49%3A0xbd8f4d8a62734413!2sCompany%20Sewa%20-%20Company%20Registration%20Service%20Nepal!5e0!3m2!1sen!2snp!4v1716199594427!5m2!1sen!2snp"
          className="w-full h-[300px]"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
