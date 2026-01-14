import type { Project } from "../types";
import toBeAddedImg from "../assets/projects/to_be_added.jpg";

import { FaArrowPointer } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";


interface ProjectCardProps {
  project: Project;
  isActive: boolean;
  isThumbnail: boolean;
}

const ProjectCard = ({project, isActive, isThumbnail}: ProjectCardProps) => {
  const handleClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  }

  return (
    <div className={`w-full relative hover:opacity-90 ${isActive ? "h-[50vw] max-h-200" : isThumbnail ? "h-[20vw] max-h-80" : "h-[30vw] max-h-100"}`}>
      <img src={project.image || toBeAddedImg} alt={project.name} className="absolute h-full w-full inset-0 object-cover rounded-xl" />

      {isActive &&
        <div className="absolute left-0 right-0 bottom-0 bg-[#00000099] z-10">
          <div className="flex flex-col gap-4 p-4">
            <h2 className="text-2xl text-white">{project.name}</h2>
            {!project.todo &&
              <>
                <p className="text-white">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags?.map((tag) => {
                    return (
                      <span key={tag} className="text-white text-sm border border-white w-fit p-0.5 px-1">
                        {tag}
                      </span>
                    )
                  })}
                </div>

                <div className="flex gap-2 project-card-links">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" onClick={handleClick} className="bg-primary hover:bg-dark border border-dark"><FaArrowPointer /> Access</a>
                  <a href={project.repository} target="_blank" rel="noopener noreferrer" onClick={handleClick} className="bg-gray-700 hover:bg-black border border-black"><FaGithub /> Repository</a>
                </div>
              </>
            }
          </div>
        </div>
      }
    </div>
  )
}

export default ProjectCard;