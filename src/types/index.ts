export interface Project {
  id: number;
  nameKey: string;
  link?: string;
  repository?: string;
  descriptionKey?: string;
  image?: string;
  tags?: string[];
  todo?: boolean;
}

export interface Skill {
  id: string;
  nameKey: string;
  level: number;
  icon?: string;
}

export interface Experience {
  id: number;
  start: number;
  end?: number;
  company: string;
  positionKey: string;
  descriptionKey: string;
  image: string;
}

export interface SwitchType {
  name: string;
  options: {
    value: string;
    label: string;
    labelType: "text" | "icon";
  }[];
}