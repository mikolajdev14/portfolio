import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
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
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const titleText = project.title || project.description || "";
  const descriptionText = project.description || "";
  const textDensity = `${titleText} ${descriptionText}`.length;
  const technologiesCount = project.technologies?.length || 0;

  let sizeClass = "";
  if (textDensity > 300 || technologiesCount > 5) {
    sizeClass = "project--ultra";
  } else if (textDensity > 220 || language === "pl") {
    sizeClass = "project--compact";
  }

  useEffect(() => {
    if (!isLightboxOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEsc = (event) => {
      if (event.key === "Escape") {
        setIsLightboxOpen(false);
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isLightboxOpen]);

  return (
    <>
      <div className={`project ${sizeClass}`.trim()}>
        <button
          className="project-image project-image-button"
          type="button"
          onClick={() => setIsLightboxOpen(true)}
          aria-label={
            language === "pl"
              ? `Powiększ podgląd projektu ${titleText}`
              : `Open full preview for ${titleText}`
          }
        >
          <img
            src={project.img}
            alt={project.title || project.description}
            loading="lazy"
            decoding="async"
          />
        </button>

        <div className="project-content">
          <h3 className="project-title">{titleText}</h3>
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

      {isLightboxOpen &&
        createPortal(
          <div
            className="project-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={
              language === "pl" ? "Podgląd projektu" : "Project preview"
            }
            onClick={() => setIsLightboxOpen(false)}
          >
            <button
              type="button"
              className="project-lightbox-close"
              onClick={() => setIsLightboxOpen(false)}
              aria-label={
                language === "pl" ? "Zamknij podgląd" : "Close preview"
              }
            >
              ✕
            </button>
            <div
              className="project-lightbox-content"
              onClick={(event) => event.stopPropagation()}
            >
              <img
                src={project.img}
                alt={project.title || project.description}
              />
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
