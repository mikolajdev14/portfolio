import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { faMobileScreen } from "@fortawesome/free-solid-svg-icons";

export function About() {
  return (
    <div
      style={{
        zIndex: 1,
        width: "100%",
        height: "100%",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>
        About <span style={{ color: "#9d03fc" }}>me</span>
      </h1>
      <div className="aboutBox">
        <div className="msgContainer">
          <h2>Passionate Web Developer & Tech Creator</h2>
          <p>
            I'm passionate about crating elegant solution to complex problems,
            and I'm constantly learninng new technologies and techniques to stay
            at the forefrsont of the ever-evolving web landscape.
          </p>
        </div>
        <div className="box">
          <div>
            <div>
              <FontAwesomeIcon className="icon" icon={faDesktop} />
              <h4>Websites</h4>
            </div>
            <p>Creating websites using modern technologies like react</p>
          </div>
          <div>
            <div>
              <FontAwesomeIcon className="icon" icon={faCode} />
              <h4>Web Application</h4>
            </div>
            <p>Creating websites using modern technologies like react</p>
          </div>
          <div>
            <div>
              <FontAwesomeIcon className="icon" icon={faMobileScreen} />
              <h4>Mobile Application</h4>
            </div>
            <p>
              Creating mobile applications using modern technologies like react
              native
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
