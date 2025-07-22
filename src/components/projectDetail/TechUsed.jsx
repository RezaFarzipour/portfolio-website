import React from "react";
import SectionTitle from "../common/Tilte";
import { IoIosCode } from "react-icons/io";

const TechUsed = ({ technologies ,techUsedLabel}) => {
  return (
    <>
      {/* Header */}
      <SectionTitle
        icon={<IoIosCode className="text-xl text-purple-600" />}
        text={techUsedLabel}
      />

      {/* Tech Icons */}
      <div className="mt-6 grid grid-cols-3 md:grid-cols-6 gap-6">
        {technologies.map((tech, index) => {
               const Icon = tech?.icon;
        
          return (
            <div
              key={index}
              className={`flex flex-col items-center text-sm text-white transition-transform duration-200 hover:-translate-y-1`}
            >
              <div
                className={`p-4 rounded-full ${tech.bgColor}`}
              >
                {tech.icon ? (
                  <Icon size={34} />
                ) : tech.svg ? (
                  <img
                    src={tech.svg}
                    alt={tech.name}
                    className="w-9 h-9 object-contain"
                  />
                ) : null}
              </div>
              <span className="mt-2">{tech.name}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TechUsed;
