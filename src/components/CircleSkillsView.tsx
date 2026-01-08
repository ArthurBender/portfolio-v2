import type { Skill } from "../types";
import CircleProgress from "./CircleProgress";

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
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {content.map((skill) => (
        <div className="flex-1 flex-col gap-1 text-center">
          <div className="relative w-fit justify-center items-center mx-auto">
            <CircleProgress value={skill.level} size={80} progressStroke={levelColorMap[skill.level]} />

            <div className={`absolute inset-0 text-white flex justify-center items-center ${skill.icon && "text-4xl"}`}>
              {skill.icon ? skill.icon : skill.level + "/10"}
            </div>
          </div>
          <div className="text-white">{skill.icon ? skill.level + "/10" : skill.name}</div>
        </div>
      ))}
    </div>
  )
}

export default CircleSkillsView;