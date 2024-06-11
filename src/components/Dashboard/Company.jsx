import React from "react";
import Slider from "react-slick";

import aci from "../../assets/img/aci.png";
import Fortune from "../../assets/img/Fortune.png";
import east from "../../assets/img/east-west.png";
import whiterabit from "../../assets/img/whiterabit.png";
import Lynx from "../../assets/img/download.png";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#355e3b",
        borderRadius: "50%",
        border: "none",
        boxShadow: "none",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#333333",
        borderRadius: "50%",
        border: "none",
        boxShadow: "none",
      }}
      onClick={onClick}
    />
  );
}

const Company = () => {
  const logos = [
    { src: aci, url: "https://www.acie.edu.np/" },
    { src: Fortune, url: "https://fortunestudy.com/" },
    { src: east, url: "https://eastwest.edu.np/" },
    { src: whiterabit, url: "https://www.facebook.com/thewhiterabbitktm/" },
    { src: Lynx, url: "https://lynxchd.com/" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <div>
        <hr />
        <div className="logo-slider-container px-4">
          <Slider {...settings} className="">
            {logos.map((logo, index) => (
              <div key={index} className="logo-item">
                <a href={logo.url} target="_blank" rel="noopener noreferrer">
                  <img
                    src={logo.src}
                    alt={`Logo ${index}`}
                    className="object-contain h-16 lg:h-32 w-50 aspect-square gap-2 flex justify-between items-center align-middle"
                  />
                </a>
              </div>
            ))}
          </Slider>
        </div>
        <hr />
      </div>
    </>
  );
};

export default Company;
