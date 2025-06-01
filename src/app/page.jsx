"use client";
import Experience from "../components/Experience";
import HeroSection from "../components/heroSection";
import InfoSection from "../components/InfoSection";
import MyProjects from "../components/MyProjects";
import MySkills from "../components/MySkills";

export default function Home() {
  return (
    <div class="relative w-full h-full flex flex-col items-center gap-[20%] bg-[#001f7c38] overflow-x-hidden">
      {/* hero section */}

      <HeroSection />

      {/* scroll down */}
      {/* <div className="scroll-down  h-[50px] w-[30px] border-2 border-lightgray absolute left-[49%] bottom-[8%] rounded-full cursor-pointer shadow-[0_0_15px_rgba(211,211,211,0.477)]"></div>   */}

      {/* info section */}

      <InfoSection />

      {/* my Experience */}

      <Experience />

      {/* my project section */}
      <MyProjects />

      {/* mySkilss */}
      <MySkills />
    </div>
  );
}
