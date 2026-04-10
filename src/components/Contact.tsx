import React from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import "../assets/styles/Contact.scss";
import { linkCards } from "../data/site";

function Contact() {
  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Public links</h1>
          <p className="section-copy">
            Everything below should be reachable without sign-in. If a page is not clearly public,
            it does not get promoted here.
          </p>
          <div className="contact-links-grid">
            {linkCards.map((card) => (
              <a
                className="contact-card"
                href={card.url}
                key={card.title}
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
                <OpenInNewIcon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
