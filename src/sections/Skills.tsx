import { useState } from "react";
import SkillSwitch from "../components/SkillSwitch";
import { AiOutlineRadarChart } from "react-icons/ai";
import { FaCircleNotch } from "react-icons/fa";
import CircleSkillsView from "../components/CircleSkillsView";
import GraphSkillsView from "../components/GraphSkillsView";
import SectionTitle from "../components/SectionTitle";

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
      name: "Display",
      value: graphSwitchValue,
      setValue: setGraphSwitchValue,
      options: [
        {value: "circles", label: <span className="text-xl"><FaCircleNotch /></span>},
        {value: "graph", label: <span className="text-xl"><AiOutlineRadarChart /></span>},
      ]
    }
  ]

  const skills = {
    "hard": [
      { id: "h-1", name: "Ruby on Rails", level: 9, icon: <i className="devicon-rails-plain colored"></i> },
      { id: "h-2", name: "PostgreSQL", level: 8, icon: <i className="devicon-postgresql-plain colored"></i> },
      { id: "h-3", name: "Docker", level: 7, icon: <i className="devicon-docker-plain colored"></i> },
      { id: "h-4", name: "Linux", level: 6, icon: <i className="devicon-linux-plain"></i> },
      { id: "h-5", name: "React", level: 5, icon: <i className="devicon-react-original colored"></i> },
      { id: "h-6", name: "Python", level: 5, icon: <i className="devicon-python-plain colored"></i> },
      { id: "h-7", name: "Typescript", level: 4, icon: <i className="devicon-typescript-plain colored"></i> },
      { id: "h-8", name: "Redis", level: 4, icon: <i className="devicon-redis-plain colored"></i> },
    ],
    "soft": [
      { id: "s-1", name: "Problem-solving", level: 9 },
      { id: "s-2", name: "Communication", level: 8 },
      { id: "s-3", name: "Teamwork", level: 8 },
      { id: "s-4", name: "Flexibility", level: 7 },
      { id: "s-5", name: "Leadership", level: 7 }
    ]
  }

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
        <div className="w-fit mx-auto mb-4"><SkillSwitch switchData={switches[0]} /></div>
        <div className={`w-full mx-auto ${graphSwitchValue === "graph" && "max-w-150"}`}>
          {content}
        </div>
        <div className="absolute right-2 top-[40%] translate-y-[-50%]">
          <SkillSwitch switchData={switches[1]} vertical />
        </div>
      </div>
    </div>
  );
}

export default Skills;