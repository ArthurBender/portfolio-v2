import { useState } from "react";

import type { Experience } from "../types";

import { experiences } from "../data/experiences";

import { FaCircle, FaRegCircle } from "react-icons/fa";
import { Tooltip } from 'react-tooltip';
import ExperienceTooltipContent from "../components/ExperienceTooltipContent";

import SectionTitle from "../components/SectionTitle";

const Experiences = () => {
  

  const [activeExperience, setActiveExperience] = useState<Experience | null>(null);

  const handleClickExperience = (experience: Experience) => {
    if (activeExperience?.id === experience.id) {
      setActiveExperience(null);
    } else {
      setActiveExperience(experience);
    }
  }

  return (
    <div className="section" id="experiences">
      <SectionTitle title="Experience" description="Past and current experiences." />

      <div className="flex gap-2 justify-around relative mb-20 select-none" id="experiences">
        {experiences.map((experience) => (
          <div key={experience.id} className="text-primary flex-1">
            <div className="flex flex-col gap-2 items-center">
              <h2>{experience.start}</h2>
              <span
                className="cursor-pointer z-1 bg-background text-xl"
                onClick={() => handleClickExperience(experience)}
              >
                {activeExperience?.id === experience.id ? <FaRegCircle /> : <FaCircle />}
              </span>
            </div>
          </div>
        ))}

        <div className="absolute border-b-2 border-primary w-full bottom-2"></div>
      </div>

      <p className="text-text w-full text-center italic">Click a year to see more details about the experience.</p>

      <Tooltip 
        isOpen={!!activeExperience}
        anchorSelect="#experiences"
        className="experience-tooltip"
        place="bottom"
      >
        <ExperienceTooltipContent experience={activeExperience} />
      </Tooltip>
    </div>
  )
}

export default Experiences;