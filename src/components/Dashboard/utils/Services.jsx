import React from "react";
import { Card, Row, Col, Button } from "antd";
import { AnimatedText } from "./AnimatedText";
import CompanyRegistration from "./CompanyRegistration";
import peace from "../../../assets/img/peace-of-mind.png";
import time from "../../../assets/img/saving.png";
import compliant from "../../../assets/img/compliant.png";
import chat from "../../../assets/img/chat.png";

const Services = () => {
  const servicesData = [
    {
      title: "Peace of Mind",
      description:
        "Avoid the hassle of paperwork, processing, and dealing with government agencies.",
      icon: peace,
    },
    {
      title: "Time Saving",
      description:
        "Business owners can save their important time and focus on other aspects of their business.",
      icon: time,
    },
    {
      title: "Legal Compliance",
      description:
        "Ensure legal compliance and avoid fines and reduce the risk of legal issues in the future.",
      icon: compliant,
    },
    {
      title: "Additional Services",
      description:
        "As company updates, taxation and legal advice benefit new business owners.",
      icon: chat,
    },
  ];

  return (
    <>
      <div className="container mx-auto my-12   ">
        <AnimatedText text="Why Choose Our Company Registration Service?" />

        <div className="text-base  mb-4 text-center    flex flex-col justify-center align-middle m-4 p-4   lg:text-lg mx-auto max-w-[50rem] ">
          <p className=" ">
            Company registration is not an easy process in Nepal. There is too
            much hassle and lots of paperwork. If you don't know the process, it
            can be frustrating and take many days.
          </p>
          <p className="  ">
            But don't worry! Now we will do all these required tasks for you.
            From Preparing documents to obtain the company registration
            certificate and PAN. Register your company with Company Darta, and
            your new company will be registered within 2 to 3 business days
            after name approval.
          </p>
        </div>

        <div className=" w-[70%] m-auto grid  sm:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-8 justify-items-center lg:justify-center ">
          {servicesData.map((service, index) => (
            <Card
              key={index}
              hoverable
              className="bg-gray-200 text-[#333333] p-2 align-middle text-center rounded-lg shadow-md "
            >
              <div className="relative h-12 flex justify-center items-center">
                <img
                  alt={service.title}
                  src={service.icon}
                  hoverable
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full w-1/2 object-contain "
                />
              </div>
              <div className="mt-4">
                <h4 className="text-lg lg:text-xl font-bold p-4 text-[#333333]">
                  {service.title}
                </h4>
                <p className="text-base lg:text-lg text-black">
                  {service.description}
                </p>
              </div>
              <button className="mt-5 bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-md text-[1rem] transition-all duration-300">
                Learn More
              </button>
            </Card>
          ))}
        </div>
      </div>
      <CompanyRegistration />
    </>
  );
};

export default Services;
