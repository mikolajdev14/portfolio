import "./Carousel.css";
import { useState, useEffect } from "react";
import codeImage from "../../assets/code.png";
import portfolioImage from "../../assets/image.png";
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
      img: codeImage,
      title: "E-commerce Platform",
      description:
        "Full-stack e-commerce solution with user authentication, product management, shopping cart functionality, and payment integration. Features responsive design and modern UI/UX.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe API"],
      github: "https://github.com/mikolajdev14/ecommerce-platform",
      live: "https://your-ecommerce-demo.com",
    },
    {
      ref: "taskmanager",
      img: codeImage,
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
    {
      ref: "weather",
      img: codeImage,
      title: "Weather Dashboard",
      description:
        "Interactive weather application with location-based forecasts, weather maps, historical data, and personalized weather alerts. Features beautiful data visualizations and responsive design.",
      technologies: [
        "JavaScript",
        "OpenWeather API",
        "Chart.js",
        "CSS Grid",
        "Geolocation API",
      ],
      github: "https://github.com/mikolajdev14/weather-dashboard",
      live: "https://weather-app-demo.vercel.app",
    },
    {
      ref: "social",
      img: codeImage,
      title: "Social Media Platform",
      description:
        "Full-featured social media application with user profiles, posts, comments, likes, real-time messaging, and content sharing. Includes advanced features like content moderation and analytics.",
      technologies: [
        "React",
        "Node.js",
        "Socket.io",
        "PostgreSQL",
        "AWS S3",
        "Redis",
      ],
      github: "https://github.com/mikolajdev14/social-platform",
      live: "https://social-app-demo.herokuapp.com",
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
      img: codeImage,
      title: "Platforma e-commerce",
      description:
        "Pełnostackowe rozwiązanie e-commerce z uwierzytelnianiem użytkowników, zarządzaniem produktami, funkcjonalnością koszyka zakupów i integracją płatności. Funkcje responsywny design i nowoczesny UI/UX.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe API"],
      github: "https://github.com/mikolajdev14/ecommerce-platform",
      live: "https://your-ecommerce-demo.com",
    },
    {
      ref: "taskmanager",
      img: codeImage,
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
    {
      ref: "weather",
      img: codeImage,
      title: "Panel pogodowy",
      description:
        "Interaktywna aplikacja pogodowa z prognozami opartymi na lokalizacji, mapami pogody, danymi historycznymi i spersonalizowanymi alertami pogodowymi. Funkcje piękne wizualizacje danych i responsywny design.",
      technologies: [
        "JavaScript",
        "OpenWeather API",
        "Chart.js",
        "CSS Grid",
        "Geolocation API",
      ],
      github: "https://github.com/mikolajdev14/weather-dashboard",
      live: "https://weather-app-demo.vercel.app",
    },
    {
      ref: "social",
      img: codeImage,
      title: "Platforma mediów społecznościowych",
      description:
        "Pełnofunkcjonalna aplikacja mediów społecznościowych z profilami użytkowników, postami, komentarzami, polubieniami, wiadomościami w czasie rzeczywistym i udostępnianiem treści. Zawiera zaawansowane funkcje jak moderacja treści i analityka.",
      technologies: [
        "React",
        "Node.js",
        "Socket.io",
        "PostgreSQL",
        "AWS S3",
        "Redis",
      ],
      github: "https://github.com/mikolajdev14/social-platform",
      live: "https://social-app-demo.herokuapp.com",
    },
  ],
};

const initProjects = projectTranslations.en;

export function Carousel({ language = "en" }) {
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

  return (
    <Slider {...settings}>
      {projects.map((project, index) => (
        <div key={index}>
          <ProjectCard project={project} language={language} />
        </div>
      ))}
    </Slider>
  );
}
