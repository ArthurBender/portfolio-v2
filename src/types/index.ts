import type { JSX } from "react";

export interface Skill {
  name: string;
  level: number;
  icon?: JSX.Element;
}

export interface Project {
  id: number;
  name: string;
  link?: string;
  repository?: string;
  description?: string;
  image?: string;
  tags?: string[];
  todo?: boolean;
}

export interface Experience {
  id: number;
  start: number;
  end?: number;
  company: string;
  position: string;
  description: string;
}