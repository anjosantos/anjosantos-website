import React from "react";

import { GridPage, CrawlScrollbar } from "@/components";

type AboutProps = {};

const About: React.FC<AboutProps> = ({}) => {
  return (
    <GridPage>
      <CrawlScrollbar>
        <section
          style={{
            color: "yellow",
          }}
        >
          <h1>ABOUT</h1>
          <h2>Profile</h2>
          <p>
            A full-stack developer with over 12 years of experience in the
            industry, handling application development and complex technical
            issues and possessing strong social and leadership skills.
          </p>
          <p>
            Proven ability to pilot feature design and implementation across the
            full software development lifecycle–from concept to deployment and
            production–in agile environments with proper documentations.
          </p>
          <p>
            Experienced in Application Development from the ground-up, with a
            strong background in building secure, scalable web applications
            using Java, Node.js, Javascript, Typescript, React JS, Redux,
            WebSockets, Bootstrap, MUI, and CSS.
          </p>
          <p>
            Proficient with cloud platforms (Azure, AWS), DevOps practices, and
            modern CI/CD pipelines for scalable app deployment and operations.
          </p>
          <p>
            Advocates clean code, adoption of new emerging technologies and
            continuous improvement, with hands-on experience mentoring teams and
            upholding engineering best practices.
          </p>
          <p>
            Possesses a passion for technology and a continuous desire to learn,
            fast learner, highly adaptable and consistently able to deliver
            high-quality results from newly acquired skills.
          </p>

          <h2>Experience</h2>
          <h3>
            Senior UI & Frontend Developer (XR Team / Group AI Solutions &
            Services Team) — Grundfos, Pasig, Philippines (May 2023 – May 2025)
          </h3>
          <ul>
            <li>
              Pioneered and created Grundfos Product/Work Companion Frontend
              Application—the company’s own version of ChatGPT.
            </li>
            <li>
              Overhauled Site Companion by rewriting from Vue.js to React.js to
              align with new design standards.
            </li>
            <li>
              Learned .Net MAUI and developed an MVP for an image and 3D
              capturing mobile application.
            </li>
            <li>
              Led the team in Scrum ceremonies after transitioning to Agile.
            </li>
            <li>Explored GPT models for internal process optimization.</li>
            <li>
              Mentored interns and trained colleagues to support team growth.
            </li>
            <li>Conducted technical interviews for developer applicants.</li>
            <li>Optimized build performance with Vite and npm.</li>
          </ul>

          <h3>
            CTO / Lead Developer — Scout Bees (Startup), Victoria, Canada (March
            2022 – July 2024)
          </h3>
          <ul>
            <li>
              Led the company’s technical direction and strategy, delivering a
              web application MVP.
            </li>
            <li>
              Developed the MVP from the ground up including coding, testing,
              and deployment.
            </li>
            <li>
              Built a scalable RESTful API backend using Python and Django.
            </li>
            <li>
              Engineered robust API integrations with third-party services.
            </li>
          </ul>

          <h3>
            Application Developer (Internet of Things Team) — Grundfos, Pasig,
            Philippines (Nov 2019 – May 2023)
          </h3>
          <ul>
            <li>Led frontend UI/UX development for project increments.</li>
            <li>Learned C# .Net Core for backend development.</li>
            <li>Presented during PI demos and knowledge transfers.</li>
            <li>
              Recognized for frontend code reusability initiative at Grundfos
              New Year’s Reception 2023.
            </li>
            <li>
              Acted as champion in IoT Cloud Architecture Forums and Frontend
              Guild representative.
            </li>
          </ul>

          <h3>
            CTO / Lead Developer — Bukid Fresh (Startup), Manila, Philippines
            (Mar 2019 – Apr 2021)
          </h3>
          <ul>
            <li>
              Oversaw technical direction, infrastructure, and architecture.
            </li>
            <li>
              Developed a single-page application with Python Django backend and
              React frontend.
            </li>
            <li>Formed and led a small team to reduce backlog.</li>
          </ul>

          <h3>
            Mobile/Web Developer — Digital Classified Group, Mandaluyong,
            Philippines (Jul 2018 – Nov 2019)
          </h3>
          <ul>
            <li>Led Mobile Development team using React Native.</li>
            <li>Learned Django and supported backend development.</li>
          </ul>
          <p>
            <strong>Bachelor of Science in Information Systems</strong>{" "}
            (graduated with honors), De La Salle University, Manila, Philippines
            — February 2013
          </p>
        </section>
      </CrawlScrollbar>
    </GridPage>
  );
};

export default About;
