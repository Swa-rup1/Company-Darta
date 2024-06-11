import React from "react";
import { AnimatedHeader } from "../AnimatedHeader";
import aboutus from "../../../../assets/img/aboutus.jpg";
import { Button } from "antd";
const NewCompanyRegistration = () => {
  return (
    <>
      <div className="h-[100px] bg-[#FDE36E]  flex align-center justify-center  ">
        <AnimatedHeader text="New Company Registration" />
      </div>
      <section className="text-[#171717] py-5  lg:m-8" id="about">
        <div className=" mx-auto flex flex-col-reverse lg:justify-between   lg:flex-row ">
          <div className="w-full object-contain  ">
            <img src={aboutus} alt="companydarta" className=" h-[400px]" />
          </div>

          <div className="lg:w-[60%]   pb-2">
            <div className="text-base lg:text-lg   text-center lg:text-justify">
              At Company Darta, we offer New Company Registration services in
              Nepal. Our team of experts can assist you Get your new company
              registered within 2 to 3 days after name approval. Our
              registration package includes:
              <ul className=" m-4">
                <li>✓ Company Registration & PAN/VAT Registration</li>
                <li>✓ Rental Agreement</li>
                <li> ✓ Company Stamp </li>
              </ul>
              Contact our customer support at <a href="tel:+977 - 9851253180" className=" p-2">+977-9851253180</a>  and speak with
              Dipendra Shah to learn about the necessary documents and how to
              get started.
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

export default NewCompanyRegistration;
