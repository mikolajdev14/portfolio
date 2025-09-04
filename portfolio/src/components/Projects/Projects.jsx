import { Carousel } from "../Carousel/Carousel";
import "./Projects.css";

export function Projects() {
  return (
    <div className="ProjectsContainer">
      <h1 className="projectsTitle">Featured Projects</h1>
      <div className="carouselContainer">
        <Carousel />
      </div>
    </div>
  );
}
