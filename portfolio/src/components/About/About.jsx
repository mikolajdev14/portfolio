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
    heading: "Innovative Web Developer & Digital Solutions Architect",
    description:
      "I thrive on turning complex problems into elegant, user-centric solutions. With a relentless commitment to learning, I stay ahead of the curve in web technologies, delivering projects that not only meet expectations but exceed them.",
    websites: "Websites",
    websitesDesc:
      "Crafting visually stunning and highly functional websites using modern technologies like React, ensuring optimal performance and user engagement.",
    webApps: "Web Applications",
    webAppsDesc:
      "Developing robust web applications with React and complementary technologies, tailored to solve real-world challenges and drive business growth.",
    mobileApps: "Mobile Applications",
    mobileAppsDesc:
      "Building intuitive mobile applications with React Native, providing seamless experiences across iOS and Android platforms.",
  },
  pl: {
    title: "O",
    me: "mnie",
    heading: "Innowacyjny Deweloper Webowy i Architekt Rozwiązań Cyfrowych",
    description:
      "Zajmuje się przekształcaniem złożonych problemów w eleganckie, skoncentrowane na użytkowniku rozwiązania. Z nieustannym zaangażowaniem w naukę, pozostaję na czele technologii webowych, dostarczając projekty, które nie tylko spełniają oczekiwania, ale je przekraczają.",
    websites: "Strony internetowe",
    websitesDesc:
      "Tworzenie wizualnie imponujących i wysoce funkcjonalnych stron internetowych przy użyciu nowoczesnych technologii jak React, zapewniając optymalną wydajność i zaangażowanie użytkowników.",
    webApps: "Aplikacje webowe",
    webAppsDesc:
      "Rozwijanie solidnych aplikacji webowych z React i uzupełniającymi technologiami, dostosowanymi do rozwiązywania rzeczywistych wyzwań i napędzania wzrostu biznesu.",
    mobileApps: "Aplikacje mobilne",
    mobileAppsDesc:
      "Budowanie intuicyjnych aplikacji mobilnych z React Native, zapewniając płynne doświadczenia na platformach iOS i Android.",
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
