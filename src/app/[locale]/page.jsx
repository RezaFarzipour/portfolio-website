"use client";
import { useTranslations } from "next-intl";
import Experience from "../../components/Experience";
import HeroSection from "../../components/heroSection";
import InfoSection from "../../components/InfoSection";
import MyProjects from "../../components/MyProjects";
import MySkills from "../../components/MySkills";
import Header from '../../components/header'
import Footer from '../../components/footer'
export default function Home() {
  const t = useTranslations();

  return (
    <>
      {" "}
      <Header />
      <div class="relative w-full h-full flex flex-col items-center gap-[20%] bg-[#001f7c38] overflow-x-hidden">
        {/* hero section */}

        <HeroSection t={t} />

        {/* scroll down */}
        {/* <div className="scroll-down  h-[50px] w-[30px] border-2 border-lightgray absolute left-[49%] bottom-[8%] rounded-full cursor-pointer shadow-[0_0_15px_rgba(211,211,211,0.477)]"></div>   */}

        {/* info section */}

        <InfoSection t={t} />

        {/* my Experience */}

        <Experience t={t} />

        {/* my project section */}
        <MyProjects t={t} />

        {/* mySkilss */}
        <MySkills t={t} />
      </div>
     
    </>
  );
}
