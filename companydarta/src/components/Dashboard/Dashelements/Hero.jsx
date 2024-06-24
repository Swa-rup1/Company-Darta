import { Button, Image } from "antd";
import React from "react";
import { AnimatedP } from "../utils/Animatedp";

const Home = () => {
  return (
    <>
      <section className="text-[#333333] flex flex-col justify-between lg:flex-row px-2 pb-8 lg:pt-10 mb-12 lg:mt-8">
        <div className="flex flex-col lg:flex-row ">
          <div className="w-full lg:w-[60%]  flex flex-col">
            <h1 className="text-[2.5rem] lg:text-[2.5rem] font-bold pb-3 font-Oswald">
              Fast-track your Company's <br />
              <span style={{ display: "inline-block", paddingRight: "15px" }}>
                <AnimatedP text="Registration" />
              </span>
              in Nepal!
            </h1>
            <h3 className="text-[1.2rem] lg:text-[1.2rem] font-medium">
              Get your new company registered within 2 to 3 days <br /> after
              name approval. Our registration package includes:
            </h3>

            <div className="my-4 lg:my-5">
              <ul className="text-base lg:text-[1rem] pl-6 gap-5 font-medium">
                <li className="mb-2">
                  <span className="inline-block mr-2">&#10003;</span> Company
                  Registration & PAN/VAT Registration
                </li>
                <li className="mb-2">
                  <span className="inline-block mr-2">&#10003;</span> Rental
                  Agreement
                </li>
                <li className="mb-2">
                  <span className="inline-block mr-2">&#10003;</span> Company
                  Stamp
                </li>
                <li className="mb-2">
                  <span className="inline-block mr-2">&#10003;</span> Minutes to
                  Open a Bank Account
                </li>
              </ul>
            </div>

            <div className="button flex lg:flex-row items-center lg:items-start gap-2 mt-4 p-2">
              <Button className="font-medium text-[#333333] px-5 text-[1rem]">
                <a href="/BusinessRegistrationForm">Business Registration</a>
              </Button>
              <Button className="font-medium text-[#333333] px-5 text-[1rem]">
                <a href="/contact">Consult to an Expert</a>
              </Button>
            </div>
          </div>

          <div className="w-full lg:w-[40%] mt-4 lg:mx-12 h-full">
            <Image
              className="object-cover w-full h-auto"
              src="./src/img/At the office.png"
              alt="Hero Image"
              preview={false}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
