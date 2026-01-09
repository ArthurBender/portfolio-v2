import { useState } from "react";
import type { Experience } from "../types";
import { FaCircle, FaRegCircle } from "react-icons/fa";

const Experience = () => {
  const experiences = [
    {id: 1, start: 2017, end: 2019, company: "DBA Tecnologia", position: "Web Development Intern", description: "Internship in a web development company in Brazil"},
    {id: 2, start: 2019, end: 2021, company: "DBA Tecnologia", position: "Junior Full-Stack Developer", description: "Junior Full-Stack Developer in a web development company in Brazil"},
    {id: 3, start: 2020, end: 2023, company: "IFSC", position: "Student", description: "Graduation in IT Management with 9.3 average"},
    {id: 4, start: 2021, end: 2023, company: "DBA Tecnologia", position: "Mid-Level Full-Stack Developer", description: "Full-Stack Developer in a web development company in Brazil"},
    {id: 5, start: 2023, end: 2025, company: "Fetchly Labs", position: "Mid-Level Full-Stack Developer", description: "Full-Stack Developer in an american company"},
  ] as Experience[];

  const [activeExperience, setActiveExperience] = useState<number | null>(null);

  const handleClickExperience = (id: number) => {
    if (activeExperience === id) {
      setActiveExperience(null);
    } else {
      setActiveExperience(id);
    }
  }

  return (
    <div className="section">
      <div className="flex gap-2 justify-around relative">
        {experiences.map((experience) => (
          <div key={experience.id} className="text-white flex-1">
            <div className="flex flex-col gap-2 items-center">
              <h2>{experience.start}</h2>
              <span className="cursor-pointer z-1 bg-black" onClick={() => handleClickExperience(experience.id)}>{activeExperience === experience.id ? <FaRegCircle /> : <FaCircle />}</span>
            </div>
          </div>
        ))}

        <div className="absolute border-b-2 border-white w-full bottom-1.5"></div>
      </div>
    </div>
  )
}

export default Experience;