"use client";
import { projectsDetails } from "../../../constants/data";
import { notFound } from "next/navigation";
import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { TfiWorld } from "react-icons/tfi";
import { FaGithub } from "react-icons/fa";
import Slider from "../../../components/Slider";
import SectionTitle from "../../../components/common/Tilte";
import { MdInfo } from "react-icons/md";
import ClientAndMyRole from "../../../components/projectDetail/ClientAndMyRole";
import KeyFeatures from "../../../components/projectDetail/KeyFeatures";
import Challenges from "../../../components/projectDetail/Challenges";
import TechUsed from "../../../components/projectDetail/TechUsed";

export default function ProjectPage() {
  const params = useParams();
  const slug = params.slug;
  const project = projectsDetails.find((p) => p.slug === slug);

  if (!project) return notFound();

  const [activeFeature, setActiveFeature] = useState(project.features[0]);



  return (
    <div className="flex flex-col w-full gap-5 px-4 md:px-10 mt-20 container mx-auto">
      <h1 className="text-2xl md:text-4xl font-extrabold my-5">
        {project.title.split(" ")[0]}{" "}
        <span className="gradient">{project.highlight}</span> Website
      </h1>

      {/* client and my role */}

      <div className="flex flex-col my-10 md:flex-row justify-between items-center w-full gap-10 md:gap-1">
        <ClientAndMyRole Role={project.Role} client={project.client} />
      </div>

      {/* Description Box */}
      <div className="w-full bg-[#111] shadow-[0_2px_30px_rgba(255,255,255,0.1)] rounded-3xl p-6 md:p-10   gap-4">
        <SectionTitle
          icon={<MdInfo className="text-xl text-purple-600" />}
          text={"Project Overview"}
        />
        <p className="text-sm md:text-lg my-5">{project.description}</p>
      </div>

      {/* key features */}

      <div className="bg-[#111] shadow-[0_2px_30px_rgba(255,255,255,0.1)] rounded-3xl p-6 md:p-10">
        <KeyFeatures KeyFeatures={project.KeyFeatures} />
      </div>

      {/* chalenges and solutions */}
      <div className="bg-[#111] shadow-[0_2px_30px_rgba(255,255,255,0.1)] rounded-3xl p-6 md:p-10">
        <Challenges
          challenges={project.challenges}
          solutions={project.solutions}
        />
      </div>
      {/* Technologies Used */}
      <div className="w-full bg-[#111] shadow-[0_2px_10px_rgba(255,255,255,0.1)] rounded-3xl px-6 py-4 md:px-10 flex flex-col gap-3">
        <TechUsed technologies={project.technologies} />
      </div>

      {/* Main Layout */}
      <div className="flex flex-col lg:flex-row gap-6 my-10 w-full">
        {/* Sidebar */}
        <aside className="lg:w-1/4 w-full bg-[#111] shadow-[0_2px_10px_rgba(255,255,255,0.1)] p-4 rounded-xl">
          <h2 className="font-bold text-lg mb-4">Features</h2>
          <ul className="space-y-2">
            {project.features.map((feature, index) => {
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
          <div className="my-10 flex item-center justify-center gap-10">
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

          <div className="flex justify-center items-center mb-10">
            <Slider activeFeature={activeFeature.slides} />
          </div>
        </main>
      </div>
    </div>
  );
}
