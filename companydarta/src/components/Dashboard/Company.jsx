import React from "react";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#355e3b", borderRadius: "50%", border: "none", boxShadow: "none" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#333333", borderRadius: "50%", border: "none", boxShadow: "none" }}
      onClick={onClick}
    />
  );
}



const Company = () => {
  const logos = [
    "./src/img/aci.png",
    "./src/img/Fortune.png",
    "./src/img/east-west.png",
    "./src/img/whiterabit.png",
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
    prevArrow: <SamplePrevArrow />
  };

  return (
    <>
    <div >
    <hr />
    <div className="logo-slider-container px-4  ">
      <Slider
        {...settings}
        className=""
      >
        {logos.map((logo, index) => (
          <div key={index} className="logo-item">
            <img
              src={logo}
              alt={`Logo ${index}`}
              className="object-contain h-16 lg:h-32 w-50  aspect-square gap-2 flex justify-between items-center align-middle"
            />
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
