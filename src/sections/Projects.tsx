import { useState } from "react";
import { motion, LayoutGroup } from "framer-motion";

import type { Project } from "../types";
import ProjectCard from "../components/ProjectCard";

import sofiaImg from "../assets/projects/sofia.png";
import gaImg from "../assets/projects/genetic_algorithm.png";
import SectionTitle from "../components/SectionTitle";

const projects = [
  {id: 1, name: "Sofia's Website", link: "https://psi.sofiavarvakis.com", repository: "https://github.com/ArthurBender/sofia-varvakis", description: "A professional website I built for Sofia Varvakis, a psychotherapist from Brazil. It's built using React and Tailwind CSS.", image: sofiaImg, tags: ["react", "tailwindcss"]},
  {id: 2, name: "Genetic Algorithm", link: "https://ga.arthur-bender.com", repository: "https://github.com/ArthurBender/genetic-algorithm", description: "A basic implementation of a genetic algorithm based on the Shakespeare Monkeys theory. It's done using Rails but the logic is pure JavaScript.", image: gaImg, tags: ["rails", "javascript", "ai"]},
  {id: 3, name: "Comming soon", todo: true},
  {id: 4, name: "Comming soon", todo: true},
] as Project[];

const Projects = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="section" id="projects">
      <SectionTitle title="Projects" description="Some of the projects I've worked on." />
      <LayoutGroup>
          <div
            className={`mt-10 md:mt-0 grid w-full h-full gap-4 ${active === null ? "grid-cols-2 grid-rows-2" : "grid-cols-3 grid-rows-[2fr_1fr]"}`}
          >
            {projects.map((project) => {
              const isActive = active === project.id;
              const isThumbnail = active !== null && !isActive;

              return (
                <motion.div
                  key={project.id}
                  layout
                  layoutId={`card-${project.id}`}
                  onClick={() =>
                    setActive(isActive ? null : project.id)
                  }
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className={`border border-text rounded-xl cursor-pointer flex items-center justify-center
                    ${active === null ? "" : isActive ? "col-span-3 row-start-1" : "row-start-2"
                  }`}
                >
                  <ProjectCard project={project} isActive={isActive} isThumbnail={isThumbnail} />
                </motion.div>
              );
            })}
          </div>
      </LayoutGroup>
    </div>
  );
}

export default Projects;