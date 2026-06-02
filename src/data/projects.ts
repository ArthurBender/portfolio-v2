import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: 1,
    nameKey: "projects.names.sofia",
    link: "https://psi.sofiavarvakis.com",
    repository: "https://github.com/ArthurBender/sofia-varvakis",
    descriptionKey: "projects.descriptions.sofia",
    image: "/images/projects/sofia.avif",
    tags: ["react", "tailwindcss"]
  },
  {
    id: 2,
    nameKey: "projects.names.ga",
    link: "https://ga.arthur-bender.com",
    repository: "https://github.com/ArthurBender/genetic-algorithm",
    descriptionKey: "projects.descriptions.ga",
    image: "/images/projects/genetic_algorithm.avif",
    tags: ["rails", "javascript", "ai"]
  },
  {
    id: 3,
    nameKey: "projects.names.menimi",
    link: "https://menimi.arthur-bender.com",
    repository: "https://github.com/ArthurBender/menimi-frontend",
    descriptionKey: "projects.descriptions.menimi",
    image: "/images/projects/menimi.avif",
    tags: ["rails", "react", "tailwindcss", "typescript", "javascript", "ai"]
  },
  {
    id: 4,
    nameKey: "projects.names.devdle",
    link: "https://devdle.arthur-bender.com",
    repository: "https://github.com/ArthurBender/devdle-frontend",
    descriptionKey: "projects.descriptions.devdle",
    image: "/images/projects/devdle.avif",
    tags: ["node", "express", "react", "tailwindcss", "typescript", "javascript", "ai"]
  },
];