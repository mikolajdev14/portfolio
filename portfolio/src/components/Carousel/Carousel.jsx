import { ProjectCard } from "../ProjectCard/ProjectCard";
import "./Carousel.css";
import { useState } from "react";
import codeImage from "../../assets/code.png";

const initProjects = [
  {
    ref: "a",
    img: codeImage,
    description: "Ecommerce Store",
  },
  {
    ref: "a",
    img: codeImage,
    description: "Movie App",
  },
  {
    ref: "a",
    img: codeImage,
    description: "To do List",
  },
];

export function Carousel() {
  let [projects, setProjects] = useState(initProjects);

  return (
    <div className="box">
      {projects.map((project) => (
        <ProjectCard
          ref={project.ref}
          img={project.img}
          description={project.description}
        ></ProjectCard>
      ))}
    </div>
  );
}
