import React from "react";
import { useLocale } from "next-intl";
import { FaRoad } from "react-icons/fa";
import SectionTitle from './common/Tilte'

const Experience = ({ t }) => {
  const locale = useLocale();
  const isRTL = locale === "fa";

  const experiences = [
    {
      title: t("experience.learningBasics.title"),
      company: t("experience.learningBasics.company"),
      duration: t("experience.learningBasics.duration"),
      description: t("experience.learningBasics.description"),
      skills: ["JavaScript", "HTML", "CSS"],
    },

    {
      title: t("experience.reactPractice.title"),
      company: t("experience.reactPractice.company"),
      duration: t("experience.reactPractice.duration"),
      description: t("experience.reactPractice.description"),
      skills: ["React.js", "JavaScript", "HTML", "CSS"],
    },
    {
      title: t("experience.teamProjects.title"),
      company: t("experience.teamProjects.company"),
      duration: t("experience.teamProjects.duration"),
      description: t("experience.teamProjects.description"),
      skills: ["JavaScript", "Next.js", "Teamwork", "React.js"],
    },
    {
      title: t("experience.advancedProjects.title"),
      company: t("experience.advancedProjects.company"),
      duration: t("experience.advancedProjects.duration"),
      description: t("experience.advancedProjects.description"),
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "Next.js",
        "Tailwind CSS",
        ,
        "Other libreries and FrameWorks",
      ],
    },
  ];

  return (
    <div
    
      className="min-h-screen text-white flex flex-col items-center mt-[200px]"
    >


      <SectionTitle
        icon={<FaRoad/>}
        text=  {isRTL ? "تجربه های من" : "My Experience"}
        />
      

      <div className="relative w-11/12 md:w-4/4">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-500 md:block hidden" />

        {experiences.map((exp, index) => {
          const isEven = index % 2 === 0;
          const isRightSide = isRTL ? isEven : !isEven;

          return (
            <div
           
              key={index}
              className={`flex flex-col items-center mb-8 w-full md:flex-row  ${
                !isRightSide ? "md:flex-row-reverse" : ""
              }`}
            >
              <div
                className={`w-full md:w-[47%]  p-6 rounded-lg bg-[#1a1f2b] shadow-lg ${
                  isRightSide ? "md:mr-[4%]" : "md:ml-[4%]"
                }`}
              >
                <span className="text-sm text-blue-400">{exp.duration}</span>
                <h2 className="text-xl font-semibold mt-2">{exp.title}</h2>
                <h3 className="text-md text-gray-400">{exp.company}</h3>
                <p className="text-sm mt-3">{exp.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-[#2a3b5e] text-sm rounded-full text-nowrap"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* نقطه تایم‌لاین */}
              <div className="relative md:absolute md:left-1/2 md:transform md:-translate-x-1/2 my-4 md:my-0">
                <div className="w-6 h-6 bg-blue-500 rounded-full border-4 border-white"></div>
              </div>

              <div className="hidden md:block md:w-5/12"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
