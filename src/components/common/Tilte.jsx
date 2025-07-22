import { ReactNode } from "react";
import { usePathname } from "next/navigation";

export default function SectionTitle({ icon, text }) {
  const pathname = usePathname();
  const isProjectDetails = pathname.startsWith("/en/projectDetails/") || pathname.startsWith("/fa/projectDetails/");

  return (
    <div className={`flex flex-col ${isProjectDetails ? "items-start" : "items-center"} my-8`}>
      <div className="flex items-center gap-3 mb-2">
        <div className="text-blue-500 text-2xl md:text-3xl animate-bounce-slow">{icon}</div>
        <h2 className="text-white text-2xl md:text-3xl text-nowrap sm:text-4xl font-bold tracking-tight drop-shadow-md transition-all duration-300 hover:tracking-wide">
          {text}
        </h2>
      </div>
      <div className="w-24 h-[3px] bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 rounded-full shadow-md" />
    </div>
  );
}
