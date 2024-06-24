import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export const AnimatedHeader = ({ text }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.h1
      className="text-center font-bolder m-6 text-[#FFFFFF] leading-relaxed  text-xl  lg:text-4xl "
      variants={{
        hidden: { opacity: 0, x: -20 },
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration: 0.5, delay: 0.2, ease: "easeOut" },
        },
      }}
      initial="hidden"
      animate={controls}
      ref={ref}
    >
      {text}
    </motion.h1>
  );
};
