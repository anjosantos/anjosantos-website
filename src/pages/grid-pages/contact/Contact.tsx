import React from "react";

import { GridPage, FloatingWrapper } from "@/components";

import "./contact.css";

type ContactProps = {};

const Contact: React.FC<ContactProps> = () => {
  return (
    <GridPage>
      <section className="contact-main-container">
        <section className="contact-container">
          <FloatingWrapper>
            <h1 className="contact-heading">Greetings!</h1>
            <span className="contact-description">
              I am not on Earth right now, but you can still reach me at this
              email:{" "}
              <a
                className="contact-email transition clickable"
                href="mailto:santos.nicol.angelo@gmail.com"
              >
                santos.nicol.angelo@gmail.com
              </a>
            </span>
          </FloatingWrapper>
        </section>
      </section>
    </GridPage>
  );
};

export default Contact;
