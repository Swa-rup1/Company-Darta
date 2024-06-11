import React, { useState, useEffect, useRef } from "react";

const AnimatedNumber = ({ value }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const finalValue = value;
  const step = Math.ceil(finalValue / 80); // Adjust the divisor for speed
  const currentValue = useRef(0);

  const animateValue = () => {
    if (currentValue.current < finalValue) {
      currentValue.current += step;
      setDisplayValue(Math.min(currentValue.current, finalValue));
      requestAnimationFrame(animateValue);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateValue();
        }
      });
    });

    observer.observe(document.getElementById("experience-section"));

    return () => {
      observer.disconnect();
    };
  }, []);

  return <span>{displayValue}</span>;
};

const Experience = () => {
  return (
    <>
      
      <div id="experience-section" className="bg-[#FDE36E] py-10 border rounded-md hover drop-shadow-md  ">
        <div className="container mx-auto text-center text-[#171717]">
          <h2 className="text-3xl font-bold mb-4 text-[#171717]">
            Our Experience
          </h2>
          <div className="flex justify-center items-center">
            <div className="mr-12">
              <p className="text-2xl font-bold">
                <AnimatedNumber value={250} />
              </p>
              <p className="text-lg">Registration Completed</p>
            </div>
            <div className="mr-12">
              <p className="text-2xl font-bold">
                <AnimatedNumber value={300} />
              </p>
              <p className="text-lg">Number of Clients Served</p>
            </div>
            <div>
              <p className="text-2xl font-bold">
                <AnimatedNumber value={5} />
              </p>
              <p className="text-lg">Years of Experience</p>
            </div>
          </div>
        </div>
      </div>

     
    </>
  );
};

export default Experience;
