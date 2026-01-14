import type { JSX } from "react";


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
  name: string;
  level: number;
  icon?: JSX.Element;
}

export interface Experience {
  id: number;
  start: number;
  end?: number;
  company: string;
  position: string;
  description: string;
  image: string;
}