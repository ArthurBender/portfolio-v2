import type { Experience } from "../types";

const dbaImg = "/images/experiences/dba.jpeg";
const ifscImg = "/images/experiences/ifsc.png";
const fetchlyImg = "/images/experiences/fetchly.png";

export const experiences: Experience[] = [
  {
    id: 1,
    start: 2017,
    end: 2019,
    company: "DBA Tecnologia",
    positionKey: "experiences.positions.webDevelopmentIntern",
    descriptionKey: "experiences.descriptions.dba1",
    image: dbaImg
  },
  {
    id: 2,
    start: 2019,
    end: 2021,
    company: "DBA Tecnologia",
    positionKey: "experiences.positions.juniorFullStackDeveloper",
    descriptionKey: "experiences.descriptions.dba2",
    image: dbaImg
  },
  {
    id: 3,
    start: 2020,
    end: 2023,
    company: "IFSC",
    positionKey: "experiences.positions.student",
    descriptionKey: "experiences.descriptions.ifsc",
    image: ifscImg
  },
  {
    id: 4,
    start: 2021,
    end: 2023,
    company: "DBA Tecnologia",
    positionKey: "experiences.positions.midLevelFullStackDeveloper",
    descriptionKey: "experiences.descriptions.dba3",
    image: dbaImg
  },
  {
    id: 5,
    start: 2023,
    end: 2025,
    company: "Fetchly Labs",
    positionKey: "experiences.positions.midLevelFullStackDeveloper",
    descriptionKey: "experiences.descriptions.fetchly",
    image: fetchlyImg
}
];