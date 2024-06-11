import React from "react";
import { AnimatedHeader } from "../AnimatedHeader";
import { Button } from "antd";
import aboutus from "../../../../assets/img/aboutus.jpg";
const CompanyClose = () => {
  return (
    <>
      <div className="h-[100px] bg-[#FDE36E]  flex align-center justify-center  ">
        <AnimatedHeader text="Company - Close" />
      </div>
      <section className="text-[#171717] py-5  lg:m-8" id="about">
        <div className=" mx-auto flex flex-col-reverse  items-center  justify-center gap-8  lg:flex-row ">
          <div className="w-full object-contain lg:w-[40%]   ">
            <img src={aboutus} alt="companydarta" className=" h-[300px]" />
          </div>

          <div className="lg:w-[40%]   pb-2">
            <div className="text-base lg:text-lg   text-center lg:text-justify">
              If you have registered a company but are unsure of how to properly
              close it, Company Sewa offers a company close service to help ease
              the process.
              <br />
              Let us assist you in efficiently closing your company, without any
              worries or complications. Call our customer support at
              <a href="tel:+977 - 9851253180" className=" p-2">
                +977-9851253180
              </a>{" "}
              and speak with Dipendra Shah to learn about the necessary
              documents required for closing your company, as well as how to
              initiate the process.
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

export default CompanyClose;
