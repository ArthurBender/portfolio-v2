import { useState } from "react";
import SkillSwitch from "../components/SkillSwitch";
import { AiOutlineRadarChart } from "react-icons/ai";
import { FaCircleNotch } from "react-icons/fa";

const Skills = () => {
  const [skillSwitchValue, setSkillSwitchValue] = useState("hard")
  const [graphSwitchValue, setGraphSwitchValue] = useState("circles")

  const switches = [
  {
    name: "Skills",
    value: skillSwitchValue,
    setValue: setSkillSwitchValue,
    options: [
      {value: "hard", label: <span>HARD</span>},
      {value: "soft", label: <span>SOFT</span>},
    ]
  },
  {
    name: "Style",
    value: graphSwitchValue,
    setValue: setGraphSwitchValue,
    options: [
      {value: "circles", label: <span className="text-xl"><FaCircleNotch /></span>},
      {value: "graph", label: <span className="text-xl"><AiOutlineRadarChart /></span>},
    ]
  }
]

  return (
    <div className="section">
      <div className="w-fit mx-auto mb-4"><SkillSwitch switchData={switches[0]} /></div>
      <div className="flex gap-4">
        <div className="flex-1 bg-gray-400"></div>
        <SkillSwitch switchData={switches[1]} vertical />
      </div>
    </div>
  );
}

export default Skills;