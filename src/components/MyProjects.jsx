"use client";

import React, { useRef, useEffect } from "react";
import styles from "./myProjects.module.css";
import { FaExternalLinkAlt } from "react-icons/fa";
import { projects, projectsDetails } from "../constants/data";
import BlurSection from "./animations/BlurSection";
import AutoDisplaySection from "./animations/AutoDisplay";
import FadeInRightSection from "./animations/FadeInRight";
import truncateText from "../../utils/truncateText";
import { IoInformation } from "react-icons/io5";
import { useRouter } from "next/navigation";

const MyProjects = () => {
  const router = useRouter();
  const videoRefs = useRef([]);
  const hoverRefs = useRef([]);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      const hoverSign = hoverRefs.current[index];
      if (!video || !hoverSign) return;

      const handleMouseOver = () => {
        video.play();
        hoverSign.classList.add("active");
      };

      const handleMouseOut = () => {
        video.pause();
        hoverSign.classList.remove("active");
      };

      video.addEventListener("mouseover", handleMouseOver);
      video.addEventListener("mouseout", handleMouseOut);

      return () => {
        video.removeEventListener("mouseover", handleMouseOver);
        video.removeEventListener("mouseout", handleMouseOut);
      };
    });
  }, []);

  return (
    <section className="flex flex-col max-[1000px]:mb-[20%] max-[700px]:mb-[600px] gap-[10%] items-center relative w-[80%] h-screen mt-[200px] mb-[500px]">
      <AutoDisplaySection>
        <h1 className="text-[40px] font-bold max-[1000px]:text-30px max-[700px]:mb-20">
          My Projects💻
        </h1>
      </AutoDisplaySection>

      {projectsDetails.map((project, index) => (
        <div
          key={project.id}
          className="  flex w-full  h-[40%] items-center justify-center gap-[20%] max-[700px]:flex-col max-[700px]:mb-[50%] max-[700px]:ml-[25%]"
        >
          <BlurSection className="flex items-center  justify-center w-1/2 relative cursor-pointer min-w-[400px] transition duration-500 mix-blend-exclusion">
            <video
              // poster=""
              className="object-cover w-full shadow-[0_0_10px_lightgray] rounded-[20px] transition-all duration-500 hover:shadow-[0_0_15px_#727fde86] max-[1000px]:w-250px max-[1000px]:-ml-[100px] max-[700px]:w-[300px]"
              ref={(el) => (videoRefs.current[index] = el)}
              src={project.videoSrc}
              muted
              loop
              playsInline
            ></video>

            <div
              ref={(el) => (hoverRefs.current[index] = el)}
              className={styles.hover_sign}
            />
          </BlurSection>

          <FadeInRightSection className="flex flex-col items-start justify-center w-1/2 pl-[10%] max-[1000px]:pl-0 max-[1000px]:-ml-[80px] max-[700px]:w-full">
            <h1 className="max-[1000px]:text-[20px] max-[1000px]:max-w-[200px] max-[1000px]:text-wrap w-[90%] text-[25px] font-bold whitespace-nowrap mb-[10px] mt-0 max-w-[450px] max-[700px]:text-nowrap">
              {project.title.split(" ")[0]}{" "}
              <span className="gradient">{project.highlight}</span> Website
            </h1>
            <p className="max-[1000px]:text-[10px] max-[1000px]:max-w-[200px] max-[1000px]:min-w-0 max-[1000px]:text-wrap w-[90%] max-w-[400px] min-w-[400px] mb-[50px] mt-0 max-[700px]:max-w-[700px] max-[700px]:mb-[4%]">
              {truncateText(project.description, 100)}
            </p>
            <div className="flex w-full justify-start gap-4 items-center">
              <button className="text-white px-[15px] py-[10px] rounded-[10px] border border-[#727fdeb4] bg-[#2200493d] shadow-[0_0_5px_#727fde86] cursor-pointer transition-all duration-300 flex items-center gap-[10px] hover:shadow-[0_0_15px_#727fde86] max-[700px]:text-sm">
                <FaExternalLinkAlt /> <p>Live Demo</p>
              </button>

              <button
                onClick={() => router.push(`/projectDetails/${project.slug}`)}
                className="text-white px-[15px] py-[10px] rounded-[10px] border border-[#727fdeb4] bg-[#2200493d] shadow-[0_0_5px_#727fde86] cursor-pointer transition-all duration-300 flex items-center gap-[10px] hover:shadow-[0_0_15px_#727fde86]  max-[700px]:text-sm "
              >
                <IoInformation /> <p>View More</p>
              </button>
            </div>
          </FadeInRightSection>
        </div>
      ))}
    </section>
  );
};

export default MyProjects;
