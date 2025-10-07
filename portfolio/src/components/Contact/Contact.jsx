import "./Contact.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapLocation,
} from "@fortawesome/free-solid-svg-icons";
export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  const onSubmit = async (event) => {
    console.log("wysłano");
    event.preventDefault();
    if (isSending) return; // prevent duplicate submits
    setStatus("");
    setIsSending(true);
    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", "ee2e360f-f841-4e52-a01b-fd4da7704996");

    try {
      const res = await fetch("/web3forms/submit", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      }).then((r) => r.json());

      if (res.success) {
        console.log("Success", res);
        setStatus("Message sent successfully. Thank you!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus(res.message || "Failed to send. Please try again later.");
      }
    } catch (err) {
      setStatus("Network error. Please try again later.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="contactBox">
      <h1 className="contact-title">
        Get in <span style={{ color: "#9d03fc" }}>Touch</span>
      </h1>
      <span style={{ color: "white", textAlign: "center" }}>
        Have a project in mind or want to collaborate? Feel free to reach out.
        I'm always open to discussing new opportunities.
      </span>
      <div className="box2">
        <div className="info-container">
          <h2>Contact Information</h2>
          <div className="email-div">
            <FontAwesomeIcon className="contactIcon" icon={faEnvelope} />
            Email: siwieckimiki@gmail.com
          </div>
          <div className="phone-div">
            <FontAwesomeIcon className="contactIcon" icon={faPhone} />
            Phone: +48 578 868 447
          </div>
          <div className="localization-div">
            <FontAwesomeIcon className="contactIcon" icon={faMapLocation} />
            Localization: Cracow, Poland
          </div>
        </div>
        <div className="form-container">
          <h2>Send a Message</h2>
          <form onSubmit={onSubmit}>
            <input
              id="name"
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              placeholder="Message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit" disabled={isSending}>
              {isSending ? "Sending..." : "Send"}
            </button>
          </form>
          {status && (
            <div style={{ marginTop: "0.6rem", fontSize: "0.95rem" }}>
              {status}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
