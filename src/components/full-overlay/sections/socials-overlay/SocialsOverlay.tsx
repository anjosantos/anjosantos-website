import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareLinkedin,
  faSquareGithub,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { motion, AnimatePresence } from "framer-motion";

import "./socials-overlay.css";

type SocialsOverlayContainerProps = {
  isVisible: boolean;
};

const SocialsOverlayContainer: React.FC<SocialsOverlayContainerProps> = ({
  isVisible,
}) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.section
          className="clickable mt-5 transition"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          style={{ width: "100%" }}
        >
          <a
            className="social-button"
            href="https://www.linkedin.com/in/nicol-angelo-santos/"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faSquareLinkedin}
              color="#8cd1c4"
              size="lg"
            />
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
            <FontAwesomeIcon
              icon={faSquareInstagram}
              color="#8cd1c4"
              size="lg"
            />
          </a>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default SocialsOverlayContainer;
