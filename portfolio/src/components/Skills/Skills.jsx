import "./Skills.css";
import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import {
  faCss3,
  faHtml5,
  faJs,
  faNodeJs,
  faReact,
  faPython,
  faGitAlt,
  faBootstrap,
  faSass,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase,
  faCode,
  faServer,
  faCog,
} from "@fortawesome/free-solid-svg-icons";

const skillsTranslations = {
  en: {
    title: "My",
    skills: "Skills",
    all: "All",
    frontend: "Frontend",
    backend: "Backend",
    tools: "Tools",
  },
  pl: {
    title: "Moje",
    skills: "Umiejętności",
    all: "Wszystkie",
    frontend: "Frontend",
    backend: "Backend",
    tools: "Narzędzia",
  },
};

export function Skills({ language = "en" }) {
  const [activeFilter, setActiveFilter] = useState("All");

  const titleRef = useRef(null);
  const navRef = useRef(null);
  const skillsRef = useRef(null);

  useEffect(() => {
    setActiveFilter("All");
  }, [language]);

  const skillsData = [
    { name: "JavaScript", icon: faJs, category: "Frontend", level: 90 },
    { name: "React", icon: faReact, category: "Frontend", level: 85 },
    { name: "HTML5", icon: faHtml5, category: "Frontend", level: 95 },
    { name: "CSS3", icon: faCss3, category: "Frontend", level: 90 },
    { name: "SASS", icon: faSass, category: "Frontend", level: 80 },
    { name: "Bootstrap", icon: faBootstrap, category: "Frontend", level: 85 },
    { name: "Node.js", icon: faNodeJs, category: "Backend", level: 75 },
    { name: "Python", icon: faPython, category: "Backend", level: 70 },
    { name: "MongoDB", icon: faDatabase, category: "Backend", level: 65 },
    { name: "Express", icon: faServer, category: "Backend", level: 70 },
    { name: "Git", icon: faGitAlt, category: "Tools", level: 85 },
    { name: "Figma", icon: faFigma, category: "Tools", level: 75 },
    { name: "VS Code", icon: faCode, category: "Tools", level: 90 },
    { name: "Webpack", icon: faCog, category: "Tools", level: 60 },
  ];

  const categories = [
    { display: skillsTranslations[language].all, value: "All" },
    { display: skillsTranslations[language].frontend, value: "Frontend" },
    { display: skillsTranslations[language].backend, value: "Backend" },
    { display: skillsTranslations[language].tools, value: "Tools" },
  ];

  const filteredSkills = skillsData.filter(
    (skill) => activeFilter === "All" || skill.category === activeFilter
  );

  const handleFilterChange = (category) => {
    setActiveFilter(category);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (skillsRef.current && skillsRef.current.children.length > 0) {
        const skillBoxes = skillsRef.current.children;

        gsap.set(skillBoxes, { opacity: 0, y: 20, scale: 0.9 });

        gsap.to(skillBoxes, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.4,
          stagger: 0.05,
          ease: "power2.out",
        });

        ScrollTrigger.refresh();
      }
    }, 10);

    return () => clearTimeout(timer);
  }, [activeFilter]);

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
          }
        );
      }

      if (navRef.current) {
        gsap.fromTo(
          navRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: navRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
              fastScrollEnd: true,
            },
          }
        );
      }

      if (skillsRef.current && skillsRef.current.children.length > 0) {
        gsap.fromTo(
          skillsRef.current.children,
          { opacity: 0, y: 50, scale: 0.8 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: skillsRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
              fastScrollEnd: true,
            },
          }
        );
      }

      ScrollTrigger.refresh();
    }, 50);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach((trigger) => {
        if (
          trigger.trigger === titleRef.current ||
          trigger.trigger === navRef.current ||
          trigger.trigger === skillsRef.current
        ) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <div className="skills-container">
      <h1 className="skills-title" ref={titleRef}>
        {skillsTranslations[language].title}{" "}
        <span style={{ color: "#9d03fc" }}>
          {skillsTranslations[language].skills}
        </span>
      </h1>

      <div className="skillsNav" ref={navRef}>
        <ul className="skillsUl">
          {categories.map((category) => (
            <li
              key={category.value}
              className={activeFilter === category.value ? "active" : ""}
              onClick={() => handleFilterChange(category.value)}
            >
              {category.display}
            </li>
          ))}
        </ul>
      </div>

      <div className="skillsMain" ref={skillsRef}>
        {filteredSkills.map((skill, index) => (
          <div
            key={skill.name}
            className="skillBox"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="skillContent">
              <FontAwesomeIcon className="skillIcon" icon={skill.icon} />
              <h3 className="skillName">{skill.name}</h3>
              <div className="skillLevel">
                <div
                  className="skillProgress"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span className="skillPercentage">{skill.level}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
