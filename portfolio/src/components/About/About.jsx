import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { faMobileScreen } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const aboutTranslations = {
  en: {
    title: "About",
    me: "me",
    heading: "Passionate Web Developer & Tech Creator",
    description:
      "I'm passionate about creating elegant solutions to complex problems, and I'm constantly learning new technologies and techniques to stay at the forefront of the ever-evolving web landscape.",
    websites: "Websites",
    websitesDesc: "Creating websites using modern technologies like React",
    webApps: "Web Application",
    webAppsDesc:
      "Creating web applications using modern technologies like React",
    mobileApps: "Mobile Application",
    mobileAppsDesc:
      "Creating mobile applications using modern technologies like React Native",
  },
  pl: {
    title: "O",
    me: "mnie",
    heading: "Pasjonat Rozwoju Webowego i Twórca Technologii",
    description:
      "Jestem pasjonatem tworzenia eleganckich rozwiązań dla złożonych problemów i stale uczę się nowych technologii i technik, aby pozostać na czele ciągle ewoluującego krajobrazu internetowego.",
    websites: "Strony internetowe",
    websitesDesc:
      "Tworzenie stron internetowych przy użyciu nowoczesnych technologii jak React",
    webApps: "Aplikacje webowe",
    webAppsDesc:
      "Tworzenie aplikacji webowych przy użyciu nowoczesnych technologii jak React",
    mobileApps: "Aplikacje mobilne",
    mobileAppsDesc:
      "Tworzenie aplikacji mobilnych przy użyciu nowoczesnych technologii jak React Native",
  },
};

export function About({ language = "en" }) {
  const titleRef = useRef(null);
  const msgRef = useRef(null);
  const boxesRef = useRef(null);

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

      if (msgRef.current) {
        gsap.fromTo(
          msgRef.current,
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: msgRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
              fastScrollEnd: true,
            },
          }
        );
      }

      if (boxesRef.current && boxesRef.current.children.length > 0) {
        gsap.fromTo(
          boxesRef.current.children,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: boxesRef.current,
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
          trigger.trigger === msgRef.current ||
          trigger.trigger === boxesRef.current
        ) {
          trigger.kill();
        }
      });
    };
  }, []);

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
      <h1 className="aboutTitle" ref={titleRef}>
        {aboutTranslations[language].title}{" "}
        <span style={{ color: "#9d03fc" }}>
          {aboutTranslations[language].me}
        </span>
      </h1>
      <div className="aboutBox">
        <div className="msgContainer" ref={msgRef}>
          <h2>{aboutTranslations[language].heading}</h2>
          <p>{aboutTranslations[language].description}</p>
        </div>
        <div className="box" ref={boxesRef}>
          <div>
            <div>
              <FontAwesomeIcon className="icon" icon={faDesktop} />
              <h4>{aboutTranslations[language].websites}</h4>
            </div>
            <p>{aboutTranslations[language].websitesDesc}</p>
          </div>
          <div>
            <div>
              <FontAwesomeIcon className="icon" icon={faCode} />
              <h4>{aboutTranslations[language].webApps}</h4>
            </div>
            <p>{aboutTranslations[language].webAppsDesc}</p>
          </div>
          <div>
            <div>
              <FontAwesomeIcon className="icon" icon={faMobileScreen} />
              <h4>{aboutTranslations[language].mobileApps}</h4>
            </div>
            <p>{aboutTranslations[language].mobileAppsDesc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
