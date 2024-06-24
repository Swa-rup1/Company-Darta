import { Button } from "antd";
import React from "react";
import { AnimatedText } from "./utils/AnimatedText";
import CompanyRegistration from "./utils/CompanyRegistration";

const AboutUs = () => {
  return (
    <>
      <section className="text-[#171717] py-5  m-16" id="about">
        <div className=" mx-auto flex flex-col-reverse lg:justify-between   lg:flex-row ">
          <div className="w-full object-contain ">
            <img src="./src/img/aboutus.jpg" alt="companydarta" className=" h-[400px]" />
          </div>

          <div className="lg:w-1/2 text-wrap  pb-2">
            <AnimatedText text="About - Us" className="text-2xl" />
            <div>
              <h1 className="text-4xl font-bold mb-4 text-center">
                Your Trusted Company Registration Partner
              </h1>
            </div>

            <div className="text-base lg:text-lg  mb-4 text-center lg:text-justify ">
              <p className=" ">
                Company Sewa is Nepal's leading company registration agency,
                offering a decade of experience in the industry.
              </p>
              <p className="  ">
                Our mission is to simplify the complex and time-consuming
                company registration process, offering efficient and hassle-free
                services. With over 1,500 clients assisted, we specialize in
                streamlining your registration experience.
              </p>
              <Button className="mt-4  flex align-middle justify-center items-center font-medium text-[#333333] px-5  text-[1rem] ">Learn More</Button>

             
            </div>

          </div>
        </div>
      </section>
     
    </>
  );
};

export default AboutUs;
