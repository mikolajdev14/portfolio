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
    greeting: "Hi ! I'm Mikołaj",
    subtitle:
      "I create modern websites and applications that help businesses attract more customers online.",
    viewWork: "View My Work",
    scroll: "Scroll",
  },
  pl: {
    home: "Strona główna",
    about: "O mnie",
    skills: "Umiejętności",
    projects: "Projekty",
    contact: "Kontakt",
    greeting: "Cześć! Jestem Mikołaj",
    subtitle:
      "Tworzę nowoczesne strony i aplikacje, które pomagają firmom zdobywać więcej klientów online.",
    viewWork: "Zobacz moje prace",
    scroll: "Przewiń",
  },
};

const seoTranslations = {
  en: {
    title: "Mikołaj Siwiecki | Front-End Developer",
    description:
      "I create modern websites and web applications that help businesses attract more customers online.",
    ogLocale: "en_US",
  },
  pl: {
    title: "Mikołaj Siwiecki | Front-End Developer",
    description:
      "Tworzę nowoczesne strony i aplikacje webowe, które pomagają firmom zdobywać więcej klientów online.",
    ogLocale: "pl_PL",
  },
};

function upsertMetaAttribute(attributeName, attributeValue, content) {
  let tag = document.querySelector(
    `meta[${attributeName}="${attributeValue}"]`,
  );
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attributeName, attributeValue);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function upsertCanonical(url) {
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }
  canonical.setAttribute("href", url);
}

export function MainPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState("en");
  const [compactNav, setCompactNav] = useState(false);

  const navBarRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef(null);
  const languageBtnRef = useRef(null);

  // Refs for animations
  const welcomeRef = useRef(null);
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
          },
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
          },
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
          },
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
          },
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
          },
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
          },
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
          },
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

  useEffect(() => {
    const updateCompactNav = () => {
      if (
        !navBarRef.current ||
        !logoRef.current ||
        !linksRef.current ||
        !languageBtnRef.current
      ) {
        return;
      }

      const navWidth = navBarRef.current.clientWidth;
      const logoWidth = logoRef.current.getBoundingClientRect().width;
      const languageBtnWidth =
        languageBtnRef.current.getBoundingClientRect().width;

      const linksElement = linksRef.current;
      const previousDisplay = linksElement.style.display;
      const previousPosition = linksElement.style.position;
      const previousVisibility = linksElement.style.visibility;

      linksElement.style.display = "flex";
      linksElement.style.position = "static";
      linksElement.style.visibility = "hidden";
      const linksWidth = linksElement.scrollWidth;
      linksElement.style.display = previousDisplay;
      linksElement.style.position = previousPosition;
      linksElement.style.visibility = previousVisibility;

      const navStyles = window.getComputedStyle(navBarRef.current);
      const paddingX =
        parseFloat(navStyles.paddingLeft) + parseFloat(navStyles.paddingRight);
      const gapValue = parseFloat(navStyles.columnGap || navStyles.gap || "0");
      const reservedSpace = gapValue * 2 + 24;

      const requiredWidth =
        logoWidth + linksWidth + languageBtnWidth + paddingX + reservedSpace;

      const shouldUseCompact =
        window.innerWidth <= 768 ||
        (window.innerWidth <= 860 && requiredWidth > navWidth + 8);
      setCompactNav(shouldUseCompact);
    };

    updateCompactNav();
    window.addEventListener("resize", updateCompactNav);

    return () => {
      window.removeEventListener("resize", updateCompactNav);
    };
  }, [language]);

  useEffect(() => {
    if (!compactNav) {
      setMenuOpen(false);
    }
  }, [compactNav]);

  useEffect(() => {
    const seo = seoTranslations[language];

    document.documentElement.lang = language;
    document.title = seo.title;

    upsertMetaAttribute("name", "description", seo.description);
    upsertMetaAttribute("property", "og:title", seo.title);
    upsertMetaAttribute("property", "og:description", seo.description);
    upsertMetaAttribute("property", "og:locale", seo.ogLocale);
    upsertMetaAttribute("name", "twitter:title", seo.title);
    upsertMetaAttribute("name", "twitter:description", seo.description);

    if (typeof window !== "undefined") {
      upsertCanonical(`${window.location.origin}/`);
      upsertMetaAttribute("property", "og:url", `${window.location.origin}/`);
    }
  }, [language]);

  return (
    <div className="MainPageContainer">
      {/* Global fixed NavBar */}
      <div className={`NavBar ${compactNav ? "compact" : ""}`} ref={navBarRef}>
        <div className="Logo" ref={logoRef}>
          Mikolaj.dev
        </div>
        <button
          className="MenuToggle"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((v) => !v)}
          type="button"
        >
          ☰
        </button>
        <nav
          id="main-navigation"
          ref={linksRef}
          className={`Links ${menuOpen ? "open" : ""}`}
          aria-label={
            language === "pl" ? "Nawigacja główna" : "Main navigation"
          }
          onClick={() => setMenuOpen(false)}
        >
          <a href="#home">{translations[language].home}</a>
          <a href="#about">{translations[language].about}</a>
          <a href="#skills">{translations[language].skills}</a>
          <a href="#projects">{translations[language].projects}</a>

          <a href="#contact">{translations[language].contact}</a>
        </nav>
        <button
          className="language-btn"
          onClick={() => setLanguage(language === "en" ? "pl" : "en")}
          title="Switch Language"
          ref={languageBtnRef}
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
        <h1 className="sr-only">
          {language === "pl"
            ? "Mikołaj Siwiecki - Front-End Developer"
            : "Mikołaj Siwiecki - Front-End Developer"}
        </h1>
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
