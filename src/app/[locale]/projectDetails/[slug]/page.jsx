"use client";
import { projectsDetails } from "../../../../constants/data";
import { notFound } from "next/navigation";
import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { TfiWorld } from "react-icons/tfi";
import { FaGithub } from "react-icons/fa";
import Slider from "../../../../components/Slider";
import SectionTitle from "../../../../components/common/Tilte";
import { MdInfo } from "react-icons/md";
import ClientAndMyRole from "../../../../components/projectDetail/ClientAndMyRole";
import KeyFeatures from "../../../../components/projectDetail/KeyFeatures";
import Challenges from "../../../../components/projectDetail/Challenges";
import TechUsed from "../../../../components/projectDetail/TechUsed";
import { useTranslations } from "next-intl";
export default function ProjectPage() {
  const t = useTranslations();
  const params = useParams();
  const slug = params.slug;
  const project = projectsDetails.find((p) => p.slug === slug);
  const translated = t.raw(`projects.${slug}`);

  if (!project) return notFound();

  const [activeFeature, setActiveFeature] = useState(translated.features[0]);

  const translatedKeyFeatures =
    translated?.KeyFeatures && Array.isArray(translated.KeyFeatures)
      ? project.KeyFeatures.map((feature, index) => ({
          icon: feature.icon,
          text: translated.KeyFeatures[index].text || feature.text,
        }))
      : project.KeyFeatures;



  return (
    <div className="flex flex-col w-full gap-5 px-4 md:px-10 mt-10 container mx-auto">
      <h1 className="text-2xl md:text-4xl font-extrabold my-5">
        {translated.title.split(" ")[0]}{" "}
        <span className="gradient">{translated.highlight}</span>
      </h1>

      {/* client and my role */}

      <div className="flex flex-col my-10 md:flex-row justify-between items-center w-full gap-10 md:gap-1">
        <ClientAndMyRole
          Role={translated.role}
          client={translated.client}
          roleLabel={t("projects.MyRole")}
          clientLabel={t("projects.Client")}
        />
      </div>

      {/* Description Box */}
      <div className="w-full bg-[#111] shadow-[0_2px_30px_rgba(255,255,255,0.1)] rounded-3xl p-6 md:p-10   gap-4">
        <SectionTitle
          icon={<MdInfo className="text-xl text-purple-600" />}
          text={t("projects.ProjectOverView")}
        />
        <p className="text-sm md:text-lg my-5">{translated.description}</p>
      </div>

      {/* key features */}

      <div className="bg-[#111] shadow-[0_2px_30px_rgba(255,255,255,0.1)] rounded-3xl p-6 md:p-10">
        <KeyFeatures
          label={t("projects.KeyFeatures")}
          KeyFeatures={translatedKeyFeatures}
        />
      </div>

      {/* chalenges and solutions */}
      <div className="bg-[#111] shadow-[0_2px_30px_rgba(255,255,255,0.1)] rounded-3xl p-6 md:p-10">
        <Challenges
          and={t("projects.and")}
          challengLabel={t("projects.challenges")}
          solutionsLabel={t("projects.solutions")}
          challenges={translated.challenges}
          solutions={translated.solutions}
        />
      </div>
      {/* Technologies Used */}
      <div className="w-full bg-[#111] shadow-[0_2px_10px_rgba(255,255,255,0.1)] rounded-3xl px-6 py-4 md:px-10 flex flex-col gap-3">
        <TechUsed
          techUsedLabel={t("projects.techUsedLabel")}
          technologies={project.technologies}
        />
      </div>

      {/* Main Layout */}
      <div className="flex flex-col lg:flex-row gap-6 my-10 w-full">
        {/* Sidebar */}
        <aside className="lg:w-1/4 w-full bg-[#111] shadow-[0_2px_10px_rgba(255,255,255,0.1)] p-4 rounded-xl flex flex-col justify-between">
         
          <ul className="space-y-2">
          <h2 className="font-bold text-lg mb-4">{t("projects.Features")}</h2>
            {translated.features.map((feature, index) => {
              const isActive = activeFeature.name === feature.name;

              return (
                <li key={index} className="my-5">
                  <div
                    onClick={() => setActiveFeature(feature)}
                    className={`cursor-pointer px-3 py-2 rounded-md border-b-1 ${
                      isActive
                        ? "bg-purple-100 text-purple-700 font-semibold"
                        : "hover:bg-gray-100 hover:text-black"
                    }`}
                  >
                    {feature.name}
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="my-10 flex items-center justify-center gap-10 ">
            <Link
              href={project.liveUrl}
              target="_blank"
              className="px-4 py-2 flex items-center justify-center gap-2 bg-purple-600 text-white rounded-md transition-all duration-200 hover:bg-purple-700 hover:-translate-y-1 hover:shadow-md"
            >
              <TfiWorld />
              Live Website
            </Link>
            <Link
              href={project.githubUrl}
              target="_blank"
              className="px-4 py-2 flex items-center justify-center gap-2 bg-black text-white rounded-md transition-all duration-200 hover:bg-neutral-800 hover:-translate-y-1 hover:shadow-md"
            >
              <FaGithub />
              GitHub
            </Link>
          </div>
        </aside>

        {/* Content */}
        <main className="flex-1 bg-[#111] shadow-[0_2px_10px_rgba(255,255,255,0.1)] p-4 md:p-6 rounded-xl">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            {activeFeature.name}
          </h1>

          <div className="flex justify-center items-center mb-10 ">
            <Slider activeFeature={activeFeature.slides} />
          </div>
        </main>
      </div>
    </div>
  );
}
