"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const FadeInRightSection = ({ children, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-20% 0px -20% 0px",
    once: false,
  });

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(isInView);
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        x: -500,
        scale: 0.2,
        filter: "blur(20px)",
      }}
      animate={
        visible
          ? {
              opacity: 1,
              x: 0,
              scale: 1,
              filter: "blur(0px)",
              transition: {
                duration: 0.8,
                ease: "easeInOut",
              },
            }
          : {
              opacity: 1,
              x: 0,
              scale: 1,
              filter: "blur(20px)",
              transition: {
                duration: 0.6,
                ease: "easeInOut",
              },
            }
      }
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeInRightSection;
