import React from "react";

const Experience = () => {
 

  const experiences = [
   
   
    {
      title: "Learning Front-end Basics",
      company: "Self-Learning",
      duration: "2023",
      description:
        "In 2023, I started learning basic front-end topics including HTML, CSS, and JavaScript, building a solid foundation for web development.",
      skills: ["HTML", "CSS", "JavaScript"],
    },
    
    {
        title: "Learning React.js and Practice Projects",
        company: "AdliKara",
        duration: "2023 - 2024",
        description:
          "After mastering the basics, I began learning React.js and completed several practice projects to enhance my skills in this framework.",
        skills: ["React.js", "JavaScript", "HTML", "CSS", ],
      },
    {
        title: "Teamwork on Real Projects",
        company: "Team Collaboration on AdliKara",
        duration: "2024",
        description:
          "Started Learning Next.js and working on real projects with a perfect team. This teamwork experience was highly valuable and strengthened my collaboration and group development skills.",
        skills: ["JavaScript", "Next.js", "Teamwork", "React.js"],
      },
    {
        title: "Advanced Real Projects",
        company: "Practical Team Projects",
        duration: "2024 - 2025",
        description:
          "In the past year, I worked fully on real and practical projects from scratch to finish. During this time, I reviewed advanced front-end concepts and gained deep professional development experience.",
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


    <div className="min-h-screen  text-white flex flex-col items-center mt-[200px]">
    <h1 className="text-4xl font-bold mb-2"> My Experience</h1>
    <p className="text-lg mb-12 text-justify max-w-64 md:w-full">
    Three years of crafting Beautiful and functional web experiences
    </p>

    <div className="relative w-11/12 md:w-3/4">
      {/* خط عمودی تایم‌لاین */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-500 md:block hidden"></div>

      {experiences.map((exp, index) => (
        <div
          key={index}
          className="flex flex-col  items-center mb-8 w-full md:flex-row md:even:flex-row-reverse"
        >
          {/* کارت تجربه */}
          <div
            className="w-full md:w-5/12 p-6 rounded-lg bg-[#1a1f2b] shadow-lg  md:even:ml-auto"
          >
            <span className="text-sm text-blue-400">{exp.duration}</span>
            <h2 className="text-xl font-semibold mt-2">{exp.title}</h2>
            <h3 className="text-md text-gray-400">{exp.company}</h3>
            <p className="text-sm mt-3">{exp.description}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {exp.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-[#2a3b5e] text-sm rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* دایره تایم‌لاین */}
          <div className="relative md:absolute md:left-1/2 md:transform md:-translate-x-1/2 my-4 md:my-0">
            <div className="w-6 h-6 bg-blue-500 rounded-full border-4 border-white"></div>
          </div>

          {/* فضای خالی برای تعادل در دسکتاپ */}
          <div className="hidden md:block md:w-5/12"></div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Experience;
