import type { Skill } from "../types";
import CircleProgress from "./CircleProgress";

import { useTranslation } from "react-i18next";

const levelColorMap: Record<number, string> = {
  1: "#ef4444", // red
  2: "#ef4444",
  
  3: "#eab308",
  4: "#eab308", // yellow
  
  5: "#3b82f6",
  6: "#3b82f6", // blue
  7: "#3b82f6",

  8: "#22c55e", // green
  9: "#22c55e",
  10: "#22c55e",
};

const CircleSkillsView = ({ content }: { content: Skill[] }) => {
  const { t } = useTranslation();

  const iconSize = screen.width < 768 ? 50 : 90;

  return (
    <div className="flex flex-wrap gap-4 justify-center py-10">
      {content.map((skill) => (
        <div key={skill.id} className={"flex-col gap-1 text-center"}>
          <div className="relative w-fit justify-center items-center mx-auto">
            <CircleProgress value={skill.level} size={iconSize} progressStroke={levelColorMap[skill.level]} />

            <div className={`absolute inset-0 text-text flex justify-center items-center text-sm md:text-md ${skill.icon && "text-xl md:text-4xl"}`}>
              {skill.icon ? <i className={skill.icon}></i> : skill.level + "/10"}
            </div>
          </div>
          <div className="text-text text-sm md:text-md hyphens-manual overflow-hidden w-full max-w-12.5 md:max-w-22.5 lg:max-w-40">{skill.icon ? skill.level + "/10" : t(skill.nameKey)}</div>
        </div>
      ))}
    </div>
  )
}

export default CircleSkillsView;