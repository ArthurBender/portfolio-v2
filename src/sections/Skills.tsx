import { useState } from "react";

import SkillSwitch from "../components/SkillSwitch";
import CircleSkillsView from "../components/CircleSkillsView";
import GraphSkillsView from "../components/GraphSkillsView";
import SectionTitle from "../components/SectionTitle";

import { skills, switches } from "../data/skills";

const Skills = () => {
  const [skillSwitchValue, setSkillSwitchValue] = useState("hard")
  const [graphSwitchValue, setGraphSwitchValue] = useState("circles")

  let content;
  if (graphSwitchValue === "circles") {
    content = <CircleSkillsView content={skillSwitchValue === "hard" ? skills.hard : skills.soft} />
  } else {
    content = <GraphSkillsView content={skillSwitchValue === "hard" ? skills.hard : skills.soft} />
  }

  return (
    <div className="section" id="skills">
      <SectionTitle title="My Skills" description="My technical and soft skills." />

      <div className="border-2 border-text bg-surface rounded-4xl py-4 px-12 md:px-20 relative">
        <div className="w-fit mx-auto mb-4"><SkillSwitch switchData={switches[0]} value={skillSwitchValue} setValue={setSkillSwitchValue} /></div>
        <div className={`w-full mx-auto ${graphSwitchValue === "graph" && "max-w-150"}`}>
          {content}
        </div>
        <div className="absolute right-2 top-[40%] translate-y-[-50%]">
          <SkillSwitch switchData={switches[1]} value={graphSwitchValue} setValue={setGraphSwitchValue} vertical />
        </div>
      </div>
    </div>
  );
}

export default Skills;