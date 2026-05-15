import "./Skills.css";
import { useEffect, useRef } from "react";
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
} from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase,
  faCode,
  faServer,
  faCog,
} from "@fortawesome/free-solid-svg-icons";

const CATEGORY_ORDER = ["Frontend", "Backend", "Tools"];

const skillsTranslations = {
  en: {
    title: "My",
    skills: "Skills",
    subtitle: "Technologies I use to design and ship web experiences.",
    stackHint: "Hover a tag to see proficiency.",
    categoryLabels: {
      Frontend: "Frontend",
      Backend: "Backend",
      Tools: "Workflow & tooling",
    },
    countUnit: "items",
  },
  pl: {
    title: "Moje",
    skills: "Umiejętności",
    subtitle:
      "Technologie, z którymi projektuję i wdrażam strony oraz aplikacje.",
    stackHint: "Najedź na znacznik, aby zobaczyć poziom biegłości.",
    categoryLabels: {
      Frontend: "Frontend",
      Backend: "Backend",
      Tools: "Narzędzia i workflow",
    },
    countUnit: "pozycji",
  },
};

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
  { name: "VS Code", icon: faCode, category: "Tools", level: 90 },
  { name: "Webpack", icon: faCog, category: "Tools", level: 60 },
];

export function Skills({ language = "en" }) {
  const rootRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const hintRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const ctx = gsap.context(() => {
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { opacity: 0, y: 44, filter: "blur(8px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: reduceMotion ? 0.2 : 0.85,
            ease: "power3.out",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 88%",
              toggleActions: "play none none reverse",
              fastScrollEnd: true,
            },
          },
        );
      }

      if (subtitleRef.current) {
        gsap.fromTo(
          subtitleRef.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: reduceMotion ? 0.15 : 0.55,
            ease: "power2.out",
            scrollTrigger: {
              trigger: subtitleRef.current,
              start: "top 90%",
              toggleActions: "play none none reverse",
              fastScrollEnd: true,
            },
          },
        );
      }

      if (hintRef.current) {
        gsap.fromTo(
          hintRef.current,
          { opacity: 0 },
          {
            opacity: 1,
            duration: reduceMotion ? 0.15 : 0.45,
            delay: reduceMotion ? 0 : 0.12,
            scrollTrigger: {
              trigger: hintRef.current,
              start: "top 92%",
              toggleActions: "play none none reverse",
              fastScrollEnd: true,
            },
          },
        );
      }

      const panels = gsap.utils.toArray(root.querySelectorAll(".skills-panel"));
      panels.forEach((panel, panelIndex) => {
        const head = panel.querySelector(".skills-panel__head");
        const chips = panel.querySelectorAll(".skills-chip");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: panel,
            start: "top 86%",
            toggleActions: "play none none reverse",
            fastScrollEnd: true,
          },
        });

        if (reduceMotion) {
          tl.set(panel, { opacity: 1 }).set([head, ...chips], { opacity: 1 });
          return;
        }

        tl.fromTo(
          panel,
          {
            opacity: 0,
            y: 52,
            rotateX: 6,
            transformPerspective: 1100,
          },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.72,
            ease: "power3.out",
            delay: panelIndex * 0.04,
          },
        )
          .fromTo(
            head,
            { opacity: 0, x: -28 },
            { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" },
            "-=0.45",
          )
          .fromTo(
            chips,
            {
              opacity: 0,
              y: 22,
              scale: 0.9,
              rotation: () => gsap.utils.random(-4, 4),
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              rotation: 0,
              duration: 0.48,
              stagger: 0.04,
              ease: "back.out(1.35)",
            },
            "-=0.35",
          );
      });
    }, root);

    return () => {
      ctx.revert();
    };
  }, [language]);

  const t = skillsTranslations[language];

  return (
    <div className="skills-container" ref={rootRef}>
      <header className="skills-header">
        <h1 className="skills-title" ref={titleRef}>
          {t.title} <span className="skills-title-accent">{t.skills}</span>
        </h1>
        <p className="skills-subtitle" ref={subtitleRef}>
          {t.subtitle}
        </p>
        <p className="skills-hint" ref={hintRef}>
          {t.stackHint}
        </p>
      </header>

      <div className="skills-bento">
        {CATEGORY_ORDER.map((category) => {
          const items = skillsData.filter((s) => s.category === category);
          return (
            <article
              key={category}
              className="skills-panel"
              data-category={category}
            >
              <div className="skills-panel__sheen" aria-hidden />
              <header className="skills-panel__head">
                <h2 className="skills-panel__title">
                  {t.categoryLabels[category]}
                </h2>
                <span className="skills-panel__badge">
                  {items.length} {t.countUnit}
                </span>
              </header>
              <ul className="skills-chip-cloud" role="list">
                {items.map((skill) => (
                  <li
                    key={skill.name}
                    className="skills-chip"
                    style={{ "--level": skill.level }}
                    title={`${skill.name} — ${skill.level}%`}
                  >
                    <span className="skills-chip__accent" aria-hidden />
                    <FontAwesomeIcon
                      className="skills-chip__icon"
                      icon={skill.icon}
                    />
                    <span className="skills-chip__name">{skill.name}</span>
                    <span className="skills-chip__gauge" aria-hidden>
                      <span
                        className="skills-chip__gauge-fill"
                        style={{ width: `${skill.level}%` }}
                      />
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </div>
  );
}
