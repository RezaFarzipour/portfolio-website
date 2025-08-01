import Image from "next/image";
import React from "react";
import styles from './skillbox.module.css'
const SkillBox = ({t}) => {
  const skills = [
    { name: "HTML", logo: "/images/icons8-html-5.svg" },
    { name: "CSS", logo: "/images/icons8-css.svg" },
    { name: "JavaScript", logo: "/images/icons8-javascript.svg" },
    { name: "React.js", logo: "/images/react.svg" },
    { name: "Next.JS", logo: "/images/icons8-nextjs.svg" },
    { name: "Typescript", logo: "/images/typescript.svg" },
    { name: "Git", logo: "/images/icons8-git.svg" },
    { name: "Framer Motion", logo: "/images/framer-motion.svg" },
    { name: "Material Ui", logo: "/images/material.svg" },
    { name: "Tailwind", logo: "/images/icons8-tailwindcss.svg" },
    { name: "Bootstrap", logo: "/images/bootstrap-4.svg" },
    { name: "Chakra Ui", logo: "/images/chakra.svg" },
    { name: "Next Ui", logo: "/images/nextui.svg" },
    { name: "Shadcn", logo: "/images/shadcn.svg" },
    { name: "Redux", logo: "/images/redux.svg" },
    { name: "GraphQl", logo: "/images/graphql-icon.svg" },
    { name: "React Query", logo: "/images/reactquery.svg" },
    { name: "Chart.Js", logo: "/images/chart.svg" },
    { name: "Zustand", logo: "/images/zustand2.svg" },
    { name: "React-Hook-Form", logo: "/images/react-hook-form.svg" },
    { name: "Formik", logo: "/images/formik.svg" },
    { name: "Postman", logo: "/images/postman.svg" },
    { name: "Swagger", logo: "/images/swagger.svg" },
  ];
  return (
    <section className="py-10 ">
      <div className=" mx-auto px-4">
        <div className="relative flex ">
          {/* Vertical label */}
          <div className="absolute text-xl md:text-2xl -left-16 md:-left-20 border-y-4 border-yellow-400 top-1/2 -translate-y-1/2 rotate-[-90deg] text-white font-bold tracking-wider ">
         {t("skills")}
          </div>

          {/* Skills container */}
          <div className={`${styles.scrollable_container} h-96 overflow-y-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6  scrollbar-thin scrollbar-thumb-yellow-400 scrollbar-track-gray-800`}>
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col shadow-[rgba(50,50,93,0.25)_0px_13px_27px_-5px,rgba(0,0,0,0.3)_0px_8px_16px_-8px] items-center justify-center bg-[#171717] rounded-lg  p-6"
              >
                <Image
                  src={skill.logo}
                  alt={`${skill.name} logo`}
                  width={50}
                  height={50}
                  className="mb-3"
                />
                <p className="text-white text-sm font-medium">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillBox;
