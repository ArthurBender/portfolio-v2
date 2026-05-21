import type { Project } from "../types";
import sofiaImg from "../assets/projects/sofia.avif";
import gaImg from "../assets/projects/genetic_algorithm.avif";
import menimiImg from "../assets/projects/menimi.avif";
import devdleImg from "../assets/projects/devdle.avif";

export const projects: Project[] = [
  {
    id: 1,
    nameKey: "projects.names.sofia",
    link: "https://psi.sofiavarvakis.com",
    repository: "https://github.com/ArthurBender/sofia-varvakis",
    descriptionKey: "projects.descriptions.sofia",
    image: sofiaImg,
    tags: ["react", "tailwindcss"]
  },
  {
    id: 2,
    nameKey: "projects.names.ga",
    link: "https://ga.arthur-bender.com",
    repository: "https://github.com/ArthurBender/genetic-algorithm",
    descriptionKey: "projects.descriptions.ga",
    image: gaImg,
    tags: ["rails", "javascript", "ai"]
  },
  {
    id: 3,
    nameKey: "projects.names.menimi",
    link: "https://menimi.arthur-bender.com",
    repository: "https://github.com/ArthurBender/menimi-frontend",
    descriptionKey: "projects.descriptions.menimi",
    image: menimiImg,
    tags: ["rails", "react", "tailwindcss", "typescript", "javascript", "ai"]
  },
  {
    id: 4,
    nameKey: "projects.names.devdle",
    link: "https://devdle.arthur-bender.com",
    repository: "https://github.com/ArthurBender/devdle-frontend",
    descriptionKey: "projects.descriptions.devdle",
    image: devdleImg,
    tags: ["node", "express", "react", "tailwindcss", "typescript", "javascript", "ai"]
  },
];