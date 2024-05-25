import React from "react";
import Hero from "./Dashelements/Hero";
import Experience from "./Dashelements/Experience";
import AboutUs from "./AboutUs";
import Services from "./utils/Services";
import Testimonials from "./Testimonials";
import Company from "./Company";

const Main = () => {
  return (
    <>
      <Hero />
      <Company/>
      
      <AboutUs />
      <Experience />
      <Services />
      

      <Testimonials  />
    </>
  );
};

export default Main;
