import "./Skills.css";
import ScrollStack, { ScrollStackItem } from "../ScrollStack/ScrollStack";

export function Skills() {
  return (
    <div className="skills-container">
      <h1 className="skills-title">
        My <span style={{ color: "#9d03fc" }}>Skills</span>
      </h1>
      <ScrollStack>
        <ScrollStackItem>
          <div className="stackItem1">
            <h2>Frontend Development</h2>
            <p>React, JavaScript, HTML, CSS, TypeScript</p>
          </div>
        </ScrollStackItem>
        <ScrollStackItem>
          <div className="stackItem2">
            <h2>Frontend Development</h2>
            <p>React, JavaScript, HTML, CSS, TypeScript</p>
          </div>
        </ScrollStackItem>
        <ScrollStackItem>
          <div className="stackItem1">
            <h2>Frontend Development</h2>
            <p>React, JavaScript, HTML, CSS, TypeScript</p>
          </div>
        </ScrollStackItem>
        <ScrollStackItem>
          <div className="stackItem2">
            <h2>Frontend Development</h2>
            <p>React, JavaScript, HTML, CSS, TypeScript</p>
          </div>
        </ScrollStackItem>
      </ScrollStack>
    </div>
  );
}
