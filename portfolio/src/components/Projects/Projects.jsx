import "./Projects.css";
import { useEffect, useRef, useState, lazy, Suspense } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Carousel = lazy(() =>
  import("../Carousel/Carousel").then((module) => ({
    default: module.Carousel,
  })),
);

gsap.registerPlugin(ScrollTrigger);

const projectsTranslations = {
  en: {
    featured: "Featured",
    projects: "Projects",
  },
  pl: {
    featured: "Wybrane",
    projects: "Projekty",
  },
};

export function Projects({ language = "en" }) {
  const titleRef = useRef(null);
  const carouselRef = useRef(null);
  const [shouldLoadCarousel, setShouldLoadCarousel] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 90%",
              toggleActions: "play none none reverse",
              fastScrollEnd: true,
            },
          },
        );
      }

      if (carouselRef.current) {
        gsap.fromTo(
          carouselRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: carouselRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
              fastScrollEnd: true,
            },
          },
        );
      }

      ScrollTrigger.refresh();
    }, 50);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach((trigger) => {
        if (
          trigger.trigger === titleRef.current ||
          trigger.trigger === carouselRef.current
        ) {
          trigger.kill();
        }
      });
    };
  }, []);

  useEffect(() => {
    if (!carouselRef.current || shouldLoadCarousel) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const isVisible = entries.some((entry) => entry.isIntersecting);
        if (isVisible) {
          setShouldLoadCarousel(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: "250px 0px",
        threshold: 0.1,
      },
    );

    observer.observe(carouselRef.current);

    return () => {
      observer.disconnect();
    };
  }, [shouldLoadCarousel]);

  return (
    <div className="ProjectsContainer">
      <h1 className="projectsTitle" ref={titleRef}>
        {projectsTranslations[language].featured}{" "}
        <span style={{ color: "#9d03fc" }}>
          {projectsTranslations[language].projects}
        </span>
      </h1>
      <div className="carouselContainer" ref={carouselRef}>
        <Suspense
          fallback={
            <div className="carouselFallback" aria-hidden="true">
              <div className="carouselFallbackCard" />
              <div className="carouselFallbackCard" />
              <div className="carouselFallbackCard" />
            </div>
          }
        >
          {shouldLoadCarousel ? (
            <Carousel language={language} />
          ) : (
            <div className="carouselFallback" aria-hidden="true">
              <div className="carouselFallbackCard" />
              <div className="carouselFallbackCard" />
              <div className="carouselFallbackCard" />
            </div>
          )}
        </Suspense>
      </div>
    </div>
  );
}
