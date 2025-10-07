import "./Skills.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

export function Skills() {
  const [activeFilter, setActiveFilter] = useState("All");

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

  const categories = ["All", "Frontend", "Backend", "Tools"];

  const filteredSkills = skillsData.filter(
    (skill) => activeFilter === "All" || skill.category === activeFilter
  );

  const handleFilterChange = (category) => {
    setActiveFilter(category);
  };

  return (
    <div className="skills-container">
      <h1 className="skills-title">
        My <span style={{ color: "#9d03fc" }}>Skills</span>
      </h1>

      <div className="skillsNav">
        <ul className="skillsUl">
          {categories.map((category) => (
            <li
              key={category}
              className={activeFilter === category ? "active" : ""}
              onClick={() => handleFilterChange(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>

      <div className="skillsMain">
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
