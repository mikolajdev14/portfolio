import LightRays from "../LightRays/LightRays";
import "./MainPage.css";
import TextType from "../TextType/TextType";
import { About } from "../About/About";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Skills } from "../Skills/Skills";
import { Projects } from "../Projects/Projects";

export function MainPage() {
  return (
    <div className="MainPageContainer">
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
      <div className="WelcomeSection">
        <div className="NavBar">
          <div className="Logo">Mikolaj.</div>
          <div className="Links">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Projects</a>
            <a href="">Skills</a>
            <a href="">Contact</a>
          </div>
        </div>
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
          <button className="VMWbutton">View My Work</button>
        </div>
        <div className="scrollBox">
          <FontAwesomeIcon icon={faArrowDown} />
          <span>Scroll</span>
        </div>
      </div>

      {/* About Section - Separate section below */}
      <div className="AboutSection">
        <About />
      </div>
      <div className="skillSection">
        <Skills />
      </div>
      <div className="projectSection">
        <Projects />
      </div>
    </div>
  );
}
