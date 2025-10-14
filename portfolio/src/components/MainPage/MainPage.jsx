import LightRays from "../LightRays/LightRays";
import "./MainPage.css";
import TextType from "../TextType/TextType";
import { About } from "../About/About";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Skills } from "../Skills/Skills";
import { Projects } from "../Projects/Projects";
import { useState, useEffect, useRef } from "react";
import { Contact } from "../Contact/Contact";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const translations = {
  en: {
    home: "Home",
    about: "About",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",
    greeting: "Hi ! I'm Mikołaj Siwiecki",
    subtitle:
      "I make web application and websites. Specializing in front-end but also know back-end.",
    viewWork: "View My Work",
    scroll: "Scroll",
  },
  pl: {
    home: "Strona główna",
    about: "O mnie",
    skills: "Umiejętności",
    projects: "Projekty",
    contact: "Kontakt",
    greeting: "Cześć! Jestem Mikołaj Siwiecki",
    subtitle:
      "Tworzę aplikacje webowe i strony internetowe. Specjalizuję się w front-endzie, ale znam też back-end.",
    viewWork: "Zobacz moje prace",
    scroll: "Przewiń",
  },
};

export function MainPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState("en");

  // Refs for animations
  const welcomeRef = useRef(null);
  const textTypeRef = useRef(null);
  const smTextTypeRef = useRef(null);
  const buttonRef = useRef(null);
  const scrollBoxRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (welcomeRef.current) {
        gsap.fromTo(
          welcomeRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
          }
        );
      }

      if (buttonRef.current) {
        gsap.fromTo(
          buttonRef.current,
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            delay: 3.5,
            ease: "back.out(1.7)",
          }
        );
      }

      if (scrollBoxRef.current) {
        gsap.fromTo(
          scrollBoxRef.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: 4,
            ease: "power2.out",
          }
        );
      }

      if (aboutRef.current) {
        gsap.fromTo(
          aboutRef.current,
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: aboutRef.current,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse",
              fastScrollEnd: true,
              preventOverlaps: true,
            },
          }
        );
      }

      if (skillsRef.current) {
        gsap.fromTo(
          skillsRef.current,
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: skillsRef.current,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse",
              fastScrollEnd: true,
              preventOverlaps: true,
            },
          }
        );
      }

      if (projectsRef.current) {
        gsap.fromTo(
          projectsRef.current,
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: projectsRef.current,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse",
              fastScrollEnd: true,
              preventOverlaps: true,
            },
          }
        );
      }

      if (contactRef.current) {
        gsap.fromTo(
          contactRef.current,
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: contactRef.current,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse",
              fastScrollEnd: true,
              preventOverlaps: true,
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
          trigger.trigger === welcomeRef.current ||
          trigger.trigger === aboutRef.current ||
          trigger.trigger === skillsRef.current ||
          trigger.trigger === projectsRef.current ||
          trigger.trigger === contactRef.current
        ) {
          trigger.kill();
        }
      });
    };
  }, []);
  return (
    <div className="MainPageContainer">
      {/* Global fixed NavBar */}
      <div className="NavBar">
        <div className="Logo">Mikolaj.dev</div>
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
          <a href="#home">{translations[language].home}</a>
          <a href="#about">{translations[language].about}</a>
          <a href="#skills">{translations[language].skills}</a>
          <a href="#projects">{translations[language].projects}</a>

          <a href="#contact">{translations[language].contact}</a>
        </div>
        <button
          className="language-btn"
          onClick={() => setLanguage(language === "en" ? "pl" : "en")}
          title="Switch Language"
        >
          {language === "en" ? "PL" : "EN"}
        </button>
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
      <div className="WelcomeSection" id="home" ref={welcomeRef}>
        <div className="welcomeContainer">
          <TextType
            key={`greeting-${language}`}
            text={[translations[language].greeting]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={false}
            cursorCharacter="|"
            textColors={["#9d03fc"]}
            className="TextType"
            style={{ color: "white" }}
          />
          <TextType
            key={`subtitle-${language}`}
            text={[translations[language].subtitle]}
            typingSpeed={60}
            pauseDuration={1500}
            showCursor={false}
            cursorCharacter="|"
            textColors={["white"]}
            style={{ color: "white" }}
            initialDelay={2000}
            className="smTextType"
          />
          <a className="VMWbutton" href="#projects" ref={buttonRef}>
            {translations[language].viewWork}
          </a>
        </div>
        <div className="scrollBox" ref={scrollBoxRef}>
          <FontAwesomeIcon icon={faArrowDown} />
          <span>{translations[language].scroll}</span>
        </div>
      </div>

      {/* About Section - Separate section below */}
      <div className="AboutSection" id="about" ref={aboutRef}>
        <About language={language} />
      </div>
      <div className="skillSection" id="skills" ref={skillsRef}>
        <Skills language={language} />
      </div>
      <div className="projectSection" id="projects" ref={projectsRef}>
        <Projects language={language} />
      </div>
      <div className="ContactSection" id="contact" ref={contactRef}>
        <Contact language={language}></Contact>
      </div>
    </div>
  );
}
