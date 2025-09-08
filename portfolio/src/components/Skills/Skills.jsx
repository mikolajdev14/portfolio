import "./Skills.css";

export function Skills() {
  return (
    <div className="skills-container">
      <h1 className="skills-title">
        My <span style={{ color: "#9d03fc" }}>Skills</span>
      </h1>
      <div className="skillsNav">
        <ul>
          <li>All</li>
          <li>Frontend</li>
          <li>Backend</li>
          <li>Tools</li>
        </ul>
      </div>
    </div>
  );
}
