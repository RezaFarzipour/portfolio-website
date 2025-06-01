"use client";
import { motion } from "framer-motion";
import { LiaSketch } from "react-icons/lia";
const words = [
  " Crafting",
  "seamless",
  "user",
  "experiences",
  "with",
  "code",
  "and",
  " creativity",
];

const HeroSection = () => {
  return (
    <section className="text-white max-[700px]:mt-[20%]  mt-[10%] flex flex-col items-center justify-center text-center px-[20px] ">
      <div className="text-[#727fde] px-[15px] py-[5px] border border-[#727fde77] flex items-center gap-[6px] bg-[#2200493d] shadow-[0_0_5px_#727fde88] rounded-full mb-8">
        <LiaSketch />
        front-end Developoer Portfolio
      </div>

      <div className="text-[2.8rem] max-[700px]:text-1.5rem font-bold  leading-[1.3] flex flex-wrap justify-center max-w-[600px] mb-[20px]">
        {words.map((word, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3, duration: 0.5 }}
            className="mx-[5px] bg-gradient-to-r from-white to-violet-500 bg-clip-text text-transparent"
          >
            {word + " "}
          </motion.span>
        ))}
      </div>

      <motion.p
        className="text-[1.1rem] text-white mb-[30px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: words.length * 0.3 + 0.5 }}
      >
        Hi! I'm Reza, a Next.js Developer based in Iran.
      </motion.p>

      <motion.button
        className="bg-transparent text-white px-6 py-3 border border-white rounded-md cursor-pointer transition-all duration-300 ease-in-out hover:bg-white hover:text-[#0b0b1f]"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: words.length * 0.3 + 1 }}
      >
        Download My CV ↗
      </motion.button>
    </section>
  );
};

export default HeroSection;
