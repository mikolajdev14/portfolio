import { Carousel } from "../Carousel/Carousel";
import "./Projects.css";

export function Projects() {
  return (
    <div className="ProjectsContainer">
      <h1 className="projectsTitle">
        Featured <span style={{ color: "#9d03fc" }}>Projects</span>
      </h1>
      <div className="carouselContainer">
        <Carousel />
      </div>
    </div>
  );
}
