import "./ProjectCard.css";

const projectCardTranslations = {
  en: {
    liveDemo: "Live Demo",
    github: "GitHub",
  },
  pl: {
    liveDemo: "Demo na żywo",
    github: "GitHub",
  },
};

export function ProjectCard({ project, language = "en" }) {
  return (
    <div className="project">
      <div className="project-image">
        <img src={project.img} alt={project.title || project.description} />
      </div>

      <div className="project-content">
        <h3 className="project-title">
          {project.title || project.description}
        </h3>
        <p className="project-description">{project.description}</p>

        {project.technologies && (
          <div className="project-technologies">
            {project.technologies.map((tech, index) => (
              <span key={index} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="project-links">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link github-link"
          >
            {projectCardTranslations[language].github}
          </a>
        </div>
      </div>
    </div>
  );
}
