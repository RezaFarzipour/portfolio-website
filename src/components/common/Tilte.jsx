// components/SectionTitle.tsx
import { ReactNode } from "react";


export default function SectionTitle({ icon, text }) {
  return (
    <div className="flex flex-col items-start gap-1">
    <div className="flex items-center gap-2">
      <div className="text-blue-600">{icon}</div>
      <h2 className="text-lg font-semibold text-white">{text}</h2>
    </div>
    <div className="ml-6 w-10 h-1 bg-blue-500 rounded-full" />
  </div>
  );
}
