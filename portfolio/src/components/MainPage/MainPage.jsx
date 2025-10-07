import LightRays from "../LightRays/LightRays";
import "./MainPage.css";
import TextType from "../TextType/TextType";
import { About } from "../About/About";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Skills } from "../Skills/Skills";
import { Projects } from "../Projects/Projects";
import { useState } from "react";
import { Contact } from "../Contact/Contact";

export function MainPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="MainPageContainer">
      {/* Global fixed NavBar */}
      <div className="NavBar">
        <div className="Logo">Mikolaj.</div>
        <button
          className="MenuToggle"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          type="button"
        >
          ☰
        </button>
        <div
          className={`Links ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(false)}
        >
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>

          <a href="#contact">Contact</a>
        </div>
      </div>

      {/* LightRays as background */}
      <div className="LightRaysContainer">
        <LightRays
          raysOrigin="top-center"
          raysColor="#9d03fc"
          raysSpeed={1.5}
          lightSpread={1}
          rayLength={100}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="background-rays"
        />
      </div>

      {/* Welcome Section - Centered in viewport */}
      <div className="WelcomeSection" id="home">
        <div className="welcomeContainer">
          <TextType
            text={["Hi ! I'm Mikołaj Siwiecki"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={false}
            cursorCharacter="|"
            textColors={["#9d03fc"]}
            className="TextType"
            style={{ color: "white" }}
          />
          <TextType
            text={[
              "I made web application and websites. Specializing in front-end but also know back-end.",
            ]}
            typingSpeed={60}
            pauseDuration={1500}
            showCursor={false}
            cursorCharacter="|"
            textColors={["white"]}
            style={{ color: "white" }}
            initialDelay={2000}
            className="smTextType"
          />
          <a className="VMWbutton" href="#projects">
            View My Work
          </a>
        </div>
        <div className="scrollBox">
          <FontAwesomeIcon icon={faArrowDown} />
          <span>Scroll</span>
        </div>
      </div>

      {/* About Section - Separate section below */}
      <div className="AboutSection" id="about">
        <About />
      </div>
      <div className="skillSection" id="skills">
        <Skills />
      </div>
      <div className="projectSection" id="projects">
        <Projects />
      </div>
      {/* Placeholder anchor target for Contact if/until real section exists */}
      <div className="ContactSection" id="contact">
        <Contact></Contact>
      </div>
    </div>
  );
}
