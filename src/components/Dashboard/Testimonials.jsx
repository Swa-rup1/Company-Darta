import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card } from "antd";
import "antd/dist/reset.css";
import { AnimatedText } from "./utils/AnimatedText";

import aci from "../../assets/img/aci.png";
import Fortune from "../../assets/img/Fortune.png";
import east from "../../assets/img/east-west.png";
import whiterabit from "../../assets/img/whiterabit.png";

const testimonials = [
  {
    name: "Jhalak Kumari Shah",
    company: "ACIE - ADVISORY CENTER FOR INTERNATIONAL EDUCATION",
    quote:
      "I had no idea how to register my company, but this company made it easy. Their team was knowledgeable and professional. They kept me informed throughout the entire process. I was impressed with their attention to detail and quick turnaround time.",
    image: aci,
  },
  {
    name: "Ishor Kumar Shahi",
    company: "EAST WEST INTERNATIONAL EDUCATION",
    quote:
      "If you're starting a business, don't waste your time trying to navigate the complicated process. Go through the company darta. Their services are really good. Thank you for registering our company & providing guidance on taxation. Your efforts are deeply appreciated.",
    image: east,
  },
  {
    name: "Rajan Sharma",
    company: "The White Rabbit KTM",
    quote:
      "I chose Company darta for my company registration, and it was the best decision. Their professional team made the process easy, guiding me through complexities with clear communication. Their personalized approach stood out. Thanks for making it straightforward!",
    image: whiterabit,
  },
  {
    name: "Rimjin Gurung",
    company: "FORTUNE EDUCATIONAL CONSULTANCY",
    quote:
      "Working with Company darta was a game-changer for my business. Their expertise in company registration and legal compliance saved me valuable time and effort. The team's professionalism and dedication ensured a smooth process from start to finish. I highly recommend their services!",
    image: Fortune,
  },
];

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="p-2 mb-4 bg-gray-100  flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-center mb-4">Testimonials</h1>

      <AnimatedText text="See what our clients say about us" />
      <Slider {...settings} className="w-full max-w-[60%] h-[80%]">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="px-2">
            <Card className="rounded-lg shadow-md overflow-hidden h-full flex flex-col justify-between">
              <div className="flex flex-col items-center mt-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full mb-4"
                />
                <div className="text-center">
                  <h2 className="text-xl font-semibold">{testimonial.name}</h2>
                  <p className="text-gray-500">{testimonial.company}</p>
                </div>
              </div>
              <p className="mt-4 text-gray-700 text-center px-4 font-medium">
                {testimonial.quote}
              </p>
            </Card>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSlider;
