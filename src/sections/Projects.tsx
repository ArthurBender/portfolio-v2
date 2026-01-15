import { useState } from "react";
import { useTranslation } from "react-i18next";

import { motion, LayoutGroup } from "framer-motion";

import ProjectCard from "../components/ProjectCard";
import SectionTitle from "../components/SectionTitle";

import { projects } from "../data/projects";

const Projects = () => {
  const { t } = useTranslation();

  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="section" id="projects">
      <SectionTitle title={t("projects.sectionName")} description={t("projects.sectionDescription")} />
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