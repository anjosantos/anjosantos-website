import React from "react";

import { GridPage, CrawlScrollbar, Pill } from "@/components";

import "./about.css";

type AboutProps = {};

const About: React.FC<AboutProps> = ({}) => {
  return (
    <GridPage>
      <CrawlScrollbar>
        <section className="about-container">
          <section className="title-section">
            <h5 className="main-title">About</h5>
            <h2 className="sub-title">ANJO SANTOS</h2>
          </section>
          <p>
            I am a full-stack developer with over 12 years of experience
            building secure, scalable web and mobile applications across diverse
            industries. Skilled in both frontend and backend development, I
            specialize in JavaScript, TypeScript, React, Node.js, and
            Python/Django, with additional expertise in Java, PHP, and cloud
            platforms like AWS and Azure. My career spans leading technical
            strategy as CTO in startups, pioneering AI-driven applications at
            Grundfos, and architecting solutions from concept to production in
            agile environments. I’m passionate about clean code, emerging
            technologies, and continuous improvement, with a proven track record
            of mentoring teams, driving innovation, and delivering high-quality
            solutions that create real impact.
          </p>
          <section className="title-section">
            <h2 className="header">EXPERIENCE</h2>
          </section>

          <div className="experience-item">
            <div className="experience-date">May 2023 – May 2025</div>
            <div className="experience-details">
              <h3>Senior UI & Frontend Developer</h3>
              <h4>Grundfos — Pasig, Philippines</h4>
              <p>
                As part of the XR Team and Group AI Solutions & Services, I
                spearheaded the development of the Grundfos Product/Work
                Companion frontend—an internal ChatGPT-style application. I
                modernized the Site Companion by migrating it from Vue.js to
                React.js, optimized builds with Vite and npm, and built an MVP
                mobile app using .NET MAUI for image and 3D capture. Beyond
                development, I facilitated Agile ceremonies, mentored interns,
                trained colleagues, and conducted technical interviews, while
                also exploring GPT models for process optimization.
              </p>
              <section className="experience-pills">
                {[
                  "Agile",
                  "Azure",
                  "Azure AI Studio",
                  "Node",
                  "ReactJS",
                  "BabylonJS",
                  "ModelViewer",
                  "Vue.JS",
                  "Typescript",
                  ".NET MAUI",
                  "RestFUL API",
                  "Figma",
                ].map((pill) => (
                  <Pill variant="about" label={pill} />
                ))}
              </section>
            </div>
          </div>

          <div className="experience-item">
            <div className="experience-date">Mar 2022 – Jul 2024</div>
            <div className="experience-details">
              <h3>CTO / Lead Developer</h3>
              <h4>Scout Bees (Startup) — Victoria, Canada</h4>
              <p>
                I directed the company’s technical vision and strategy,
                delivering a secure rental property platform tailored for
                international students. From concept to deployment, I built the
                MVP web application, engineered a scalable RESTful API with
                Django, and integrated third-party services to ensure a robust
                and seamless product experience.
              </p>
              <section className="experience-pills">
                {[
                  "Python",
                  "Django",
                  "Node",
                  "ReactJS",
                  "Context API",
                  "Typescript",
                  "Storybook",
                  "Websockets",
                  "AWS",
                  "Docker",
                  "Postgres",
                  "RestFUL API",
                  "Figma",
                ].map((pill) => (
                  <Pill variant="about" label={pill} />
                ))}
              </section>
            </div>
          </div>

          <div className="experience-item">
            <div className="experience-date">Nov 2019 – May 2023</div>
            <div className="experience-details">
              <h3>Application Developer (IoT Team)</h3>
              <h4>Grundfos — Pasig, Philippines</h4>
              <p>
                Focused on frontend UI/UX for IoT projects while also learning
                C# .NET Core for backend development. I contributed to PI demos
                and knowledge transfers, championed frontend code reusability
                (recognized at Grundfos New Year’s Reception 2023), and
                represented the team in IoT Cloud Architecture Forums and the
                Frontend Guild.
              </p>
              <section className="experience-pills">
                {[
                  "Agile",
                  "Azure",
                  "ARM Template",
                  "Node",
                  "ReactJS",
                  "Context API",
                  "Typescript",
                  "C# .NET Core",
                  "Microservices",
                  "RestFUL API",
                  "MUI",
                ].map((pill) => (
                  <Pill variant="about" label={pill} />
                ))}
              </section>
            </div>
          </div>

          <div className="experience-item">
            <div className="experience-date">Mar 2019 – Apr 2021</div>
            <div className="experience-details">
              <h3>CTO / Lead Developer</h3>
              <h4>Bukid Fresh (Startup) — Manila, Philippines</h4>
              <p>
                Oversaw the startup’s technical direction, architecture, and
                infrastructure. I developed a single-page application with a
                Django backend and React frontend, while building and guiding a
                small team to accelerate delivery and reduce backlog.
              </p>
              <section className="experience-pills">
                {[
                  "Python",
                  "Django",
                  "Node",
                  "ReactJS",
                  "Redux",
                  "Typescript",
                  "AWS",
                  "Docker",
                  "Postgres",
                  "RestFUL API",
                ].map((pill) => (
                  <Pill variant="about" label={pill} />
                ))}
              </section>
            </div>
          </div>

          <div className="experience-item">
            <div className="experience-date">Jul 2018 – Nov 2019</div>
            <div className="experience-details">
              <h3>Mobile/Web Developer</h3>
              <h4>Digital Classified Group — Mandaluyong, Philippines</h4>
              <p>
                Led the Mobile Development team using React Native and expanded
                my skills by learning Django for backend tasks, successfully
                supporting critical features. Collaborated closely with project
                managers, developers, and testers to improve delivery workflows.
              </p>
              <section className="experience-pills">
                {[
                  "Python",
                  "Django",
                  "Node",
                  "React Native",
                  "Redux",
                  "Typescript",
                  "AWS",
                  "Docker",
                  "Postgres",
                  "RestFUL API",
                ].map((pill) => (
                  <Pill variant="about" label={pill} />
                ))}
              </section>
            </div>
          </div>

          <div className="experience-item">
            <div className="experience-date">Jul 2013 – Jul 2017</div>
            <div className="experience-details">
              <h3>Java Developer</h3>
              <h4>Seven Seven Global Services Inc. — Pasig, Philippines</h4>
              <p>
                Completed an intensive career development program in
                communication, banking fundamentals, and Java, which led to
                supporting major clients. At Deutsche Bank, I acted as technical
                SME for Java applications under the RAD team, mentoring new
                hires and raising documentation standards. At JP Morgan Chase, I
                managed feature development and production support for critical
                banking systems, ensuring 24/7 stability and supporting the
                team’s transition to Agile practices.
              </p>

              <section className="experience-pills">
                {[
                  "Agile",
                  "Java",
                  "Spring",
                  "Hibernate",
                  "JSP",
                  "SQL",
                  "Oracle DB",
                ].map((pill) => (
                  <Pill variant="about" label={pill} />
                ))}
              </section>
            </div>
          </div>

          <div className="experience-item">
            <div className="experience-date">Oct 2012 – Jan 2013</div>
            <div className="experience-details">
              <h3>Intern</h3>
              <h4>Makati, Philippines</h4>
              <p>
                Handled technical documentation for the regional operations
                department and initiated automation improvements that
                significantly increased efficiency in generating technical
                documents.
              </p>
              <section className="experience-pills">
                {["Microsoft", "Macros"].map((pill) => (
                  <Pill variant="about" label={pill} />
                ))}
              </section>
            </div>
          </div>
        </section>
      </CrawlScrollbar>
    </GridPage>
  );
};

export default About;
