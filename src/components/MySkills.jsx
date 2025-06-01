import React from "react";
import AutoDisplaySection from "./animations/AutoDisplay";
import SkillBox from "./SkillBox";



const MySkills = () => {
  return (
    <section  className="min-h-screen md:mt-[200px] mt-[400px]">
      <AutoDisplaySection>
        <h1 className="section_title autoBlur text-center">My Professional Skills💪</h1>
        <p className="text-lg mb-12 text-center">
          A comprehensive showcase of technologies and tools I've mastered
          throughout my professional journey.
        </p>
      </AutoDisplaySection>
      <div className="flex justify-center items-center w-full ">
      <SkillBox/>

      </div>
         
    </section>
  );
};

export default MySkills;
