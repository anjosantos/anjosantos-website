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
      <button className="social-button" onClick={() => console.log("TEST 1")}>
        <FontAwesomeIcon icon={faSquareLinkedin} color="#8cd1c4" size="lg" />
      </button>
      <button className="social-button" onClick={() => console.log("TEST 2")}>
        <FontAwesomeIcon icon={faSquareGithub} color="#8cd1c4" size="lg" />
      </button>
      <button className="social-button" onClick={() => console.log("TEST 3")}>
        <FontAwesomeIcon icon={faSquareInstagram} color="#8cd1c4" size="lg" />
      </button>
    </section>
  );
};

export default SocialsOverlayContainer;
