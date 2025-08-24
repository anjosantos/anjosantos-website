import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareLinkedin,
  faSquareGithub,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";

import "./socials-overlay.css";

type SocialsOverlayContainerProps = {
  isVisible: boolean;
};

const SocialsOverlayContainer: React.FC<SocialsOverlayContainerProps> = ({
  isVisible,
}) => {
  return (
    <section
      className={`clickable mt-5 transition hidable ${
        isVisible ? "visible" : ""
      }`}
    >
      <a
        className="social-button"
        href="https://www.linkedin.com/in/nicol-angelo-santos/"
        target="_blank"
      >
        <FontAwesomeIcon icon={faSquareLinkedin} color="#8cd1c4" size="lg" />
      </a>
      <a
        className="social-button"
        href="https://github.com/anjosantos"
        target="_blank"
      >
        <FontAwesomeIcon icon={faSquareGithub} color="#8cd1c4" size="lg" />
      </a>
      <a
        className="social-button"
        href="https://www.instagram.com/anjo_santos"
        target="_blank"
      >
        <FontAwesomeIcon icon={faSquareInstagram} color="#8cd1c4" size="lg" />
      </a>
    </section>
  );
};

export default SocialsOverlayContainer;
