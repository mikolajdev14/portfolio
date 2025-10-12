import "./Carousel.css";
import { useState, useEffect } from "react";
import codeImage from "../../assets/code.png";
import portfolioImage from "../../assets/image.png";
import progressImg from "../../assets/progress.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProjectCard } from "../ProjectCard/ProjectCard";

const projectTranslations = {
  en: [
    {
      ref: "portfolio",
      img: portfolioImage,
      title: "Personal Portfolio Website",
      description:
        "A modern, responsive portfolio website built with React, featuring smooth animations, interactive elements, and a clean design. Includes sections for projects, skills, and contact information.",
      technologies: ["React", "JavaScript", "CSS", "GSAP", "Lenis"],
      github: "https://github.com/mikolajdev14/portfolio",
      live: "https://mikolajdev14.github.io/portfolio",
    },
    {
      ref: "ecommerce",
      img: progressImg,
      title: "E-commerce Platform",
      description:
        "Full-stack e-commerce solution with user authentication, product management, shopping cart functionality, and payment integration. Features responsive design and modern UI/UX.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe API"],
      github: "https://github.com/mikolajdev14/ecommerce-platform",
      live: "https://your-ecommerce-demo.com",
    },
    {
      ref: "taskmanager",
      img: progressImg,
      title: "Task Management App",
      description:
        "A comprehensive task management application with drag-and-drop functionality, real-time collaboration, deadline tracking, and progress visualization. Built with modern web technologies.",
      technologies: [
        "React",
        "TypeScript",
        "Firebase",
        "Material-UI",
        "React DnD",
      ],
      github: "https://github.com/mikolajdev14/task-manager",
      live: "https://taskmanager-demo.netlify.app",
    },
  ],
  pl: [
    {
      ref: "portfolio",
      img: portfolioImage,
      title: "Osobista strona portfolio",
      description:
        "Nowoczesna, responsywna strona portfolio zbudowana w React, z płynnymi animacjami, interaktywnymi elementami i czystym designem. Zawiera sekcje projektów, umiejętności i informacje kontaktowe.",
      technologies: ["React", "JavaScript", "CSS", "GSAP", "Lenis"],
      github: "https://github.com/mikolajdev14/portfolio",
      live: "https://mikolajdev14.github.io/portfolio",
    },
    {
      ref: "ecommerce",
      img: progressImg,
      title: "Platforma e-commerce",
      description:
        "Pełnostackowe rozwiązanie e-commerce z uwierzytelnianiem użytkowników, zarządzaniem produktami, funkcjonalnością koszyka zakupów i integracją płatności. Funkcje responsywny design i nowoczesny UI/UX.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe API"],
      github: "https://github.com/mikolajdev14/ecommerce-platform",
      live: "https://your-ecommerce-demo.com",
    },
    {
      ref: "taskmanager",
      img: progressImg,
      title: "Aplikacja do zarządzania zadaniami",
      description:
        "Kompleksowa aplikacja do zarządzania zadaniami z funkcją przeciągania i upuszczania, współpracą w czasie rzeczywistym, śledzeniem terminów i wizualizacją postępów. Zbudowana z nowoczesnymi technologiami webowymi.",
      technologies: [
        "React",
        "TypeScript",
        "Firebase",
        "Material-UI",
        "React DnD",
      ],
      github: "https://github.com/mikolajdev14/task-manager",
      live: "https://taskmanager-demo.netlify.app",
    },
  ],
};

const initProjects = projectTranslations.en;

export function Carousel({ language = "en" }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: false, // Fixed height cards, no need for adaptive height
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };
  let [projects, setProjects] = useState(projectTranslations[language]);

  useEffect(() => {
    setProjects(projectTranslations[language]);
  }, [language]);

  return isMobile ? (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        alignItems: "center",
        padding: "0 1rem",
      }}
    >
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} language={language} />
      ))}
    </div>
  ) : (
    <Slider {...settings}>
      {projects.map((project, index) => (
        <div key={index}>
          <ProjectCard project={project} language={language} />
        </div>
      ))}
    </Slider>
  );
}
