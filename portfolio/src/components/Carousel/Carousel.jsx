import "./Carousel.css";
import { useState, useEffect, useMemo } from "react";
import portfolioImage from "../../assets/image.webp";
import cafeImg from "../../assets/cafe.webp";
import personalTrainer from "../../assets/trenerPersonalny.webp";
import productPage from "../../assets/ProductPage.webp";
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
      live: "https://mikolajdev.netlify.app",
    },

    {
      ref: "Cafe Landing Page",
      img: cafeImg,
      title: "Cafe Landing Page",
      description:
        "A modern landing page for a cafe, built with React, TypeScript, Shadcn UI components, and Tailwind CSS. Features responsive design, animations and elegant UI.",
      technologies: ["React", "TypeScript", "Shadcn", "Tailwind"],
      github: "https://github.com/mikolajdev14/Coffe-Shop-Landing-Page",
      live: "https://coffe-shop-landing-page-hqx1gd180-mikolajdev14s-projects.vercel.app/",
    },

    {
      ref: "Personal Trainer Website",
      img: personalTrainer,
      title: "Personal Trainer Website",
      description:
        "A modern website for a personal trainer, built with Next.js, TypeScript, and Tailwind CSS. Features responsive design, animations, and an elegant UI.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/mikolajdev14/personal-trainer-example-page",
      live: "https://personal-trainer-example-page-gojs95ma3-mikolajdev14s-projects.vercel.app/",
    },
    {
      ref: "Sample Product Landing Page",
      img: productPage,
      title: "Sample Product Landing Page",
      description:
        "FlowSync AI is a dark, glass-style one-page SaaS landing (fictional product) built as a portfolio piece. It uses Next.js 14, React, TypeScript, Tailwind, and Framer Motion for layout, motion, and responsive UX.",
      technologies: ["Next.js", "TypeScript", "Framer Motion"],
      github: "https://github.com/mikolajdev14/Sample-Product-Landing-Page",
      live: "https://sample-product-landing-page-7bwdh5t8b-mikolajdev14s-projects.vercel.app/",
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
      live: "https://mikolajdev.netlify.app/",
    },

    {
      ref: "Cafe Landing Page",
      img: cafeImg,
      title: "Strona główna kawiarni",
      description:
        "Nowoczesna strona główna kawiarni, zbudowana w React, TypeScript, komponentach Shadcn UI i Tailwind CSS. Ma responsywny design, animacje i elegancki interfejs użytkownika.",
      technologies: ["React", "TypeScript", "Shadcn", "Tailwind"],
      github: "https://github.com/mikolajdev14/Coffe-Shop-Landing-Page",
      live: "https://coffe-shop-landing-page-hqx1gd180-mikolajdev14s-projects.vercel.app/",
    },

    {
      ref: "Personal Trainer Website",
      img: personalTrainer,
      title: "Strona dla trenera personalnego",
      description:
        "Nowoczesna strona dla trenera personalnego, zbudowana w Next.js, TypeScript i Tailwind CSS. Oferuje responsywny design, animacje i elegancki interfejs użytkownika.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/mikolajdev14/personal-trainer-example-page",
      live: "https://personal-trainer-example-page-gojs95ma3-mikolajdev14s-projects.vercel.app/",
    },
    {
      ref: "Sample Product Landing Page",
      img: productPage,
      title: "Strona główna przykładowego produktu",
      description:
        "FlowSync AI to jednostronicowy landing SaaS w ciemnym, szklanym stylu (fikcyjny produkt), zrobiony pod portfolio. Używa Next.js 14, React, TypeScript, Tailwind i Framer Motion do układu, animacji i responsywnego UX.",
      technologies: ["Next.js", "TypeScript", "Framer Motion"],
      github: "https://github.com/mikolajdev14/Sample-Product-Landing-Page",
      live: "https://sample-product-landing-page-7bwdh5t8b-mikolajdev14s-projects.vercel.app/",
    },
  ],
};

export function Carousel({ language = "en" }) {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth < 768 : false,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const handleChange = (event) => setIsMobile(event.matches);

    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
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
  const projects = useMemo(() => projectTranslations[language], [language]);

  return isMobile ? (
    <div
      className="carousel-mobile-stack"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1.35rem",
        alignItems: "center",
        width: "100%",
        maxWidth: "var(--phone-text-max, 36rem)",
        margin: "0 auto",
        paddingLeft:
          "max(var(--phone-gutter, 1rem), env(safe-area-inset-left, 0px))",
        paddingRight:
          "max(var(--phone-gutter, 1rem), env(safe-area-inset-right, 0px))",
        boxSizing: "border-box",
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
