"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const BlurSection = ({ children, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    threshold: 0.5,
    margin: "-25% 0px -25% 0px",
  });

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(isInView);
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, filter: "blur(40px)" }}
      animate={
        visible
          ? {
              opacity: 1,
              filter: "blur(0px)",
              transition: {
                duration: 0.6,
                ease: "easeInOut",
              },
            }
          : {
              opacity: 0,
              filter: "blur(40px)",
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

export default BlurSection;
