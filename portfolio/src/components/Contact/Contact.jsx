import "./Contact.css";
import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import {
  faEnvelope,
  faPhone,
  faMapLocation,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import emailjs from "@emailjs/browser";

const contactTranslations = {
  en: {
    title: "Get in",
    touch: "Touch",
    description:
      "Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities.",
    contactInfo: "Contact Information",
    email: "Email: mikolajdev14@gmail.com",
    phone: "Phone: +48 578 868 447",
    location: "Localization: Cracow, Poland",
    github: "GitHub",
    instagram: "Instagram",
    sendMessage: "Send a Message",
    namePlaceholder: "Name",
    emailPlaceholder: "Email",
    messagePlaceholder: "Message",
    sendButton: "Send",
    sending: "Sending...",
    success: "Message sent successfully. Thank you!",
    error: "Failed to send. Please try again later.",
  },
  pl: {
    title: "Skontaktuj",
    touch: "się",
    description:
      "Masz projekt na myśli lub chcesz współpracować? Śmiało napisz. Zawsze jestem otwarty na omawianie nowych możliwości.",
    contactInfo: "Informacje kontaktowe",
    email: "Email: mikolajdev14@gmail.com",
    phone: "Telefon: +48 578 868 447",
    location: "Lokalizacja: Kraków, Polska",
    github: "GitHub",
    instagram: "Instagram",
    sendMessage: "Wyślij wiadomość",
    namePlaceholder: "Imię",
    emailPlaceholder: "Email",
    messagePlaceholder: "Wiadomość",
    sendButton: "Wyślij",
    sending: "Wysyłanie...",
    success: "Wiadomość wysłana pomyślnie. Dziękuję!",
    error: "Nie udało się wysłać. Spróbuj ponownie później.",
  },
};

export function Contact({ language = "en" }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  const titleRef = useRef(null);
  const descRef = useRef(null);
  const infoRef = useRef(null);
  const formRef = useRef(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    if (isSending) return; // prevent duplicate submits
    setStatus("");
    setIsSending(true);
    const form = event.currentTarget;

    emailjs
      .sendForm(
        "service_6grfqjd",
        "template_p74lq8u",
        form,
        "zi4NnaNsXzp4TV37G"
      )
      .then(
        (result) => {
          console.log("Success", result);
          setStatus(contactTranslations[language].success);
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log("Error", error);
          setStatus(contactTranslations[language].error);
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

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

      if (descRef.current) {
        gsap.fromTo(
          descRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: descRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
              fastScrollEnd: true,
            },
          }
        );
      }

      if (infoRef.current) {
        gsap.fromTo(
          infoRef.current,
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: infoRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
              fastScrollEnd: true,
            },
          }
        );
      }

      if (formRef.current) {
        gsap.fromTo(
          formRef.current,
          { opacity: 0, x: 50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: formRef.current,
              start: "top 85%",
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
          trigger.trigger === descRef.current ||
          trigger.trigger === infoRef.current ||
          trigger.trigger === formRef.current
        ) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <div className="contactBox">
      <h1 className="contact-title" ref={titleRef}>
        {contactTranslations[language].title}{" "}
        <span style={{ color: "#9d03fc" }}>
          {contactTranslations[language].touch}
        </span>
      </h1>
      <span style={{ color: "white", textAlign: "center" }} ref={descRef}>
        {contactTranslations[language].description}
      </span>
      <div className="box2">
        <div className="info-container" ref={infoRef}>
          <h2>{contactTranslations[language].contactInfo}</h2>
          <div className="email-div">
            <FontAwesomeIcon className="contactIcon" icon={faEnvelope} />
            {contactTranslations[language].email}
          </div>
          <div className="phone-div">
            <FontAwesomeIcon className="contactIcon" icon={faPhone} />
            {contactTranslations[language].phone}
          </div>
          <div className="localization-div">
            <FontAwesomeIcon className="contactIcon" icon={faMapLocation} />
            {contactTranslations[language].location}
          </div>
          <div className="github-div">
            <FontAwesomeIcon className="contactIcon" icon={faGithub} />
            <a
              href="https://github.com/mikolajdev14"
              target="_blank"
              rel="noopener noreferrer"
            >
              {contactTranslations[language].github}
            </a>
          </div>
          <div className="instagram-div">
            <FontAwesomeIcon className="contactIcon" icon={faInstagram} />
            <a
              href="https://instagram.com/mikolajdev"
              target="_blank"
              rel="noopener noreferrer"
            >
              {contactTranslations[language].instagram}
            </a>
          </div>
        </div>
        <div className="form-container" ref={formRef}>
          <h2>{contactTranslations[language].sendMessage}</h2>
          <form onSubmit={onSubmit}>
            <input
              id="name"
              type="text"
              placeholder={contactTranslations[language].namePlaceholder}
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder={contactTranslations[language].emailPlaceholder}
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              placeholder={contactTranslations[language].messagePlaceholder}
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit" disabled={isSending}>
              {isSending
                ? contactTranslations[language].sending
                : contactTranslations[language].sendButton}
            </button>
          </form>
          {status && (
            <div
              style={{
                marginTop: "0.6rem",
                fontSize: "0.95rem",
                textAlign: "center",
              }}
            >
              {status}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
