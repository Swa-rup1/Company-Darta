import React from "react";
import { Card, Row, Col, Button } from "antd";
import { AnimatedText } from "./AnimatedText";
import CompanyRegistration from "./CompanyRegistration";

const Services = () => {
  const servicesData = [
    {
      title: "Peace of Mind",
      description:
        "Avoid the hassle of paperwork, processing, and dealing with government agencies.",
      icon: "./src/img/peace-of-mind.png",
    },
    {
      title: "Time Saving",
      description:
        "Business owners can save their important time and focus on other aspects of their business.",
      icon: "./src/img/saving.png",
    },
    {
      title: "Legal Compliance",
      description:
        "Ensure legal compliance and avoid fines and reduce the risk of legal issues in the future.",
      icon: "./src/img/compliant.png",
    },
    {
      title: "Additional Services",
      description:
        "As company updates, taxation and legal advice benefit new business owners.",
      icon: "./src/img/chat.png",
    },
  ];

  return (
    <>
      <div className="container mx-auto my-12   ">
        <AnimatedText text="Why Choose Our Company Registration Service?"  />

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

        <div className="">
          <p></p>
          <br />
          <p></p>
        </div>

        <Row gutter={[16, 16]}>
          {servicesData.map((service, index) => (
            <Col key={index} xs={24} sm={12} md={12} lg={6}>
              <Card hoverable className="bg-[#ffffff] text-[#333333]">
                <div style={{ position: "relative", height: "50px" }}>
                  <img
                    alt={service.title}
                    src={service.icon}
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      height: "80%",
                      width: "50%",
                      objectFit: "contain",
                    }}
                  />
                </div>
                <Card.Meta
                  title={
                    <h4 className="text-lg lg:text-xl font-bold p-4 text-[#333333]">
                      {service.title}
                    </h4>
                  }
                  description={
                    <p className="text-base lg:text-lg text-black">
                      {service.description}
                    </p>
                  }
                />
                <Button className="mt-5   font-medium text-[#333333] px-5  text-[1rem]">Learn More</Button>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <CompanyRegistration />
    </>
  );
};

export default Services;
