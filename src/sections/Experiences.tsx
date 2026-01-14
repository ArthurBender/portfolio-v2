import { useState } from "react";
import type { Experience } from "../types";
import { FaCircle, FaRegCircle } from "react-icons/fa";
import { Tooltip } from 'react-tooltip';
import ExperienceTooltipContent from "../components/ExperienceTooltipContent";

import dbaImg from "../assets/experiences/dba.jpeg";
import ifscImg from "../assets/experiences/ifsc.png";
import fetchlyImg from "../assets/experiences/fetchly.png";
import SectionTitle from "../components/SectionTitle";

const Experiences = () => {
  const experiences = [
    {id: 1, start: 2017, end: 2019, company: "DBA Tecnologia", position: "Web Development Intern", description: "Internship in a web development company in Brazil", image: dbaImg},
    {id: 2, start: 2019, end: 2021, company: "DBA Tecnologia", position: "Junior Full-Stack Developer", description: "Junior Full-Stack Developer in a web development company in Brazil", image: dbaImg},
    {id: 3, start: 2020, end: 2023, company: "IFSC", position: "Student", description: "Graduation in IT Management with 9.3 average", image: ifscImg},
    {id: 4, start: 2021, end: 2023, company: "DBA Tecnologia", position: "Mid-Level Full-Stack Developer", description: "Full-Stack Developer in a web development company in Brazil", image: dbaImg},
    {id: 5, start: 2023, end: 2025, company: "Fetchly Labs", position: "Mid-Level Full-Stack Developer", description: "Full-Stack Developer in an american company", image: fetchlyImg},
  ] as Experience[];

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
          <div key={experience.id} className="text-white flex-1">
            <div className="flex flex-col gap-2 items-center">
              <h2>{experience.start}</h2>
              <span
                className="cursor-pointer z-1 bg-black text-xl"
                onClick={() => handleClickExperience(experience)}
              >
                {activeExperience?.id === experience.id ? <FaRegCircle /> : <FaCircle />}
              </span>
            </div>
          </div>
        ))}

        <div className="absolute border-b-2 border-white w-full bottom-2"></div>
      </div>

      <p className="text-white w-full text-center italic">Click a year to see more details about the experience.</p>

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