import { useState } from "react";
import SkillSwitch from "../components/SkillSwitch";
import { AiOutlineRadarChart } from "react-icons/ai";
import { FaCircleNotch } from "react-icons/fa";
import CircleSkillsView from "../components/CircleSkillsView";
import GraphSkillsView from "../components/GraphSkillsView";

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
      { name: "Ruby on Rails", level: 9, icon: <i className="devicon-rails-plain colored"></i> },
      { name: "PostgreSQL", level: 8, icon: <i className="devicon-postgresql-plain colored"></i> },
      { name: "Docker", level: 7, icon: <i className="devicon-docker-plain colored"></i> },
      { name: "Linux", level: 6, icon: <i className="devicon-linux-plain"></i> },
      { name: "React", level: 5, icon: <i className="devicon-react-original colored"></i> },
      { name: "Python", level: 5, icon: <i className="devicon-python-plain colored"></i> },
      { name: "Typescript", level: 4, icon: <i className="devicon-typescript-plain colored"></i> },
      { name: "Redis", level: 4, icon: <i className="devicon-redis-plain colored"></i> },
    ],
    "soft": [
      { name: "Problem-solving", level: 9 },
      { name: "Communication", level: 8 },
      { name: "Teamwork", level: 8 },
      { name: "Flexibility", level: 7 },
      { name: "Leadership", level: 7 }
    ]
  }

  let content;
  if (graphSwitchValue === "circles") {
    content = <CircleSkillsView content={skillSwitchValue === "hard" ? skills.hard : skills.soft} />
  } else {
    content = <GraphSkillsView content={skillSwitchValue === "hard" ? skills.hard : skills.soft} />
  }

  return (
    <div className="section">
      <div className="w-fit mx-auto mb-4"><SkillSwitch switchData={switches[0]} /></div>
      <div className="flex gap-4">
        <div className="flex-1 p-10">
          {content}
        </div>
        <SkillSwitch switchData={switches[1]} vertical />
      </div>
    </div>
  );
}

export default Skills;