import React from "react";
import AutoDisplaySection from "./animations/AutoDisplay";
import SkillBox from "./SkillBox";
import { FaCode } from "react-icons/fa";
import SectionTitle from "./common/Tilte";

const MySkills = ({ t }) => {
  return (
    <section id="skills" className="min-h-screen md:mt-[200px] mt-[700px]">
      <AutoDisplaySection>
        <SectionTitle icon={<FaCode />} text={t("MySkills")} />
        <p className="text-lg mb-12 text-center">{t("skillSub")}</p>
      </AutoDisplaySection>
      <div className="flex justify-center items-center w-full ">
        <SkillBox t={t} />
      </div>
    </section>
  );
};

export default MySkills;
