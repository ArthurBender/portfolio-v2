import type { Skill, SwitchType } from "../types";

export const skills = {
  "hard": [
    { id: "h-1", nameKey: "skills.names.rails", level: 9, icon: "devicon-rails-plain colored" },
    { id: "h-2", nameKey: "skills.names.postgresql", level: 8, icon: "devicon-postgresql-plain colored" },
    { id: "h-3", nameKey: "skills.names.docker", level: 7, icon: "devicon-docker-plain colored" },
    { id: "h-4", nameKey: "skills.names.linux", level: 6, icon: "devicon-linux-plain" },
    { id: "h-5", nameKey: "skills.names.react", level: 5, icon: "devicon-react-original colored" },
    { id: "h-6", nameKey: "skills.names.python", level: 5, icon: "devicon-python-plain colored" },
    { id: "h-7", nameKey: "skills.names.typescript", level: 4, icon: "devicon-typescript-plain colored" },
    { id: "h-8", nameKey: "skills.names.redis", level: 4, icon: "devicon-redis-plain colored" },
  ],
  "soft": [
    { id: "s-1", nameKey: "skills.names.problem-solving", level: 9 },
    { id: "s-2", nameKey: "skills.names.communication", level: 8 },
    { id: "s-3", nameKey: "skills.names.teamwork", level: 8 },
    { id: "s-4", nameKey: "skills.names.flexibility", level: 7 },
    { id: "s-5", nameKey: "skills.names.leadership", level: 7 }
  ]
} as { hard: Skill[], soft: Skill[] };

export const switches = [
  {
    name: "Skills",
    options: [
      {value: "hard", label: "HARD", labelType: "text"},
      {value: "soft", label: "SOFT", labelType: "text"},
    ]
  },
  {
    name: "Display",
    options: [
      {value: "circles", label: "facirclenotch", labelType: "icon"},
      {value: "graph", label: "aioutlineradarchart", labelType: "icon"},
    ]
  }
] as SwitchType[];