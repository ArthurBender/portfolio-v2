import type { Project } from "../types";
import sofiaImg from "../assets/projects/sofia.png";
import gaImg from "../assets/projects/genetic_algorithm.png";

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
    nameKey: "projects.names.todo",
    todo: true
  },
  {
    id: 4,
    nameKey: "projects.names.todo",
    todo: true
  },
];