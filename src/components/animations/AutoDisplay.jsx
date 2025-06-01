"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const AutoDisplaySection = ({ children, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-20% 0px -20% 0px",
  once:true
  });
  

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(isInView);
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0.2,
        filter: "blur(10px)",
        y: -200,
        scale: 0,
      }}
      animate={
        visible
          ? {
              opacity: 1,
              filter: "blur(0px)",
              y: 0,
              scale: 1,
              transition: {
                duration: 0.8,
                ease: "easeOut",
              },
            }
          : {
              opacity: 0.2,
              filter: "blur(10px)",
              y: -200,
              scale: 0,
              transition: {
                duration: 0.8,
                ease: "easeIn",
              },
            }
      }
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AutoDisplaySection;
