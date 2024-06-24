import React from "react";
import { Card, Avatar, Skeleton } from "antd";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const { Meta } = Card;

const TestimonialsSlider = ({ testimonials }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1, 
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1, 
        },
      },
    ],
  };

  return (
    <div className="w-full md:w-1/2 mx-auto m-6">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="flex gap-8 justify-between my-6 w-full">
            <Card hoverable className="flex gap-8 justify-between my-6" style={{ width: "100%", gap: "2rem" , display: "flex",}}>
              <div>
                <Meta
                  avatar={<Avatar src={testimonial.image} />}
                  title={testimonial.name}
                  description={testimonial.company}
                />
              </div>
              <div>
                <p className="mt-2">{testimonial.quote}</p>
              </div>
            </Card>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialsSlider;
