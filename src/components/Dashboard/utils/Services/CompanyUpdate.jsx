import React from "react";
import { AnimatedHeader } from "../AnimatedHeader";
import { Button } from "antd";
import aboutus from "../../../../assets/img/aboutus.jpg";
const CompanyUpdate = () => {
  return (
    <>
      <div className="h-[100px] bg-[#FDE36E]  flex align-center justify-center  ">
        <AnimatedHeader text="Company - Update" />
      </div>
      <section className="text-[#171717] py-5  lg:m-8" id="about">
        <div className=" mx-auto flex flex-col-reverse lg:justify-between   lg:flex-row ">
          <div className="w-full object-contain  ">
            <img src={aboutus} alt="companydarta" className=" h-[400px]" />
          </div>

          <div className="lg:w-[60%]   pb-2">
            <div className="text-base lg:text-lg   text-center lg:text-justify">
              If you have registered a company but are uncertain of how to
              properly update it, Company Dart offers a company update service
              to assist you. <br />
              Contact our customer support at <a href="tel:+977 - 9851253180" className=" p-2">+977-9851253180</a> and speak with
              Dipendra Shah to learn about the necessary documents required for
              company updates and how to get started.
            </div>
            <div className="flex items-center justify-center ">
              <Button className="btn mt-2 bg-green-600  w-60">
                
                <a href="/contact"> Inquiry</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CompanyUpdate;
